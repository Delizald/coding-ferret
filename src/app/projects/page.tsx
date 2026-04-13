import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Coding Ferret",
    description:
      "This portfolio site — built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Designed to showcase my work and help me land my next role.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Delizald/coding-ferret",
    live: null,
    status: "In Progress",
  },
  {
    title: "[Project Title — placeholder]",
    description:
      "A short description of what this project does, the problem it solves, and who it was built for. Replace with your real project details.",
    tech: [".NET", "C#", "Azure", "SQL Server"],
    github: null,
    live: null,
    status: "Placeholder",
  },
  {
    title: "[Project Title — placeholder]",
    description:
      "Another project placeholder. Add details about your open-source contributions, side projects, or notable work you've done at previous companies.",
    tech: ["C#", "Microservices", "Docker"],
    github: null,
    live: null,
    status: "Placeholder",
  },
  {
    title: "[Project Title — placeholder]",
    description:
      "Placeholder for a third project. Could be a tool, library, API, or anything you've built that you're proud of.",
    tech: ["Azure Functions", ".NET", "CosmosDB"],
    github: null,
    live: null,
    status: "Placeholder",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Projects</h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">Things I&apos;ve built</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-green-400/40 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      project.status === "In Progress"
                        ? "border-green-400 text-green-400"
                        : "border-gray-600 text-gray-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-gray-800 text-green-300 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-sm text-gray-400">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-green-400 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-green-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
