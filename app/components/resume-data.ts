export interface ResumeData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    website: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
  experience: {
    name: string;
    role: string;
    period: string;
    description: string;
  }[];
  projects: {
    name: string;
    description: string;
  }[];
  skills: string[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Rohit Mandavkar",
  role: "Web Engineer",
  tagline: "Building tools, platforms, and infrastructure for the web.",
  location: "India",
  contact: {
    email: "hello@rohitmandavkar.dev",
    linkedin: "linkedin.com/in/rohitmandavkar",
    github: "github.com/rohitmandavkar",
    website: "rohitmandavkar.vercel.app",
  },
  stats: [
    { label: "YRS", value: "5+" },
    { label: "STACK", value: "TS / NEXT / RUST" },
    { label: "FOCUS", value: "WEB ENG" },
  ],
  experience: [
    {
      name: "cybercrate.tech",
      role: "Founder & Engineer",
      period: "2024–Present",
      description:
        "Attack Surface Monitoring platform. End-to-end product engineering, infrastructure, and security research.",
    },
    {
      name: "MY-CRATE",
      role: "Product Engineer",
      period: "2024–Present",
      description:
        "Obsidian vault publisher. Built the live product, CLI, and publishing pipeline.",
    },
    {
      name: "The Culling Wire",
      role: "Designer & Engineer",
      period: "2024",
      description:
        "JJK-themed newspaper-aesthetic site. Hand-coded layout, typography, and art direction.",
    },
  ],
  projects: [
    {
      name: "CYBERDECK",
      description: "Cyberpunk 2077-themed project manager",
    },
    {
      name: "GRIDCORE",
      description: "Procedurally generated 3D mini city",
    },
    {
      name: "Himotoku",
      description: "Browser-based investigation game",
    },
    {
      name: "Leech",
      description: "Rust DNS-capture TUI",
    },
    {
      name: "Adversary DST",
      description: "Deterministic simulation testing framework",
    },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Rust",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Linux",
    "Git",
  ],
  education: [
    {
      school: "BITS Pilani WILP",
      degree: "B.S. Computer Science",
      period: "2022–Present",
    },
  ],
};
