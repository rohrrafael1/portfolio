export type Profile = {
  name: string;
  titleLine: string;
  headline: string;
  summary: string[];
  interests: string[];
  targetRoles: string[];
  location: string;
  email: string;
  linkedIn: string;
  resumePath: string;
};

export const profile: Profile = {
  name: "Rafael Rohr",
  titleLine: "Duke University • Electrical & Computer Engineering",
  headline:
    "Quant-minded builder at Duke—turning technical depth into decision-grade impact across fintech, hardware verification, and real-world systems.",
  summary: [
    "I’m a sophomore at Duke studying Electrical & Computer Engineering, with minors in Finance and Math. I like problems where measurement matters: performance, reliability, and end-user outcomes.",
    "My experience spans secure fintech automation, hardware testing/verification, and embedded robotics. I write production-quality code and also build the systems that make hardware trustworthy.",
  ],
  interests: ["Quant", "Consulting", "Tech"],
  targetRoles: [
    "Quant / Trading (internship or research)",
    "Consulting Analytics (internship)",
    "Software Engineering (product, data, or applied ML)",
    "Embedded / Hardware Systems (reliability + performance)",
  ],
  location: "Durham, NC (USA)",
  email: "rafael.sersonrohr@duke.edu",
  linkedIn: "linkedin.com/in/rohrrafael",
  resumePath: "/resume.pdf",
};

