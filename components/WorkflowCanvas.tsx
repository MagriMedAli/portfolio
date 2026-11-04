"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles, Database, Reply, UserRound, type LucideIcon } from "lucide-react";

type NodeId = "trigger" | "agent" | "order" | "reply" | "human";

const W = 148;
const H = 56;

const nodes: Record<NodeId, { x: number; y: number; title: string; sub: string; icon: LucideIcon }> = {
  trigger: { x: 8, y: 142, title: "Message in", sub: "whatsapp.in", icon: MessageCircle },
  agent: { x: 226, y: 142, title: "AI Agent", sub: "gemini.classify", icon: Sparkles },
  order: { x: 444, y: 30, title: "Create order", sub: "postgres.insert", icon: Database },
  reply: { x: 444, y: 142, title: "Auto-reply", sub: "rag.answer", icon: Reply },
  human: { x: 444, y: 254, title: "Escalate", sub: "telegram.notify", icon: UserRound },
};

const mid = (id: NodeId) => nodes[id].y + H / 2;
const inPath = `M${nodes.trigger.x + W} ${mid("trigger")} L${nodes.agent.x} ${mid("agent")}`;
const branchPath = (to: NodeId) => {
  const x1 = nodes.agent.x + W;
  const x2 = nodes[to].x;
  const c = (x1 + x2) / 2;
  return `M${x1} ${mid("agent")} C${c} ${mid("agent")} ${c} ${mid(to)} ${x2} ${mid(to)}`;
};

const scenarios: {
  branch: NodeId;
  log: [string, string, string, string];
}[] = [
  {
    branch: "order",
    log: [
      "trigger  “2 iced lattes for 14:00 please”",
      "agent    intent=order  confidence=0.94",
      "route    → create_order #1042",
      "done     confirmation sent · 1.2s",
    ],
  },
  {
    branch: "reply",
    log: [
      "trigger  “Are you open on Sunday?”",
      "agent    intent=faq  confidence=0.97",
      "route    → answer from knowledge base",
      "done     reply sent · 0.8s",
    ],
  },
  {
    branch: "human",
    log: [
      "trigger  “My order arrived cold…”",
      "agent    intent=complaint  confidence=0.41",
      "route    → low confidence, ask a human",
      "done     escalated on Telegram · 0.9s",
    ],
  },
];

// Timings (ms) for each step of one run: packet → agent thinks → packet → result
const STEPS = [0, 900, 1500, 2400];
const RUN = 5200;

function Packet({ d, duration }: { d: string; duration: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;
    const len = path.getTotalLength();
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const p = path.getPointAtLength(eased * len);
      dot.setAttribute("cx", String(p.x));
      dot.setAttribute("cy", String(p.y));
      dot.setAttribute("opacity", t >= 1 ? "0" : "1");
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [d, duration]);

  return (
    <g>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      <circle ref={dotRef} r="5" fill="#D4F54A" opacity="0" style={{ filter: "drop-shadow(0 0 6px #D4F54A)" }} />
    </g>
  );
}

