type Project = { title: string; date: string };
type Entry = { company: string; role: string; projects: Project[] };

const ENTRIES: Entry[] = [
  {
    company: "Felidae Conservation Fund",
    role: "Product Designer (volunteer)",
    projects: [{ title: "Wildlife-monitoring platform", date: "Jul 2026 - Present" }],
  },
  {
    company: "Meta (via Qualitest)",
    role: "Graduate Engineer",
    projects: [
      { title: "AI Smart Glasses", date: "Jan - Mar 2026" },
      { title: "Codec Avatar (XR/VR)", date: "Nov 2025 - Jan 2026" },
    ],
  },
  {
    company: "Tanmigo",
    role: "Founding Product Designer (side-project)",
    projects: [{ title: "Video annotation platform", date: "Jan 2026 - Present" }],
  },
  {
    company: "Charlie's Acres",
    role: "Product Designer (Volunteer)",
    projects: [{ title: "Animal sanctuary and education", date: "Jan - Nov 2025" }],
  },
  {
    company: "Alameda County Community Food Bank",
    role: "Product Designer (Capstone Project)",
    projects: [
      { title: "Regional non-profit hunger-relief organization", date: "Jan - Aug 2025" },
    ],
  },
  {
    company: "California College of the Arts (CCA)",
    role: "Master of Human-Computer Interaction Design (Mdes)",
    projects: [
      {
        title: "Industrial Design and Human Interface Design Scholarship (Issued by Apple Inc.)",
        date: "Aug 2024 - Aug 2025",
      },
    ],
  },
];

export function Timeline() {
  return (
    <div className="flex flex-col gap-10">
      {ENTRIES.map((entry) => (
        <div
          key={entry.company}
          className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-6"
        >
          <div>
            <p className="font-display text-2xl font-normal text-ink text-balance">
              {entry.company}
            </p>
            <p className="mt-1 text-lg text-ink">{entry.role}</p>
          </div>
          <div className="flex flex-col gap-4">
            {entry.projects.map((p) => (
              <div key={p.title}>
                <p className="font-display text-2xl font-normal text-ink text-balance">
                  {p.title}
                </p>
                <p className="mt-1 text-lg text-ink">{p.date}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
