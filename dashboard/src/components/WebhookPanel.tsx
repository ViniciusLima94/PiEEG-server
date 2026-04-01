import { useState, useEffect, useCallback, useRef } from "react";
import {
  TRIGGER_TYPES,
  BANDS,
  type TriggerType,
  type WebhookRule,
  type WebhookEvent,
  type WSWebhookMessage,
} from "../types";

// ── trigger labels / descriptions ─────────────────────────────────────────

const TRIGGER_LABELS: Record<TriggerType, string> = {
  band_power_above: "Band power above",
  band_power_below: "Band power below",
  amplitude_above: "Amplitude above",
  amplitude_below: "Amplitude below",
  band_ratio_above: "Band ratio above",
  band_ratio_below: "Band ratio below",
};

const NEEDS_BAND = new Set<TriggerType>([
  "band_power_above", "band_power_below",
]);
const NEEDS_RATIO = new Set<TriggerType>([
  "band_ratio_above", "band_ratio_below",
]);
const NEEDS_CHANNEL = new Set<TriggerType>([
  "band_power_above", "band_power_below",
  "amplitude_above", "amplitude_below",
  "band_ratio_above", "band_ratio_below",
]);

interface Props {
  open: boolean;
  onClose: () => void;
  sendCommand: (cmd: Record<string, unknown>) => void;
  numChannels: number;
}

