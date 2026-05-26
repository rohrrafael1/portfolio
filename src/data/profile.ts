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
  titleLine: "Brazilian rising junior at Duke • Electrical & Computer Engineering",
  headline:
    "I build reliable systems—secure software, hardware verification, and research that turns ambiguity into usable tools.",
  summary: [
    "I’m a rising junior at Duke studying Electrical & Computer Engineering (minors: Finance and Math). I’m result-driven and disciplined, and I communicate progress with honesty.",
    "I care about reliability: performance that holds up in practice, verification that catches edge cases, and iterative engineering that keeps improving after the first version.",
  ],
  interests: ["Systems reliability", "Hardware verification", "Applied research", "Finance & mathematics"],
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

