import {
  ArrowUpRight,
  Lock,
  ShoppingCart,
  Play,
  CalendarCheck2,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Project data
------------------------------------------------------------------- */

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  tools: string[];
  url?: string;
  thumb: "ecommerce" | "portfolio" | "automation";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "ActiveWell Pharma",
    client: "Nutraceutical brand",
    category: "E-commerce",
    description:
      "A production-ready e-commerce platform built for performance, scalability, and user experience. Secure authentication, a full product catalog, shopping cart, coupon system, Razorpay payments, order management, customer reviews, address management, and an image gallery all sit behind a comprehensive admin dashboard. Static Generation, Incremental Static Regeneration, and caching keep it fast at scale.",
    tools: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (PostgreSQL, Auth, Storage)",
      "Razorpay",
      "Vercel",
      "Server Actions",
      "ISR",
      "SSG",
    ],
    url: "https://activewellpharma.com",
    thumb: "ecommerce",
  },
  {
    id: "02",
    title: "Jaysal VFX Portfolio",
    client: "VFX artist",
    category: "Portfolio",
    description:
      "A premium portfolio site built to showcase professional VFX work, services, and achievements. Cinematic visuals, smooth animation, and fast, responsive layouts create an engaging first impression for potential clients.",
    tools: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Vercel",
    ],
    url: "https://jaysalvfx.com",
    thumb: "portfolio",
  },
  {
    id: "03",
    title: "WhatsApp Appointment Automation",
    client: "Service business — internal system",
    category: "Automation",
    description:
      "An intelligent WhatsApp automation that lets customers book, reschedule, and cancel appointments through natural conversation. Workflows validate availability, update calendars, send confirmations and reminders, and sync with internal business systems to cut manual admin work.",
    tools: [
      "n8n",
      "WhatsApp Business (Meta Cloud API)",
      "Webhooks",
      "REST APIs",
      "Google Calendar",
      "JavaScript",
      "AI Chatbot Integration",
    ],
    thumb: "automation",
  },
];

/* ------------------------------------------------------------------
   Thumbnails — abstract, built from the studio's own visual language
   rather than screenshots, so every project reads as one system.
------------------------------------------------------------------- */

function BrowserChrome({
  domain,
  children,
}: {
  domain: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md border border-line-strong bg-panel">
      <div className="flex shrink-0 items-center gap-3 border-b border-line-strong bg-paper px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        <div className="flex-1 truncate rounded-full bg-panel px-3 py-1 text-center font-mono text-[10.5px] text-ink-faint">
          {domain}
        </div>
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  );
}

function EcommerceThumb() {
  const tiles = [72, 56, 64, 48, 68, 58];
  return (
    <BrowserChrome domain="activewellpharma.com">
      <div className="grid h-full grid-cols-3 gap-2.5 bg-dot-grid p-3.5">
        {tiles.map((h, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col justify-end gap-1 rounded-[4px] border bg-panel p-1.5",
              i === 0 ? "border-signal/50 ring-1 ring-signal/20" : "border-line-strong",
            )}
          >
            <div
              className="w-full rounded-[3px] bg-line"
              style={{ height: `${h}%` }}
            />
            <div className="h-1.5 w-3/4 rounded-full bg-line-strong" />
            <div className="h-1.5 w-1/2 rounded-full bg-signal-soft" />
          </div>
        ))}
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-line-strong bg-panel px-2.5 py-1 shadow-sm">
        <ShoppingCart className="size-3 text-signal-deep" strokeWidth={2} />
        <span className="font-mono text-[10px] text-ink">3</span>
      </div>
    </BrowserChrome>
  );
}

function PortfolioThumb() {
  return (
    <BrowserChrome domain="jaysalvfx.com">
      <div className="relative flex h-full items-center justify-center bg-ink/[0.03] p-6">
        <div className="absolute h-16 w-24 rotate-[-8deg] rounded-[4px] border border-line-strong bg-panel shadow-sm" />
        <div className="absolute h-16 w-24 rotate-[4deg] rounded-[4px] border border-line-strong bg-panel shadow-sm" />
        <div className="relative flex h-16 w-24 rotate-[-2deg] items-center justify-center rounded-[4px] border border-line-strong bg-ink shadow-md">
          <span className="flex size-6 items-center justify-center rounded-full bg-paper/90">
            <Play className="size-3 fill-ink text-ink" strokeWidth={0} />
          </span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function ChatBubble({
  text,
  meta,
  align,
  icon: Icon,
}: {
  text: string;
  meta: string;
  align: "left" | "right";
  icon?: LucideIcon;
}) {
  return (
    <div className={cn("flex flex-col", align === "right" ? "items-end" : "items-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-[10px] px-3 py-2 text-[11.5px] leading-snug",
          align === "right"
            ? "rounded-tr-[3px] bg-signal text-white"
            : "rounded-tl-[3px] border border-line-strong bg-panel text-ink",
        )}
      >
        {text}
      </div>
      <div className="mt-1 flex items-center gap-1 font-mono text-[9.5px] text-ink-faint">
        {Icon && <Icon className="size-2.5" />}
        {meta}
      </div>
    </div>
  );
}

function AutomationThumb() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-md border border-line-strong bg-panel">
      <div className="flex shrink-0 items-center justify-between border-b border-line-strong bg-paper px-3.5 py-2.5">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
          Appointments bot
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-success">
          <span className="size-1.5 rounded-full bg-success" />
          Active
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3 bg-dot-grid p-4">
        <ChatBubble align="left" text="Can I book a slot tomorrow at 3pm?" meta="Customer" />
        <ChatBubble
          align="right"
          text="Confirmed for 3:00 PM — added to your calendar."
          meta="Auto-replied in 2s"
          icon={CalendarCheck2}
        />
      </div>
      <div className="flex shrink-0 items-center gap-1.5 border-t border-line-strong px-3.5 py-2">
        <Zap className="size-3 text-signal-deep" strokeWidth={2} />
        <span className="font-mono text-[9.5px] text-ink-faint">
          n8n workflow → Google Calendar → WhatsApp
        </span>
      </div>
    </div>
  );
}

const thumbnails = {
  ecommerce: EcommerceThumb,
  portfolio: PortfolioThumb,
  automation: AutomationThumb,
};

/* ------------------------------------------------------------------
   Card
------------------------------------------------------------------- */

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Thumb = thumbnails[project.thumb];
  const reversed = index % 2 === 1;

  return (
    <article
      className={cn(
        "grid items-stretch gap-8 border-b border-line py-14 first:pt-0 last:border-b-0 lg:grid-cols-2 lg:gap-14",
      )}
    >
      <div className={cn("min-h-[260px]", reversed ? "lg:order-2" : "")}>
        <Thumb />
      </div>

      <div className={cn("flex flex-col justify-center", reversed ? "lg:order-1" : "")}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-ink-faint">WORK / {project.id}</span>
          <span className="h-px w-6 bg-line-strong" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal-deep">
            {project.category}
          </span>
        </div>

        <h3 className="mt-3 font-[family-name:var(--font-display)] text-[27px] font-semibold tracking-[-0.01em] text-ink sm:text-[30px]">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[12px] text-ink-faint">{project.client}</p>

        <p className="mt-4 max-w-[540px] text-[14.5px] leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line-strong bg-panel px-2.5 py-1 font-mono text-[10.5px] text-ink-soft"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink transition-colors hover:text-signal-deep"
            >
              Visit live site
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink-faint">
              <Lock className="size-3.5" />
              Private system — internal client tool
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
