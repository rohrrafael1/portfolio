export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  roleAndOrg: string;
  timeline: string;
  location: string;
  category: string;
  summary: string;
  highlights: Metric[];
  outcomes: string[];
  approach: string[];
  tools: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "stoneco-payments-ai-automation",
    title: "StoneCo — AI-driven workflow automation",
    roleAndOrg: "Software Engineer + Product Manager Intern",
    timeline: "May 2025 – Aug 2025",
    location: "Sao Paulo, SP (Brazil)",
    category: "Payments • Applied ML • Product Engineering",
    summary:
      "Built secure automation for chat attendants, using AI prompt engineering and a fine-tuned model integrated into a TypeScript API.",
    highlights: [
      { label: "Time saved", value: "49s / session" },
      { label: "Annual impact", value: "~R$1M (~US$200K)" },
      { label: "Security focus", value: "Sensitive data handling" },
    ],
    outcomes: [
      "Reduced chat attendant workload by automating their call workflow, saving 49 seconds per session (~R$1M annually).",
      "Implemented AI-driven prompt engineering with secure handling of sensitive user data.",
      "Created and deployed a fine-tuned ChatGPT model and used it in a TypeScript API endpoint.",
    ],
    approach: [
      "Partnered across product, design, AI, and R&D to integrate Salesforce CRM, AWS S3, and Twilio into a scalable workflow pipeline.",
      "Designed model usage patterns around reliability and compliance for sensitive data flows.",
      "Delivered production-ready code that improved throughput without sacrificing security.",
    ],
    tools: [
      "TypeScript API development",
      "Salesforce CRM",
      "AWS S3",
      "Twilio",
      "Prompt engineering",
      "Fine-tuning",
      "Secure data handling",
    ],
  },
  {
    slug: "riscv-dft-testability",
    title: "RISC-V (pipelined) — Design for Testability (DFT)",
    roleAndOrg: "Independent Study Researcher",
    timeline: "Jan 2026 – Present",
    location: "Durham, NC (USA)",
    category: "Hardware Verification • Reliability Engineering",
    summary:
      "Implemented DFT methods for a pipelined RISC-V CPU using Siemens EDA tooling and developed scan insertion, ATPG, and fault-analysis scripts.",
    highlights: [
      { label: "Stuck-at coverage", value: "95%" },
      { label: "Transition coverage", value: "90.5%" },
      { label: "Verification depth", value: "DFT tooling + scripts" },
    ],
    outcomes: [
      "Achieved 95% stuck-at and 90.5% transition fault coverage for reliability testing.",
      "Implemented scan insertion, ATPG, and fault-analysis workflows using Tessent Shell.",
      "Collaborated directly with Siemens EDA engineers to translate DFT requirements into executable verification runs.",
    ],
    approach: [
      "Modeled testability constraints and iteratively improved the verification setup to raise coverage.",
      "Built repeatable scripts to reduce manual overhead and make coverage measurable.",
      "Validated DFT results to ensure reliability targets were met for a pipelined datapath.",
    ],
    tools: [
      "Tessent Shell",
      "Scan insertion",
      "ATPG",
      "Fault analysis",
      "RISC-V digital design",
      "Scripting for verification",
    ],
  },
  {
    slug: "spell-it-out-fpga-robotics",
    title: "Spell-it-Out — FPGA robotic writing system",
    roleAndOrg: "FPGA Engineer",
    timeline: "Apr 2026 – May 2026",
    location: "Durham, NC (USA)",
    category: "Embedded • FPGA • Real-time Systems",
    summary:
      "Built an autonomous whiteboard-writing robot using a custom Verilog MIPS CPU, FPGA-controlled motors/servos, and PS2 keyboard input.",
    highlights: [
      { label: "Alphabet coverage", value: "26 characters" },
      { label: "Real-time control", value: "Synchronized 3-axis motion" },
      { label: "Automation", value: "Self-starting execution pipeline" },
    ],
    outcomes: [
      "Developed assembly + memory-mapped FPGA interfaces for real-time text-to-motion execution.",
      "Debugged and optimized RTL and motor drivers to achieve reliable autonomous writing of all 26 alphabet characters.",
      "Implemented PS2 input processing and automated character formatting for end-to-end execution.",
    ],
    approach: [
      "Designed a 5-stage pipelined MIPS CPU in Verilog to support deterministic instruction-driven behavior.",
      "Built timing-safe interfaces to coordinate control signals, PWM servo control, and keyboard input.",
      "Iterated on RTL and peripheral drivers until the system performed robustly in practice.",
    ],
    tools: [
      "Verilog RTL",
      "5-stage pipelined MIPS CPU",
      "Assembly",
      "FPGA motor + servo control",
      "PS2 keyboard input",
      "Memory-mapped interfaces",
    ],
  },
  {
    slug: "christensen-family-center-for-innovation-researchcustomai",
    title: "Christensen Family Center for Innovation — ResearchCustomAI",
    roleAndOrg: "Undergraduate Researcher",
    timeline: "Aug 2025 – May 2026",
    location: "Durham, NC (USA)",
    category: "Applied AI Research • Product Discovery",
    summary:
      "Helped design an AI-powered research workspace that streamlines founder ideation, opportunity evaluation, and venture planning—plus knowledge organization to make inputs actionable.",
    highlights: [
      {
        label: "Discovery focus",
        value: "Founder workflow → product requirements",
      },
      {
        label: "Validation path",
        value: "Market analysis + customer discovery",
      },
      { label: "Healthcare direction", value: "MCAS exploration" },
    ],
    outcomes: [
      "Built research artifacts for an AI chatbot platform to support ideation, evaluation, and venture planning.",
      "Conducted market analysis and customer discovery to assess feasibility and translate qualitative feedback into engineering requirements.",
      "Explored MCAS and AI-assisted diagnosis to inform a faster, on-site evaluation workflow for cytopathology.",
    ],
    approach: [
      "Researched conversational AI patterns paired with knowledge organization so users can move from prompts to decisions.",
      "Structured customer discovery to turn ambiguous needs into testable product directions.",
      "Converted research findings into concrete feature and engineering requirements for a research workflow platform.",
    ],
    tools: [
      "Conversational AI (workflow design)",
      "Knowledge organization",
      "Customer discovery",
      "Market analysis",
      "MCAS evaluation",
      "Product requirements",
    ],
    githubUrl: "https://github.com/alinadang/ResearchCustomAI",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

