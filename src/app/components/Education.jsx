"use client";

import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

const educationData = [
  {
    year: "2022",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Axis Colleges, Kanpur University",
    description:
      "Focused on software engineering, data structures, algorithms, and web technologies.",
  },
  {
    year: "2019",
    degree: "Higher Secondary (12th - PCM)",
    institution: "UP Board",
    description:
      "Completed with strong foundation in mathematics and computer science.",
  },
];

const certificationData = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    color: "text-pink-400 bg-pink-950/40 border-pink-900/50",
  },
  {
    title: "Laravel Certified Developer",
    issuer: "Laravel",
    color: "text-cyan-400 bg-cyan-950/40 border-cyan-900/50",
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera / DeepLearning.AI",
    color: "text-purple-400 bg-purple-950/40 border-purple-900/50",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    color: "text-pink-400 bg-pink-950/40 border-pink-900/50",
  },
];

export default function EducationAndCertifications() {
  return (
    <section className="relative bg-[#07041d] py-24 px-6 overflow-hidden">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 right-[-100px] w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[-100px] w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-pink-500 font-bold tracking-[3px] text-xs uppercase mb-2">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-3">
            Education &{" "}
            <span className="bg-gradient-to-r from-pink-400 via-cyan-300 to-pink-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-12 h-[3px] bg-pink-500 mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Education */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <GraduationCap className="text-yellow-500 w-5 h-5" />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-800/60 bg-[#0e0a2b]/40 backdrop-blur-md p-6 hover:border-gray-700/60 transition-all duration-300"
                >
                  {/* Year Tag */}
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md text-pink-400 bg-pink-950/40 border border-pink-900/50 mb-4">
                    {edu.year}
                  </span>

                  <h4 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {edu.degree}
                  </h4>

                  <p className="text-cyan-400 text-sm font-medium mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <Award className="text-yellow-500 w-5 h-5" />
              <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certificationData.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-2xl border border-gray-800/60 bg-[#0e0a2b]/40 backdrop-blur-md p-5 hover:border-gray-700/60 transition-all duration-300 group"
                >
                  {/* Styled Check Indicator */}
                  <div
                    className={`p-2 rounded-xl border shrink-0 ${cert.color}`}
                  >
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Cert Info */}
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-0.5 font-light">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
