"use client";

import {
  Rocket,
  Bot,
  ShoppingCart,
  Zap,
  BarChart3,
  Wrench,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Rocket size={32} />,
      title: "Full-Stack Web Development",
      description:
        "Build modern responsive web applications using React, Next.js, Node.js, Express, and MongoDB with scalable architecture.",
    },
    {
      icon: <Bot size={32} />,
      title: "AI Integration & Automation",
      description:
        "Integrate AI APIs, chatbots, automation tools, and smart workflows to improve productivity and user experience.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "SaaS & E-Commerce Solutions",
      description:
        "Develop secure SaaS platforms and e-commerce systems with authentication, dashboards, and payment integration.",
    },
    {
      icon: <Zap size={32} />,
      title: "API Development & Integration",
      description:
        "Create REST APIs and integrate third-party services including Firebase, Stripe, JWT authentication, and cloud tools.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Dashboard & Analytics",
      description:
        "Build powerful admin dashboards with charts, analytics, statistics, and real-time data visualization systems.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Performance & Optimization",
      description:
        "Optimize applications for speed, SEO, accessibility, responsiveness, and smooth user experience across devices.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#07041d] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_right,_rgba(34,211,238,0.12),transparent_30%)]"></div>

      {/* Blur Effects */}
      <div className="absolute top-32 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 left-10 w-52 h-52 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-4">
            Hire Me For
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8">
            <span className="text-white">
              Freelance Development
              <br />
            </span>

            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            I build modern web applications, SaaS products, dashboards, and
            full-stack solutions with clean UI, performance optimization, and
            scalable architecture.
          </p>

          {/* Gradient Line */}
          <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 hover:-translate-y-3 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-pink-500/10 to-cyan-400/10"></div>

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white leading-snug mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
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
