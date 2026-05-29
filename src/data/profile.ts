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
  titleLine: "Brazilian Duke ECE student focused on hardware verification, embedded systems, and reliable software infrastructure.",
  headline:
    "Electrical & Computer Engineering student building reliable systems across hardware verification, embedded systems, and applied AI passionate about the idea that technology empowers humankind.",
  summary: [
    "I’m a rising junior at Duke studying Electrical & Computer Engineering, with minors in Finance and Math. I care about building systems that work reliably in practice, from hardware verification and embedded systems to scalable software tools. I enjoy solving technical problems, communicating clearly, and improving systems through careful iteration.",
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

