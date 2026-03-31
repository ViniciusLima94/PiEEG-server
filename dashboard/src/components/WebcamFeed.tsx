import { useRef, useEffect, useState, memo } from "react";

interface WebcamFeedProps {
  active: boolean;
}

const WebcamFeed = memo(function WebcamFeed({ active }: WebcamFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!active) {
      stopStream();
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240, facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setError(null);
      } catch (err: any) {
        if (!cancelled) {
          setError(
            err.name === "NotAllowedError"
              ? "Camera access denied"
              : err.name === "NotFoundError"
                ? "No camera found"
                : "Camera unavailable"
          );
        }
      }
    })();

    return () => {
      cancelled = true;
      stopStream();
    };
  }, [active]);

  function stopStream() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }

  if (!active) return null;

  return (
    <div className={`webcam-feed${minimized ? " minimized" : ""}`}>
      <button
        className="webcam-toggle"
        onClick={() => setMinimized((v) => !v)}
        title={minimized ? "Show webcam" : "Hide webcam"}
      >
        {minimized ? "📷" : "▾"}
      </button>
      {!minimized &&
        (error ? (
          <div className="webcam-error">📷 {error}</div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="webcam-video"
          />
        ))}
    </div>
  );
});

export default WebcamFeed;