export default function WorkflowCanvas() {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);
  const [step, setStep] = useState(0);
  const scenario = scenarios[run % scenarios.length];

  useEffect(() => {
    if (reduce) {
      setStep(3);
      const t = setTimeout(() => setRun((r) => r + 1), RUN);
      return () => clearTimeout(t);
    }
    setStep(0);
    const timers = STEPS.slice(1).map((ms, i) => setTimeout(() => setStep(i + 1), ms));
    timers.push(setTimeout(() => setRun((r) => r + 1), RUN));
    return () => timers.forEach(clearTimeout);
  }, [run, reduce]);

  const lit = (id: NodeId) =>
    (id === "trigger" && step >= 0) ||
    (id === "agent" && step >= 1) ||
    (id === scenario.branch && step >= 3);

  return (
    <div className="overflow-hidden rounded-2xl border border-edge bg-ink shadow-[0_40px_100px_-30px_rgba(0,0,20,0.7)]">
      <div className="flex items-center justify-between border-b border-edge px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />
          <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        </div>
        <p className="font-mono text-[11px] text-faint">inbox-router.workflow</p>
        <p className="flex items-center gap-1.5 font-mono text-[11px] text-lime">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-lime" />
          live
        </p>
      </div>

      <div className="dot-grid px-3 py-4 md:px-5 md:py-6" aria-hidden="true">
        <svg viewBox="0 0 600 340" className="w-full">
          <path d={inPath} fill="none" stroke={step >= 0 ? "#7A8C2E" : "#34343C"} strokeWidth="1.5" />
          {(["order", "reply", "human"] as NodeId[]).map((id) => {
            const active = id === scenario.branch && step >= 2;
            return (
              <path
                key={id}
                d={branchPath(id)}
                fill="none"
                stroke={active ? "#D4F54A" : "#34343C"}
                strokeWidth={active ? 2 : 1.5}
                strokeDasharray={active ? undefined : "4 5"}
                style={{ transition: "stroke 0.4s" }}
              />
            );
          })}

          {!reduce && step === 0 && <Packet key={`in-${run}`} d={inPath} duration={850} />}
          {!reduce && step === 2 && (
            <Packet key={`out-${run}`} d={branchPath(scenario.branch)} duration={850} />
          )}

          {(Object.keys(nodes) as NodeId[]).map((id) => {
            const n = nodes[id];
            const on = lit(id);
            const Icon = n.icon;
            const thinking = id === "agent" && step === 1;
            return (
              <g key={id} style={{ transition: "opacity 0.4s" }} opacity={on || id === "trigger" ? 1 : 0.55}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={W}
                  height={H}
                  rx="12"
                  fill="#151518"
                  stroke={on ? "#D4F54A" : "#34343C"}
                  strokeWidth={on ? 1.5 : 1}
                  style={{ transition: "stroke 0.4s" }}
                />
                {thinking && (
                  <rect
                    x={n.x - 4}
                    y={n.y - 4}
                    width={W + 8}
                    height={H + 8}
                    rx="15"
                    fill="none"
                    stroke="#D4F54A"
                    strokeOpacity="0.35"
                  >
                    <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="0.6s" repeatCount="indefinite" />
                  </rect>
                )}
                <rect x={n.x + 10} y={n.y + 12} width="32" height="32" rx="8" fill={on ? "#2A3112" : "#1D1D22"} />
                <Icon x={n.x + 18} y={n.y + 20} size={16} color={on ? "#D4F54A" : "#A6A6B0"} strokeWidth={2} />
                <text x={n.x + 52} y={n.y + 25} fill="#EDEAE4" fontSize="14" fontWeight="600" fontFamily="var(--font-inter), sans-serif">
                  {n.title}
                </text>
                <text x={n.x + 52} y={n.y + 42} fill="#6E6E78" fontSize="10" fontFamily="var(--font-jbmono), monospace">
                  {n.sub}
                </text>
                <circle cx={n.x} cy={n.y + H / 2} r="3.5" fill="#0D0D0F" stroke="#34343C" />
                <circle cx={n.x + W} cy={n.y + H / 2} r="3.5" fill="#0D0D0F" stroke="#34343C" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="border-t border-edge bg-coal px-4 py-3.5 font-mono text-[11.5px] leading-6 md:px-5">
        <p className="mb-1 text-faint">
          execution #{String(4170 + run).padStart(5, "0")}
        </p>
        <ul className="min-h-[6rem]" aria-live="off">
          {scenario.log.map((line, i) => {
            const visible = step >= i;
            const [kw, ...rest] = line.split(/\s{2,}/);
            return (
              <li
                key={`${run}-${i}`}
                className={`flex gap-3 truncate transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
              >
                <span className={i === 3 ? "text-lime" : "text-lime"}>{i === 3 ? "✓" : "›"}</span>
                <span className="w-14 shrink-0 text-faint">{kw}</span>
                <span className="truncate text-fog">{rest.join("  ")}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
