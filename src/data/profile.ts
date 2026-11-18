export type Profile = {
  name: string;
  titleLine: string;
  headline: string;
  summary: string[];
  interests: string[];
  skills: string[];
  technologies: string[];
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
    "I used AI to build and refine this portfolio more efficiently. You can also explore my HTML, CSS, and JavaScript projects created without AI.",
  headline:
    "I study ECE and Mathematics at Duke, build software and hardware, and explore how technology shapes finance. I enjoy making complex ideas useful and easier to understand.",
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
    "Java",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C",
    "Python",
    "Verilog",
    "HTML",
    "CSS",
    "Onshape",
    "Linux",
    "API Development",
    "Assembly",
    "Git",
    "Vivado",
    "FPGA",
    "React",
  ],
  technologies: [
    "AWS (S3, Glue, SageMaker)",
    "GTKWave",
    "Postman",
    "Docker Compose",
    "Logisim",
    "Arduino",
    "Jira",
    "Figma",
    "Salesforce CRM",
    "Tessent Shell",
    "Datadog",
    "Gem",
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
