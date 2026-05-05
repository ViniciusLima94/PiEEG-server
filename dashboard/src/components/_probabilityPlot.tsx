import React from "react";

export function drawProbabilityPlot(ctx: CanvasRenderingContext2D, w: number, h: number, eegData: any) {
  const padL = 44;
  const padR = 12;
  const padT = 8;
  const padB = 22;
  const plotW = Math.max(10, w - padL - padR);
  const plotH = Math.max(10, h - padT - padB);

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--canvas-bg") || "#0d1117";
  ctx.fillRect(0, 0, w, h);

  // Draw axes
  ctx.strokeStyle = "#8b949e";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(padL, h - padB);
  ctx.lineTo(w - padR, h - padB);
  ctx.stroke();

  // Y ticks: 0, 0.5, 1.0
  ctx.fillStyle = "#8b949e";
  ctx.font = "12px monospace";
  ctx.textAlign = "right";
  ctx.fillText("1.0", padL - 6, padT + 10);
  ctx.fillText("0.5", padL - 6, padT + 10 + plotH / 2);
  ctx.fillText("0.0", padL - 6, h - padB);

  // Get predict buffer
  const buf = eegData.predictBuffer!.current;
  const write = eegData.predictWriteIndex!.current;
  const count = eegData.predictCount!.current;
  const size = eegData.predictBufferSize || buf.length;
  if (!count) {
    ctx.fillStyle = "#8b949e";
    ctx.fillText("No predictions yet", w / 2, h / 2);
    return;
  }

  // Build array of samples in chronological order (oldest first)
  const samplesToShow = Math.min(count, plotW);
  const values = new Float32Array(samplesToShow);
  let start = (write - samplesToShow + size) % size;
  for (let i = 0; i < samplesToShow; i++) {
    values[i] = buf[(start + i) % size];
  }

  // Draw grid horizontal lines
  ctx.strokeStyle = "rgba(139,148,158,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padL, padT);
  ctx.lineTo(w - padR, padT);
  ctx.moveTo(padL, padT + plotH / 2);
  ctx.lineTo(w - padR, padT + plotH / 2);
  ctx.moveTo(padL, h - padB);
  ctx.lineTo(w - padR, h - padB);
  ctx.stroke();

  // Draw probability line
  ctx.strokeStyle = "#58a6ff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < samplesToShow; i++) {
    const x = padL + (i / (samplesToShow - 1 || 1)) * plotW;
    const y = padT + (1 - values[i]) * plotH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Draw latest value as circle
  const latest = values[samplesToShow - 1];
  const lx = padL + plotW;
  const ly = padT + (1 - latest) * plotH;
  ctx.fillStyle = "#58a6ff";
  ctx.beginPath();
  ctx.arc(lx, ly, 4, 0, Math.PI * 2);
  ctx.fill();

  // Label latest numeric
  ctx.fillStyle = "#8b949e";
  ctx.font = "12px monospace";
  ctx.textAlign = "left";
  ctx.fillText(latest.toFixed(3), lx + 8, ly + 4);
}

export default null;
