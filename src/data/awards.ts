// Resume awards, supplemented by Rafael's additional medals and athletic honors.
// Keep years and categories explicit; do not infer missing award dates.
export const awards = [
  {
    organization:
      "Brazilian Mathematics Olympiad for Private and Public Schools",
    subject: "Mathematics",
    entries: [{ medal: "Silver", year: "2022", category: "" }],
  },
  {
    organization: "Brazilian Kangaroo Math Olympiad",
    subject: "Mathematics",
    entries: [
      { medal: "Gold", year: "2021", category: "" },
      { medal: "Gold", year: "2022", category: "" },
      { medal: "Bronze", year: "2023", category: "" },
    ],
  },
  {
    organization: "São Paulo Chemistry Olympiad",
    subject: "Chemistry",
    entries: [
      { medal: "Silver", year: "2022", category: "" },
      { medal: "Bronze", year: "2023", category: "" },
    ],
  },
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

export const athleticAwards = [
  {
    title: "School’s Outstanding Athlete",
    organization: "School athletics",
    years: ["2020", "2021", "2023"],
  },
  {
    title: "Student-Athlete: Best Career",
    organization: "School athletics",
    years: [],
  },
  {
    title: "Best Goalkeeper",
    organization: "São Paulo school sports league",
    years: ["2021"],
  },
] as const;
