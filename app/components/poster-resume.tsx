"use client";

import { QRCodeSVG } from "qrcode.react";
import type { ResumeData } from "./resume-data";

export function PosterResume({ data }: { data: ResumeData }) {
  return (
    <div className="relative mx-auto w-full max-w-[210mm] overflow-visible p-4 md:p-8">
      {/* Manila folder */}
      <div
        className="absolute inset-0 -z-10 rounded-lg bg-[#8fac8f] shadow-xl"
        style={{
          transform: "rotate(-1.5deg)",
        }}
      >
        {/* Folder tab */}
        <div className="absolute -top-5 right-12 h-8 w-40 rounded-t-md bg-[#7d9a7d]" />
      </div>

      {/* Notebook paper */}
      <div
        className="relative rounded-sm bg-[#fdfbf0] p-6 text-zinc-900 shadow-lg md:p-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #e5e1d0 31px, #e5e1d0 32px)",
          backgroundPosition: "0 0",
          backgroundSize: "100% 32px",
        }}
      >
        {/* Hole punch dots */}
        <div className="absolute left-3 top-10 flex flex-col gap-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-[#2a2a2a]"
              style={{ opacity: 0.85 }}
            />
          ))}
        </div>

        {/* Header block */}
        <header className="relative pl-8 md:pl-12">
          <h1
            className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-zinc-950 md:text-7xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {data.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-wide text-zinc-700">
            {data.role} — {data.tagline}
          </p>

          {/* Diagonal accent tape */}
          <div
            className="absolute right-0 top-0 hidden w-40 -translate-y-2 translate-x-2 rotate-12 bg-blue-600 px-3 py-2 shadow-md md:block"
            style={{ transformOrigin: "center" }}
          >
            <div className="font-mono text-[10px] font-bold uppercase leading-tight text-white">
              {data.stats.map((s, i) => (
                <div key={i}>
                  {s.value} / {s.label}
                </div>
              ))}
            </div>
            {/* Binder clip */}
            <svg
              viewBox="0 0 40 40"
              className="absolute -left-3 top-1/2 h-10 w-10 -translate-y-1/2"
              fill="none"
            >
              <path
                d="M12 8h16v24H12z"
                fill="#1f1f1f"
                stroke="#1f1f1f"
                strokeWidth="2"
              />
              <path
                d="M16 8v-4a4 4 0 0 1 8 0v4"
                stroke="#1f1f1f"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="3" fill="#fdfbf0" />
            </svg>
          </div>
        </header>

        <hr className="mx-8 my-6 border-dashed border-zinc-400 md:mx-12" />

        {/* Body sections */}
        <div className="space-y-6 pl-8 md:pl-12">
          <section>
            <h2
              className="mb-3 text-xl font-black uppercase tracking-tight text-zinc-950"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Experience
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              {data.experience.map((item) => (
                <div key={item.name}>
                  <h3 className="font-mono text-sm font-bold text-zinc-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {item.period}
                  </p>
                  <p className="mt-1 font-mono text-sm leading-snug text-blue-600">
                    → {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="mb-3 text-xl font-black uppercase tracking-tight text-zinc-950"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
              {data.projects.map((item) => (
                <div key={item.name}>
                  <h3 className="font-mono text-sm font-bold text-zinc-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-sm leading-snug text-blue-600">
                    → {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="mb-3 text-xl font-black uppercase tracking-tight text-zinc-950"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Skills
            </h2>
            <p className="font-mono text-sm leading-relaxed text-zinc-800">
              {data.skills.map((skill) => (
                <span key={skill} className="mr-3 inline-block">
                  {skill}
                </span>
              ))}
            </p>
          </section>
        </div>

        {/* Footer area */}
        <div className="relative mt-10 flex flex-col items-start justify-between gap-6 pl-8 md:flex-row md:items-end md:pl-12">
          {/* Ticket stub */}
          <div
            className="relative w-64 rotate-[-6deg] rounded-sm border-2 border-dashed border-zinc-400 bg-[#fdfbf0] p-4 shadow-md"
            style={{
              borderRightStyle: "dashed",
            }}
          >
            <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#fdfbf0]" />
            <h3 className="font-display text-sm font-black uppercase text-zinc-900">
              Contact
            </h3>
            <div className="mt-2 space-y-1 font-mono text-xs text-zinc-700">
              <div className="flex justify-between">
                <span>EMAIL</span>
                <span className="truncate max-w-[120px]">
                  {data.contact.email}
                </span>
              </div>
              <div className="flex justify-between">
                <span>GITHUB</span>
                <span className="truncate max-w-[120px]">
                  {data.contact.github}
                </span>
              </div>
              <div className="flex justify-between">
                <span>LINKEDIN</span>
                <span className="truncate max-w-[120px]">
                  {data.contact.linkedin}
                </span>
              </div>
            </div>
          </div>

          {/* QR code */}
          <div className="flex flex-col items-center gap-2">
            <QRCodeSVG
              value={`https://${data.contact.linkedin}`}
              size={64}
              bgColor="#ffffff"
              fgColor="#1f1f1f"
              level="M"
              className="rounded bg-white p-1 shadow-sm"
            />
            <span className="font-mono text-[10px] text-zinc-600">SCAN ME</span>
          </div>

          {/* Badge chips */}
          <div className="flex flex-wrap justify-end gap-2">
            {["TS", "NEXT", "RUST", "AWS"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs font-bold text-[#fdfbf0]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
