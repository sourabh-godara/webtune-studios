"use client";

import { Globe, Users, MessageSquare, Bell, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Signature element: an automation pipeline diagram.
   Two renderings of the same idea — data moving through connected
   steps — because that motion IS the product WebTune sells.
------------------------------------------------------------------- */

const strip = [
  { label: "Build" },
  { label: "Automate" },
  { label: "Scale" },
];

export function PipelineStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-0 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft",
        className,
      )}
    >
      {strip.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex items-center gap-2">
            <span
              className="relative flex size-2 items-center justify-center rounded-full bg-signal/70"
              style={{
                animation: "node-pulse 2.4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            />
            <span>{step.label}</span>
          </div>
          {i < strip.length - 1 && (
            <span className="mx-4 h-px w-10 bg-line-strong sm:w-16" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}

type FlowNode = {
  icon: LucideIcon;
  label: string;
  meta: string;
  tone: "signal" | "blue" | "green" | "amber";
};

const flowNodes: FlowNode[] = [
  { icon: Globe, label: "Lead captures form", meta: "webtunestudios.com", tone: "signal" },
  { icon: Users, label: "CRM sync", meta: "HubSpot · new contact", tone: "blue" },
  { icon: MessageSquare, label: "WhatsApp welcome sent", meta: "auto-reply · 4s later", tone: "green" },
  { icon: Bell, label: "Team notified", meta: "Slack #new-leads", tone: "amber" },
];

const toneClasses: Record<FlowNode["tone"], string> = {
  signal: "bg-signal-soft text-signal-deep",
  blue: "bg-[#eef2ff] text-[#4338ca]",
  green: "bg-[#eafaf1] text-[#0f8a52]",
  amber: "bg-[#fff6e5] text-[#b45309]",
};

export function AutomationFlowCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-line-strong bg-panel p-3 shadow-[0_1px_2px_rgba(20,20,15,0.04)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between px-2 pt-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
          Live workflow
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-success">
          <span className="size-1.5 rounded-full bg-success" />
          Running
        </span>
      </div>

      <ol className="flex flex-col gap-2">
        {flowNodes.map((node, i) => (
          <li key={node.label}>
            <div
              className="flex items-center gap-3 rounded-[5px] border border-line-strong bg-paper px-3.5 py-3"
              style={{
                animation: "node-pulse 9.6s ease-in-out infinite",
                animationDelay: `${i * 2.4}s`,
              }}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-[5px]",
                  toneClasses[node.tone],
                )}
              >
                <node.icon className="size-4" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-semibold leading-tight text-ink">
                  {node.label}
                </p>
                <p className="truncate font-mono text-[11px] text-ink-faint">{node.meta}</p>
              </div>
              <ArrowRight className="size-3.5 shrink-0 text-ink-faint" />
            </div>
            {i < flowNodes.length - 1 && (
              <div className="ml-[35px] h-2.5 w-px bg-line-strong" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
