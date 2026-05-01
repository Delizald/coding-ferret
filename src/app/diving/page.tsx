import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiExternalLink } from "react-icons/fi";

const stats = [
  { label: "Logged Dives", value: "29" },
  { label: "Diving Since", value: "2022" },
  { label: "Deepest Dive", value: "26.6 m" },
  { label: "Bottom Time", value: "~23 h" },
];

const certifications = [
  {
    title: "Open Water Diver",
    date: "Nov 7, 2022",
    id: "730270T6672826357943-MX",
    ssiId: "3577349",
    instructor: "Pablo Antonio Arias Cid",
    center: "Oceanos Expediciones Y Buceo",
    file: "open-water-diver.pdf",
    description: "Entry-level open water certification — the foundation of every dive.",
  },
  {
    title: "Deep Diving",
    date: "Jun 7, 2023",
    id: "730270S6861941481939-MX",
    ssiId: "3577349",
    instructor: "Alberto Ruiz Gaytan Lopez",
    center: "Oceanos Expediciones Y Buceo",
    file: "deep-diving.pdf",
    description: "Certified to dive to 40 m / 130 ft with proper planning and safety.",
  },
  {
    title: "Enriched Air Nitrox (EAN32)",
    date: "Jun 7, 2023",
    id: "730270K6869841854638-MX",
    ssiId: "3577349",
    instructor: "Alberto Ruiz Gaytan Lopez",
    center: "Oceanos Expediciones Y Buceo",
    file: "nitrox.pdf",
    description: "Trained to use Nitrox (32% O₂) for extended bottom times and safer dives.",
  },
  {
    title: "Shark Ecology",
    date: "Jun 4, 2024",
    id: "730270V7177106948806-MX",
    ssiId: "3577349",
    instructor: "Emilio Williams Morales Perez",
    center: "Oceanos Expediciones Y Buceo",
    file: "shark-ecology.pdf",
    description: "Studied shark behavior, biology, and conservation in their natural habitat.",
  },
  {
    title: "Specialty Diver",
    date: "Jun 17, 2024",
    id: "730270U7189780416651-MX",
    ssiId: "3577349",
    instructor: "SSI International",
    center: "Oceanos Expediciones Y Buceo",
    file: "specialty-diver.pdf",
    description: "Awarded after completing Deep Diving, Nitrox, and Shark Ecology specialties.",
  },
];

