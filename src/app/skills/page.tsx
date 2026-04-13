import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C#", note: "8 yrs" },
      { name: "JavaScript", note: "4 yrs" },
      { name: "TypeScript", note: "3 yrs" },
      { name: "Python", note: "3 yrs" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Azure", note: "3 yrs" },
      { name: "AWS", note: "1 yr" },
      { name: "Service Fabric", note: "" },
      { name: "Ansible", note: "" },
      { name: "GitLab Pipelines", note: "" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", note: "3 yrs" },
      { name: "Angular", note: "3 yrs" },
      { name: "Next.js", note: "" },
      { name: "Tailwind CSS", note: "" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL / SQL Server", note: "8 yrs" },
      { name: "MongoDB", note: "3 yrs" },
      { name: "CosmosDB", note: "1 yr" },
    ],
  },
  {
    category: "Frameworks & Runtimes",
    skills: [
      { name: ".NET Core", note: "" },
      { name: "ASP.NET", note: "" },
      { name: "Flask", note: "" },
      { name: "Django", note: "" },
    ],
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "OpenLDAP", note: "" },
      { name: "Active Directory", note: "" },
      { name: "PowerShell", note: "" },
      { name: "PowerBI", note: "" },
      { name: "IIS / Apache", note: "" },
      { name: "OpenSSL", note: "" },
    ],
  },
  {
    category: "AI Tooling",
    skills: [
      { name: "Claude Code", note: "" },
      { name: "GitHub Copilot", note: "" },
      { name: "Azure AI Services", note: "" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Skills</h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">Tech stack &amp; tools</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 hover:border-green-400/40 transition"
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4">
                {cat.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, note }) => (
                  <span
                    key={name}
                    className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-200 border border-gray-700 hover:border-green-400 hover:text-green-300 transition"
                  >
                    {name}
                    {note && <span className="text-gray-500 ml-1 text-xs">· {note}</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
