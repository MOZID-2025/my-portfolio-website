"use client";

import { ExternalLink } from "lucide-react";

// Mock project data based on the screenshot
const projects = [
  {
    id: 1,
    title: "ToolsArena – Free Online Tools & Guides",
    description:
      "120+ free browser-based tools and 170+ detailed guides. Image editing, PDF operations, text utilities, calculators, developer tools & comprehensive how-to guides. 100% private – no signup.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: "⚡",
    liveUrl: "#",
    isLive: true,
  },
  {
    id: 2,
    title: "CRM Pro – React Dashboard",
    description:
      "Modern React-based CRM dashboard with pipeline visualization, KPI cards, and interactive charts. Powered by Zustand state management and Recharts.",
    tags: ["React", "Vite", "Recharts", "Zustand", "Tailwind CSS"],
    icon: "📊",
    liveUrl: "#",
    isLive: true,
  },
  {
    id: 3,
    title: "HireDeskPro – Free Resume Builder",
    description:
      "Professional resume builder with 140+ premium templates, drag-and-drop sections, live ATS scanner & one-click PDF export. 100% free, no signup, no watermark – your data never leaves the browser.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Zustand",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    icon: "📄",
    liveUrl: "#",
    isLive: true,
  },
  {
    id: 4,
    title: "PageGenie – AI Landing Page Generator",
    description:
      "Instant AI-generated landing pages for local businesses in India. 12 pro templates, live preview, dark mode, custom branding & deploy-ready HTML. Static export on Cloudflare Pages – unlimited bandwidth, free forever.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    icon: "✨",
    liveUrl: "#",
    isLive: true,
  },
  {
    id: 5,
    title: "JoinChatRoom – Real-Time Chat App",
    description:
      "WhatsApp-style real-time chat app built with Next.js and Firebase. Instant messaging, online presence, and authentication – all in a clean, responsive UI.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    icon: "📱",
    liveUrl: "#",
    isLive: true,
  },
  {
    id: 6,
    title: "Nexus Admin – Multi-Page Dashboard",
    description:
      "Feature-rich admin panel with 16 pages including analytics, kanban, calendar, inbox, invoices, roles, and more. Dark mode, charts, and data tables built-in.",
    tags: ["Alpine.js", "Tailwind CSS", "Chart.js", "HTML5"],
    icon: "💻",
    liveUrl: "#",
    isLive: true,
  },
];

export default function Projects() {
  return (
    <section className="relative bg-[#07041d] py-24 px-6 overflow-hidden">
      {/* Background Glows matching Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_left,_rgba(34,211,238,0.12),transparent_40%)] pointer-events-none"></div>

      {/* Soft Blur Circles */}
      <div className="absolute top-1/3 left-[-100px] w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Container restricted to max-w-7xl (1280px) */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-pink-500 font-bold tracking-[3px] text-xs uppercase mb-2">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-3">
            Recent{" "}
            <span className="bg-gradient-to-r from-pink-400 via-cyan-300 to-pink-300 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
          </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-800/60 bg-[#0e0a2b]/60 backdrop-blur-md p-6 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)] transition-all duration-300"
            >
              <div>
                {/* Upper Thumbnail Area / Badge */}
                <div className="relative w-full h-44 rounded-xl bg-gradient-to-b from-[#16113a] to-[#0f0b26] flex items-center justify-center border border-gray-800/40 mb-6 overflow-hidden">
                  {/* Neon decorative gradient circle inside slot */}
                  <div className="absolute w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>

                  {/* Icon Representation */}
                  <span className="text-5xl relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    {project.icon}
                  </span>

                  {/* Live Status Badge */}
                  {project.isLive && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-sm uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      Live
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-pink-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Container */}
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-cyan-300/90 bg-cyan-950/40 border border-cyan-900/50 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link Button */}
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group/link"
                >
                  <ExternalLink
                    size={15}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                  />
                  Visit Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer View More Action */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/40 bg-[#0e0a2b]/40 text-white font-medium hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 text-sm group">
            View All 28 Projects
            <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
              ▼
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
