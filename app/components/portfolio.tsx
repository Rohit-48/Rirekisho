"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaTwitter,
  FaCoffee,
} from "react-icons/fa";
import { SiCodeberg } from "react-icons/si";
import { ThemeSwitcher } from "./theme-switcher";
import { ResumeModal } from "./resume-modal";
import { resumeData } from "./resume-data";

const work = [
  {
    name: "cybercrate.tech",
    href: "https://cybercrate.tech",
    description: "Attack Surface Monitoring platform",
    years: "2024–",
  },
  {
    name: "MY-CRATE",
    href: "https://my-crate.app",
    description: "Obsidian vault publisher",
    years: "2024–",
  },
  {
    name: "The Culling Wire",
    href: "https://thecullingwire.com",
    description: "JJK-themed newspaper-aesthetic site, hand-coded",
    years: "2024",
  },
];

const projects = [
  {
    name: "CYBERDECK",
    href: "https://github.com/rohitmandavkar/cyberdeck",
    description: "Cyberpunk 2077-themed project manager",
    status: "Building",
  },
  {
    name: "GRIDCORE",
    href: "https://github.com/rohitmandavkar/gridcore",
    description: "Procedurally generated 3D mini city",
    status: "Building",
  },
  {
    name: "Himotoku",
    href: "https://github.com/rohitmandavkar/himotoku",
    description: "Browser-based investigation game",
    status: "Building",
  },
  {
    name: "Leech",
    href: "https://github.com/rohitmandavkar/leech",
    description: "Rust DNS-capture TUI",
    status: "Building",
  },
  {
    name: "Adversary DST",
    href: "https://github.com/rohitmandavkar/adversary-dst",
    description: "Deterministic simulation testing framework",
    status: "Archived",
  },
  {
    name: "Minecraft admin dashboard",
    href: "https://github.com/rohitmandavkar/mc-admin",
    description: "Admin and productivity app for Minecraft servers",
    status: "Building",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend & Infra",
    items: ["Node.js", "PostgreSQL", "Docker", "AWS", "Linux"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "Figma", "Obsidian"],
  },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted"
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

export function PortfolioPage({ posts }: { posts: { slug: string; title: string; date: string; excerpt: string; tags: string[] }[] }) {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <ThemeSwitcher />
      </div>
      <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28 md:py-36">
        <section className="mb-20 sm:mb-28">
          <Image
            src="/profile.png"
            alt="Rohit Mandavkar"
            width={80}
            height={80}
            priority
            className="mb-6 rounded-lg border border-border object-cover"
          />
          <h1 className="text-xl font-medium tracking-tight text-foreground">
            Rohit Mandavkar
          </h1>
          <p className="mt-3 text-base text-muted">
            Web Engineer building tools, platforms, and infrastructure for the web.
          </p>

          <div className="mt-6 space-y-4 text-base leading-7 text-foreground/90">
            <p>
              Computer Science student at BITS Pilani. I build products across
              the stack, from interfaces to infrastructure, and I am expanding
              into DevOps and AI/ML.
            </p>
          </div>

          <nav
            aria-label="Contact links"
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-base"
          >
            <ExternalLink href="mailto:hello@rohitmandavkar.dev">
              <FaEnvelope className="mr-1.5 inline-block h-4 w-4" />
              Email
            </ExternalLink>
            <ExternalLink href="https://linkedin.com/in/rohitmandavkar">
              <FaLinkedin className="mr-1.5 inline-block h-4 w-4" />
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com/rohitmandavkar">
              <FaGithub className="mr-1.5 inline-block h-4 w-4" />
              GitHub
            </ExternalLink>
            <ExternalLink href="https://x.com/rohitcpp">
              <FaTwitter className="mr-1.5 inline-block h-4 w-4" />
              X
            </ExternalLink>
            <ExternalLink href="https://codeberg.org/Shiranui">
              <SiCodeberg className="mr-1.5 inline-block h-4 w-4" />
              Codeberg
            </ExternalLink>
            <ExternalLink href="https://buymeacoffee.com/rohit77">
              <FaCoffee className="mr-1.5 inline-block h-4 w-4" />
              Coffee
            </ExternalLink>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted"
            >
              <FaFileAlt className="mr-1.5 inline-block h-4 w-4" />
              Resume
            </button>
          </nav>
        </section>

        <section className="mb-20 sm:mb-28">
          <SectionTitle>Work</SectionTitle>
          <ul className="space-y-5">
            {work.map((item) => (
              <li key={item.name}>
                <ExternalLink href={item.href}>{item.name}</ExternalLink>
                <span className="text-muted"> — {item.description}, </span>
                <span className="font-mono text-xs text-muted">
                  {item.years}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20 sm:mb-28">
          <SectionTitle>Projects</SectionTitle>
          <ul className="space-y-5">
            {projects.map((item) => (
              <li key={item.name}>
                <ExternalLink href={item.href}>{item.name}</ExternalLink>
                <span className="text-muted"> — {item.description} </span>
                <span className="font-mono text-xs text-muted">
                  [{item.status}]
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20 sm:mb-28">
          <SectionTitle>Writing</SectionTitle>
          <ul className="space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-muted"
                >
                  {post.title}
                </a>
                <span className="text-muted"> — {post.excerpt} </span>
                {post.date && (
                  <span className="font-mono text-xs text-muted">
                    {post.date}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20 sm:mb-28">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {group.category}
                </h3>
                <p className="text-base leading-7 text-foreground/90">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        data={resumeData}
      />
    </>
  );
}