const dives = [
  { num: 29, site: "Cementerios",              date: "12 Jul 2025", duration: 50, depth: 16.7, notes: "Nitrox · Boat" },
  { num: 28, site: "Cementerios",              date: "12 Jul 2025", duration: 51, depth: 20.5, notes: "Nitrox · Boat" },
  { num: 27, site: "Las Cañadas",              date: "11 Jul 2025", duration: 46, depth: 19.5, notes: "Nitrox · Boat" },
  { num: 26, site: "El Ancla",                 date: "11 Jul 2025", duration: 43, depth: 22.0, notes: "Nitrox · Boat" },
  { num: 25, site: "C-50 Rivapalacios (Wreck)",date: "10 Jul 2025", duration: 35, depth: 26.6, notes: "Nitrox · Wreck" },
  { num: 24, site: "Cabo Mex",                 date: "10 Jul 2025", duration: 47, depth: 17.0, notes: "Boat" },
  { num: 23, site: "Los Arcos National Park",  date: "09 Feb 2025", duration: 49, depth: 20.0, notes: "" },
  { num: 22, site: "Puerto Vallarta",          date: "09 Feb 2025", duration: 50, depth: 20.0, notes: "" },
  { num: 21, site: "Majahuitas",               date: "09 Feb 2025", duration: 46, depth: 18.0, notes: "" },
  { num: 20, site: "Majahuitas",               date: "08 Feb 2025", duration: 51, depth: 18.0, notes: "" },
  { num: 19, site: "Isla Isabel",              date: "26 Dec 2024", duration: 45, depth: 15.0, notes: "" },
  { num: 18, site: "Isla Isabel",              date: "07 Dec 2024", duration: 50, depth: 18.0, notes: "" },
  { num: 17, site: "Isla Isabel",              date: "07 Dec 2024", duration: 50, depth: 18.0, notes: "" },
  { num: 16, site: "Isla Isabel",              date: "07 Dec 2024", duration: 50, depth: 18.0, notes: "" },
  { num: 15, site: "Isla Isabel",              date: "06 Dec 2024", duration: 49, depth: 18.0, notes: "Open Water" },
  { num: 14, site: "Isla Isabel",              date: "06 Dec 2024", duration: 50, depth: 17.0, notes: "Open Water" },
  { num: 13, site: "El Islote",                date: "15 Jun 2024", duration: 55, depth: 19.8, notes: "" },
  { num: 12, site: "Los Morros",               date: "25 May 2024", duration: 51, depth: 16.6, notes: "" },
  { num: 11, site: "El Bajo – Cabo Pulmo",     date: "25 May 2024", duration: 48, depth: 15.1, notes: "" },
  { num: 10, site: "Sea Lion Colony",          date: "25 May 2024", duration: 37, depth: 16.1, notes: "Open Water" },
  { num:  9, site: "El Cantil",               date: "24 May 2024", duration: 51, depth: 16.1, notes: "" },
  { num:  8, site: "El Bajo de Cristo",       date: "29 Jan 2023", duration: 52, depth: 22.0, notes: "" },
  { num:  7, site: "El Bajo de Cristo",       date: "29 Jan 2023", duration: 50, depth: 22.0, notes: "" },
  { num:  6, site: "El Bajo de Cristo",       date: "29 Jan 2023", duration: 50, depth: 17.0, notes: "" },
  { num:  5, site: "Los Arcos National Park", date: "28 Jan 2023", duration: 50, depth: 22.0, notes: "" },
  { num:  4, site: "El Bajo de Cristo",       date: "09 Nov 2022", duration: 50, depth: 18.0, notes: "Training" },
  { num:  3, site: "La Quijada",              date: "09 Nov 2022", duration: 51, depth: 18.0, notes: "" },
  { num:  2, site: "Mismaloya",               date: "05 Nov 2022", duration: 55, depth: 15.0, notes: "Training" },
  { num:  1, site: "Mismaloya",               date: "05 Nov 2022", duration: 35, depth: 14.0, notes: "Training" },
];

export default function DivingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Diving</h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">
          SSI Open Water Diver · Mexico
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 text-center hover:border-green-400/40 transition"
            >
              <p className="text-3xl font-bold text-green-400">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-6">
          SSI Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden hover:border-green-400/40 transition flex flex-col"
            >
              <iframe
                src={`/diving/${cert.file}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                className="w-full border-0"
                style={{ height: "380px" }}
                title={cert.title}
              />
              <div className="px-4 py-3 border-t border-gray-800 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{cert.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cert.date} · {cert.instructor}</p>
                  <p className="font-mono text-xs text-gray-700 mt-0.5 truncate">{cert.id}</p>
                </div>
                <a
                  href={`/diving/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-gray-500 hover:text-green-400 transition mt-0.5"
                  title="Open in new tab"
                >
                  <FiExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dive Log */}
        <h2 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-6">
          Dive Log — {dives.length} dives
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-800 text-xs uppercase tracking-widest text-gray-500">
                <th className="px-4 py-3 w-10">#</th>
                <th className="px-4 py-3">Site</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Depth</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {dives.map((dive, i) => (
                <tr
                  key={dive.num}
                  className={`border-b border-gray-800/60 hover:bg-white/[0.02] transition ${
                    i === 0 ? "bg-green-400/5" : ""
                  }`}
                >
                  <td className="px-4 py-3 text-gray-500 font-mono text-xs">{dive.num}</td>
                  <td className="px-4 py-3 text-gray-200 font-medium">{dive.site}</td>
                  <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{dive.date}</td>
                  <td className="px-4 py-3 text-gray-400">{dive.duration} min</td>
                  <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                    {dive.depth.toFixed(1)} m
                    {dive.depth === 26.6 && (
                      <span className="ml-2 text-xs text-green-400/70">deepest</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{dive.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-700">
          All dives logged via SSI · Oceanos Expediciones Y Buceo, Guadalajara, Mexico
        </p>
      </div>

      <Footer />
    </main>
  );
}