export default function WebhookPanel({ open, onClose, sendCommand, numChannels }: Props) {
  const [rules, setRules] = useState<WebhookRule[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [editing, setEditing] = useState<WebhookRule | null>(null);
  const [tab, setTab] = useState<"rules" | "log">("rules");
  const eventsRef = useRef(events);
  eventsRef.current = events;

  // Load rules on open
  useEffect(() => {
    if (open) sendCommand({ cmd: "webhook_list" });
  }, [open, sendCommand]);

  // Listen for webhook messages from the WS (attached to global handler)
  const handleWSMessage = useCallback((msg: WSWebhookMessage) => {
    if (msg.webhook_rules) setRules(msg.webhook_rules);
    if (msg.webhook_created) setRules((prev) => [...prev, msg.webhook_created!]);
    if (msg.webhook_updated) {
      setRules((prev) =>
        prev.map((r) => (r.id === msg.webhook_updated!.id ? msg.webhook_updated! : r))
      );
    }
    if (msg.webhook_deleted !== undefined) {
      // Rule list will be refreshed
      sendCommand({ cmd: "webhook_list" });
    }
    if (msg.webhook_event) {
      const ev = msg.webhook_event;
      setEvents((prev) => [ev, ...prev].slice(0, 50));
    }
  }, [sendCommand]);

  // Expose handler so parent can wire it
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__webhookHandler = handleWSMessage;
    return () => { delete (window as unknown as Record<string, unknown>).__webhookHandler; };
  }, [handleWSMessage]);

  if (!open) return null;

  function saveRule(rule: Partial<WebhookRule> & { id?: string }) {
    if (rule.id && rules.some((r) => r.id === rule.id)) {
      sendCommand({ cmd: "webhook_update", rule_id: rule.id, rule });
    } else {
      sendCommand({ cmd: "webhook_create", rule });
    }
    setEditing(null);
  }

  function deleteRule(id: string) {
    sendCommand({ cmd: "webhook_delete", rule_id: id });
  }

  function testRule(id: string) {
    sendCommand({ cmd: "webhook_test", rule_id: id });
  }

  function toggleRule(rule: WebhookRule) {
    sendCommand({
      cmd: "webhook_update",
      rule_id: rule.id,
      rule: { enabled: !rule.enabled },
    });
  }

  return (
    <div className="webhook-panel side-panel">
      <div className="panel-header">
        <h2>Webhooks</h2>
        <button className="btn-close" onClick={onClose}>×</button>
      </div>

      <div className="webhook-tabs">
        <button className={`wh-tab${tab === "rules" ? " active" : ""}`} onClick={() => setTab("rules")}>
          Rules ({rules.length})
        </button>
        <button className={`wh-tab${tab === "log" ? " active" : ""}`} onClick={() => setTab("log")}>
          Log ({events.length})
        </button>
      </div>

      {tab === "rules" && (
        <div className="webhook-rules">
          {editing ? (
            <RuleEditor
              rule={editing}
              numChannels={numChannels}
              onSave={saveRule}
              onCancel={() => setEditing(null)}
            />
          ) : (
            <>
              <button className="btn btn-add" onClick={() => setEditing(newRule())}>
                + Add Rule
              </button>
              {rules.length === 0 && (
                <p className="wh-empty">No webhook rules configured. Add one to get started.</p>
              )}
              {rules.map((r) => (
                <div key={r.id} className={`wh-rule-card${r.enabled ? "" : " disabled"}`}>
                  <div className="wh-rule-header">
                    <label className="wh-toggle">
                      <input
                        type="checkbox"
                        checked={r.enabled}
                        onChange={() => toggleRule(r)}
                      />
                      <span className="wh-rule-name">{r.name || "Untitled"}</span>
                    </label>
                    <div className="wh-rule-actions">
                      <button className="btn-sm" onClick={() => setEditing(r)} title="Edit">✎</button>
                      <button className="btn-sm" onClick={() => testRule(r.id)} title="Test">▶</button>
                      <button className="btn-sm btn-danger" onClick={() => deleteRule(r.id)} title="Delete">✕</button>
                    </div>
                  </div>
                  <div className="wh-rule-detail">
                    <span className="wh-trigger">{TRIGGER_LABELS[r.trigger_type]}</span>
                    {r.params.band && <span className="wh-badge">{String(r.params.band)}</span>}
                    {r.params.threshold !== undefined && (
                      <span className="wh-badge">≥ {String(r.params.threshold)}</span>
                    )}
                    <span className="wh-badge">⏱ {r.cooldown}s</span>
                    {r.fire_count > 0 && (
                      <span className="wh-badge wh-fired">🔔 {r.fire_count}×</span>
                    )}
                  </div>
                  <div className="wh-url">{r.url || "No URL"}</div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {tab === "log" && (
        <div className="webhook-log">
          {events.length === 0 && <p className="wh-empty">No webhook events yet.</p>}
          {events.map((ev, i) => (
            <div key={`${ev.ts}-${i}`} className="wh-log-entry">
              <span className="wh-log-time">
                {new Date(ev.ts * 1000).toLocaleTimeString()}
              </span>
              <span className="wh-log-name">{ev.rule_name}</span>
              <span className="wh-log-type">{ev.trigger_type}</span>
              <span className="wh-log-value">
                {ev.value.toFixed(2)} (≥{ev.threshold})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Default new rule ──────────────────────────────────────────────────────

function newRule(): WebhookRule {
  return {
    id: "",
    name: "",
    enabled: true,
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: 0, threshold: 10 },
    url: "",
    method: "POST",
    headers: {},
    body_template: "",
    cooldown: 10,
    last_fired: 0,
    fire_count: 0,
  };
}

// ── Rule editor form ──────────────────────────────────────────────────────

function RuleEditor({
  rule,
  numChannels,
  onSave,
  onCancel,
}: {
  rule: WebhookRule;
  numChannels: number;
  onSave: (r: Partial<WebhookRule> & { id?: string }) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(rule.name);
  const [triggerType, setTriggerType] = useState<TriggerType>(rule.trigger_type);
  const [band, setBand] = useState(String(rule.params.band || "alpha"));
  const [numerator, setNumerator] = useState(String(rule.params.numerator || "alpha"));
  const [denominator, setDenominator] = useState(String(rule.params.denominator || "theta"));
  const [channel, setChannel] = useState(String(rule.params.channel ?? 0));
  const [threshold, setThreshold] = useState(String(rule.params.threshold ?? 10));
  const [url, setUrl] = useState(rule.url);
  const [cooldown, setCooldown] = useState(String(rule.cooldown));
  const [bodyTemplate, setBodyTemplate] = useState(rule.body_template);

  function handleSave() {
    const params: Record<string, unknown> = { threshold: parseFloat(threshold) || 0 };
    if (NEEDS_BAND.has(triggerType)) params.band = band;
    if (NEEDS_RATIO.has(triggerType)) {
      params.numerator = numerator;
      params.denominator = denominator;
    }
    if (NEEDS_CHANNEL.has(triggerType)) {
      params.channel = channel === "avg" ? "avg" : parseInt(channel) || 0;
    }
    if (triggerType === "blink_detected" || triggerType === "jaw_clench") {
      params.threshold = parseFloat(threshold) || (triggerType === "blink_detected" ? 150 : 120);
    }

    onSave({
      ...(rule.id ? { id: rule.id } : {}),
      name: name || `${TRIGGER_LABELS[triggerType]}`,
      trigger_type: triggerType,
      params,
      url,
      method: "POST",
      headers: {},
      body_template: bodyTemplate,
      cooldown: parseFloat(cooldown) || 10,
    });
  }

  return (
    <div className="wh-editor">
      <h3>{rule.id ? "Edit Rule" : "New Rule"}</h3>

      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="My webhook" />

      <label>Trigger</label>
      <select value={triggerType} onChange={(e) => setTriggerType(e.target.value as TriggerType)}>
        {TRIGGER_TYPES.map((t) => (
          <option key={t} value={t}>{TRIGGER_LABELS[t]}</option>
        ))}
      </select>

      {NEEDS_BAND.has(triggerType) && (
        <>
          <label>Band</label>
          <select value={band} onChange={(e) => setBand(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </>
      )}

      {NEEDS_RATIO.has(triggerType) && (
        <>
          <label>Numerator band</label>
          <select value={numerator} onChange={(e) => setNumerator(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <label>Denominator band</label>
          <select value={denominator} onChange={(e) => setDenominator(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </>
      )}

      {NEEDS_CHANNEL.has(triggerType) && (
        <>
          <label>Channel</label>
          <select value={channel} onChange={(e) => setChannel(e.target.value)}>
            <option value="avg">Average (all)</option>
            {Array.from({ length: numChannels }, (_, i) => (
              <option key={i} value={i}>Ch {i + 1}</option>
            ))}
          </select>
        </>
      )}

      <label>Threshold</label>
      <input
        type="number"
        value={threshold}
        step="0.1"
        onChange={(e) => setThreshold(e.target.value)}
      />

      <label>Webhook URL</label>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/webhook"
      />

      <label>Cooldown (seconds)</label>
      <input
        type="number"
        value={cooldown}
        min="1"
        step="1"
        onChange={(e) => setCooldown(e.target.value)}
      />

      <label>Body template (optional)</label>
      <textarea
        value={bodyTemplate}
        onChange={(e) => setBodyTemplate(e.target.value)}
        placeholder='{"event":"$trigger_type","value":$value}'
        rows={3}
      />
      <small className="wh-hint">
        Variables: $trigger_type, $rule_name, $value, $threshold, $channel, $band, $ts
      </small>

      <div className="wh-editor-actions">
        <button className="btn" onClick={handleSave}>Save</button>
        <button className="btn btn-muted" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
