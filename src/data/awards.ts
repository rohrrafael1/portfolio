// Transcribed from the current public/resume.pdf. Keep medal years and categories explicit.
export const awards = [
  {
    organization: "Biogenesis International Biomedicine Olympiad",
    subject: "Biomedicine",
    entries: [
      {
        medal: "Gold",
        year: "2022",
        category: "Molecular and Cellular Biology",
      },
      { medal: "Gold", year: "2022", category: "Anatomy and Physiology" },
      {
        medal: "Bronze",
        year: "2022",
        category: "Pharmacology and Toxicology",
      },
    ],
  },
  {
    organization: "Brazilian Chemistry Olympiad",
    subject: "Chemistry",
    abbreviation: "OBQ",
    entries: [
      { medal: "Bronze", year: "2023", category: "" },
      { medal: "Bronze", year: "2022", category: "" },
    ],
  },
  {
    organization: "Brazilian Physics Olympiad",
    subject: "Physics",
    abbreviation: "OBF",
    entries: [{ medal: "Silver", year: "2023", category: "" }],
  },
  {
    organization: "Brazilian National Sciences Olympiad",
    subject: "Science",
    abbreviation: "ONC",
    entries: [
      { medal: "Gold", year: "2023", category: "" },
      { medal: "Gold", year: "2022", category: "" },
    ],
  },
  {
    organization: "Brazilian Astronomy and Astronautics Olympiad",
    subject: "Astronomy",
    abbreviation: "OBA",
    entries: [{ medal: "Gold", year: "2022", category: "" }],
  },
  {
    organization: "Brazilian Robotics Olympiad",
    subject: "Robotics",
    abbreviation: "OBR",
    entries: [{ medal: "Silver", year: "2022", category: "" }],
  },
] as const;
