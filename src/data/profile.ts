export type Profile = {
  name: string;
  titleLine: string;
  headline: string;
  summary: string[];
  interests: string[];
  skills: string[];
  languages: { name: string; level: string }[];
  targetRoles: string[];
  location: string;
  email: string;
  linkedIn: string;
  resumePath: string;
};

export const profile: Profile = {
  name: "Rafael Rohr",
  titleLine:
    "I built this portfolio with AI assistance. My projects also include HTML, CSS, and JavaScript work created without AI.",
  headline:
    "I study ECE and Mathematics at Duke, build software and hardware, and explore how technology shapes finance. I enjoy making complex ideas useful—and easier to understand.",
  summary: [
    "I’m Brazilian, studying Electrical & Computer Engineering and Mathematics at Duke, with a minor in Finance. I’m interested in what happens where disciplines meet: how a model becomes a product, how code moves a machine, and how an explanation makes a difficult idea click.",
    "I’ve worked across AI and software engineering at Itaú and StoneCo, built FPGA systems, and taught data structures and algorithms. Each has shaped the way I approach a problem: understand it carefully, build something concrete, and keep learning from the people around me.",
  ],
  interests: [
    "Systems reliability",
    "Hardware verification",
    "Applied research",
    "Finance & mathematics",
  ],
  skills: [
    "Python",
    "Java",
    "TypeScript",
    "C",
    "SQL",
    "Verilog",
    "React",
    "AWS",
    "Linux",
    "Git",
    "FPGA",
    "API development",
  ],
  languages: [
    { name: "Portuguese", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "C1" },
    { name: "French", level: "B1" },
  ],
  targetRoles: [
    "Secure software engineering",
    "Hardware verification & reliability",
    "Embedded systems",
    "Applied research & product discovery",
  ],
  location: "Durham, NC (USA)",
  email: "rafael.sersonrohr@duke.edu",
  linkedIn: "linkedin.com/in/rohrrafael",
  resumePath: "/resume.pdf",
};
