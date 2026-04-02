import { useState, useRef, useEffect, useCallback, memo } from "react";
import type { EEGData } from "../types";
import { useChat } from "../hooks/useChat";
import type { ChatConfig } from "../hooks/useChat";
import { useVideoContext } from "../hooks/useVideoContext";
import WebcamFeed from "./WebcamFeed";

// ── ChatPanel ────────────────────────────────────────────────────────────

interface ChatPanelProps {
  eegData: EEGData;
  open: boolean;
  onClose: () => void;
}

const ChatPanel = memo(function ChatPanel({ eegData, open, onClose }: ChatPanelProps) {
  const webcamRef = useRef<HTMLVideoElement>(null);
  const videoData = useVideoContext(webcamRef, open);
  const { messages, streaming, error, config, setConfig, send, clear } = useChat(eegData, videoData);
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    send(input);
    setInput("");
  }, [input, send]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className={`chat-panel${open ? " open" : ""}`}>
      {/* Header */}
      <div className="chat-header">
        <span className="chat-title">
          🧠 EEG Assistant
          {!config.apiKey && <span className="chat-eco-badge">ECO</span>}
        </span>
        <div className="chat-header-actions">
          <button
            className="chat-icon-btn"
            onClick={() => setShowSettings((v) => !v)}
            title="Settings"
          >
            ⚙
          </button>
          <button className="chat-icon-btn" onClick={clear} title="Clear chat">
            🗑
          </button>
          <button className="chat-icon-btn" onClick={onClose} title="Close">
            ✕
          </button>
        </div>
      </div>

      {/* Settings drawer */}
      {showSettings && (
        <SettingsForm
          config={config}
          onChange={setConfig}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Webcam */}
      <WebcamFeed active={open} videoRef={webcamRef} videoData={videoData} />

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-empty">
            {config.apiKey
              ? "Ask anything about your live EEG data."
              : "No API key — running in eco mode.\nMessages will show the context snapshot the AI would receive.\n\nOpen ⚙ Settings to configure your provider."}
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg chat-msg-${msg.role}`}>
            <div className="chat-msg-content">{msg.content || "…"}</div>
          </div>
        ))}
        {error && <div className="chat-error">{error}</div>}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <textarea
          ref={inputRef}
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={streaming ? "Waiting for response…" : "Ask about your EEG…"}
          rows={1}
          disabled={streaming}
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={streaming || !input.trim()}
        >
          {streaming ? "…" : "↑"}
        </button>
      </div>
    </div>
  );
});

export default ChatPanel;

// ── Provider presets ──────────────────────────────────────────────────────

interface ProviderPreset {
  label: string;
  endpoint: string;
  models: string[];
  needsKey: boolean;
}

const PROVIDERS: Record<string, ProviderPreset> = {
  anthropic: {
    label: "Anthropic",
    endpoint: "https://api.anthropic.com/v1/messages",
    models: ["claude-sonnet-4-20250514", "claude-opus-4-6", "claude-haiku-3-5-20241022"],
    needsKey: true,
  },
  openai: {
    label: "OpenAI",
    endpoint: "https://api.openai.com/v1/chat/completions",
    models: ["gpt-4o-mini", "gpt-4o", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4.1"],
    needsKey: true,
  },
  groq: {
    label: "Groq",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    models: ["llama-3.3-70b-versatile", "llama-3.1-8b-instant", "gemma2-9b-it", "mixtral-8x7b-32768"],
    needsKey: true,
  },
  together: {
    label: "Together AI",
    endpoint: "https://api.together.xyz/v1/chat/completions",
    models: ["meta-llama/Llama-3.3-70B-Instruct-Turbo", "meta-llama/Llama-3.1-8B-Instruct-Turbo", "mistralai/Mixtral-8x7B-Instruct-v0.1"],
    needsKey: true,
  },
  openrouter: {
    label: "OpenRouter",
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    models: ["openai/gpt-4o-mini", "anthropic/claude-3.5-haiku", "google/gemini-2.0-flash-exp:free", "meta-llama/llama-3.3-70b-instruct"],
    needsKey: true,
  },
  ollama: {
    label: "Ollama (local)",
    endpoint: "http://localhost:11434/v1/chat/completions",
    models: ["llama3", "mistral", "gemma2", "phi3", "codellama"],
    needsKey: false,
  },
  lmstudio: {
    label: "LM Studio (local)",
    endpoint: "http://localhost:1234/v1/chat/completions",
    models: ["(use loaded model)"],
    needsKey: false,
  },
  custom: {
    label: "Custom",
    endpoint: "",
    models: [],
    needsKey: true,
  },
};

function detectProvider(endpoint: string): string {
  for (const [id, p] of Object.entries(PROVIDERS)) {
    if (id !== "custom" && p.endpoint && endpoint === p.endpoint) return id;
  }
  return "custom";
}

// ── Settings form ────────────────────────────────────────────────────────

interface SettingsFormProps {
  config: ChatConfig;
  onChange: (c: ChatConfig) => void;
  onClose: () => void;
}

function SettingsForm({ config, onChange, onClose }: SettingsFormProps) {
  const [provider, setProvider] = useState(() => detectProvider(config.endpoint));
  const [endpoint, setEndpoint] = useState(config.endpoint);
  const [apiKey, setApiKey] = useState(config.apiKey);
  const [model, setModel] = useState(config.model);

  const preset = PROVIDERS[provider];
  const isCustom = provider === "custom";

  const handleProviderChange = (id: string) => {
    setProvider(id);
    const p = PROVIDERS[id];
    if (id !== "custom") {
      setEndpoint(p.endpoint);
      if (p.models.length > 0 && !p.models.includes(model)) {
        setModel(p.models[0]);
      }
    }
  };

  const save = () => {
    onChange({ endpoint: endpoint.trim(), apiKey: apiKey.trim(), model: model.trim() });
    onClose();
  };

  return (
    <div className="chat-settings">
      <label>
        Provider
        <select
          className="chat-settings-select"
          value={provider}
          onChange={(e) => handleProviderChange(e.target.value)}
        >
          {Object.entries(PROVIDERS).map(([id, p]) => (
            <option key={id} value={id}>{p.label}</option>
          ))}
        </select>
      </label>

      {isCustom && (
        <label>
          Endpoint
          <input
            type="url"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="https://api.openai.com/v1/chat/completions"
          />
        </label>
      )}

      {(preset.needsKey || isCustom) && (
        <label>
          API Key
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={preset.needsKey ? "sk-… (leave empty for eco mode)" : "(not required)"}
            autoComplete="off"
          />
        </label>
      )}

      <label>
        Model
        {!isCustom && preset.models.length > 0 ? (
          <>
            <select
              className="chat-settings-select"
              value={preset.models.includes(model) ? model : "__custom__"}
              onChange={(e) => {
                if (e.target.value !== "__custom__") setModel(e.target.value);
              }}
            >
              {preset.models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
              <option value="__custom__">Custom…</option>
            </select>
            {!preset.models.includes(model) && (
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter model name"
                style={{ marginTop: 3 }}
              />
            )}
          </>
        ) : (
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="gpt-4o-mini, llama3, …"
          />
        )}
      </label>

      {!isCustom && (
        <div className="chat-settings-hint">
          Endpoint: <code>{preset.endpoint}</code>
        </div>
      )}

      {isCustom && (
        <div className="chat-settings-hint">
          Works with any OpenAI-compatible endpoint:<br />
          OpenAI · Groq · Together · OpenRouter · Ollama · LM Studio
        </div>
      )}

      <div className="chat-settings-actions">
        <button className="btn" onClick={save}>Save</button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
