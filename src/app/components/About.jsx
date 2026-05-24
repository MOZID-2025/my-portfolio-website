"use client";

export default function About() {
  const stats = [
    {
      number: "1+",
      label: "YEARS EXP.",
    },
    {
      number: "10+",
      label: "PROJECTS",
    },
    {
      number: "5+",
      label: "HAPPY CLIENTS",
    },
    {
      number: "20+",
      label: "TOOLS BUILT",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07041d] py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_right,_rgba(34,211,238,0.12),transparent_30%)]"></div>

      {/* Blur Circles */}
      <div className="absolute top-32 right-1/4 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 left-20 w-52 h-52 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Small Heading */}
            <p className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold mb-5">
              About Me
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8">
              <span className="text-white">
                Frontend <br /> Developer
              </span>{" "}
              <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
                in Bangladesh
              </span>
            </h2>

            {/* Gradient Line */}
            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 mb-10"></div>

            {/* Description */}
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm
                <span className="text-white font-semibold"> Abdul Mozid</span>,
                a passionate frontend developer focused on building modern,
                responsive, and user-friendly web applications using React,
                Next.js, and Tailwind CSS.
              </p>

              <p>
                My programming journey started with HTML and CSS, then gradually
                expanded into JavaScript, React, and full-stack development. I
                enjoy creating clean UI designs and interactive user experiences
                that people genuinely love to use.
              </p>

              <p>
                Besides programming, I enjoy learning new technologies,
                exploring UI inspiration, and improving my communication skills.
                My goal is to become a professional full-stack developer and
                work with international clients worldwide.
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center hover:-translate-y-2 transition-all duration-500"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-pink-500/10 to-cyan-400/10"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="text-sm tracking-[3px] text-gray-400">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
