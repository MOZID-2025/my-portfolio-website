"use client";

import { Code2, Palette, Database, Bot, Wrench, ServerCog } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <ServerCog size={26} />,
      title: "Backend & CMS",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "REST API",
        "JWT",
      ],
    },

    {
      icon: <Code2 size={26} />,
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
      ],
    },

    {
      icon: <Palette size={26} />,
      title: "UI & Styling",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
        "Responsive Design",
      ],
    },

    {
      icon: <Database size={26} />,
      title: "Database",
      skills: [
        "MongoDB",
        "Firebase",
        "Mongoose",
        "Local Storage",
        "JSON",
        "Supabase",
      ],
    },

    {
      icon: <Bot size={26} />,
      title: "AI & Tools",
      skills: [
        "ChatGPT",
        "AI APIs",
        "Prompt Engineering",
        "Automation",
        "GitHub Copilot",
        "OpenAI",
      ],
    },

    {
      icon: <Wrench size={26} />,
      title: "Dev Tools",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Netlify",
        "Postman",
        "VS Code",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#07041d] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_right,_rgba(34,211,238,0.12),transparent_30%)]"></div>

      {/* Blur Circles */}
      <div className="absolute top-32 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 left-10 w-52 h-52 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-4">
            My Arsenal
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8">
            <span className="text-white">Skills & </span>

            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Gradient Line */}
          <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-pink-500/10 to-cyan-400/10"></div>

              {/* Top Content */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-white shadow-lg">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-gray-300 text-sm hover:border-cyan-400/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
