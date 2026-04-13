import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const experiences = [
  {
    company: "EPAM",
    role: "Software Engineer (.NET)",
    period: "Nov 2025 – Mar 2026",
    location: "Remote",
    description:
      "Built document intelligence features for Thomson Reuters by integrating third-party AI APIs and Azure AI services to automate document summarization workflows.",
    highlights: [
      "Reduced manual review overhead for legal document processing through AI-powered summarization",
      "Integrated third-party AI APIs and Azure AI services into an existing enterprise pipeline",
    ],
    tech: [".NET", "C#", "Azure AI", "Document Intelligence"],
  },
  {
    company: "Globant",
    role: "Sr. Software Engineer (.NET Core)",
    period: "Mar 2020 – Jul 2025",
    location: "Remote · Guadalajara, Mexico",
    description:
      "Worked across multiple high-profile client projects over five years, contributing to AI-powered developer tools, cloud infrastructure portals, and legacy system modernization.",
    highlights: [
      "Contributed to Augmented Coding (now Augoor), an AI-powered developer productivity tool for automated code suggestions, across a polyglot codebase: .NET Framework, Python, TypeScript, Flask, and Django",
      "Led SOAP-to-REST API migration for DSI (now Cloud Inventory), modernizing legacy integrations and improving API reliability and maintainability using .NET Core",
      "Implemented and maintained features on Electronic Arts' Azure VM management portal, supporting fleet operations for global game studio infrastructure",
    ],
    tech: [".NET Core", "C#", "Azure", "Service Fabric", "Angular 16", "Python", "Flask", "Django", "TypeScript", "SQL", "CosmosDB", "PowerBI", "GitLab Pipelines", "PowerShell"],
  },
  {
    company: "DXC",
    role: "IT Developer Engineer III",
    period: "Apr 2017 – Mar 2020",
    location: "Guadalajara, Mexico",
    description:
      "Architected and maintained identity and directory services infrastructure, reducing manual provisioning overhead through automation across Linux environments.",
    highlights: [
      "Architected and maintained OpenLDAP and Active Directory infrastructure for enterprise clients",
      "Significantly reduced manual provisioning time through automation scripts in C#, Perl, and PowerShell",
      "Operated on RedHat 6 Linux environments at scale",
    ],
    tech: ["C#", "PowerShell", "Perl", "OpenLDAP", "Active Directory", "RedHat Linux"],
  },
  {
    company: "HPE",
    role: "IT Developer Engineer III",
    period: "May 2015 – Apr 2017",
    location: "Guadalajara, Mexico",
    description:
      "Managed and automated web hosting infrastructure for enterprise clients across Linux and Windows environments.",
    highlights: [
      "Automated web hosting operations using C#, Perl, IIS, Apache, and Ansible",
      "Operated across Linux/RedHat 6 environments for multiple enterprise clients",
    ],
    tech: ["C#", "Perl", "IIS", "Apache", "Ansible", "Linux"],
  },
  {
    company: "Pax Facturación",
    role: "Software Engineer",
    period: "Apr 2013 – May 2015",
    location: "Chihuahua, Mexico",
    description:
      "Built internal software for tax compliance and digital invoice signing, fully compliant with Mexican SAT standards.",
    highlights: [
      "Designed and built in-house tax and digital invoice signing automation software from scratch",
      "Ensured compliance with Mexican SAT (tax authority) standards using digital certificates and OpenSSL",
    ],
    tech: ["C#", "ASP.NET", "SQL", "OpenSSL"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Experience</h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">10+ years of work history</p>

        <div className="relative border-l border-gray-700 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-green-400 border-2 border-gray-900" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
                <span className="text-sm text-gray-500 shrink-0">{exp.period}</span>
              </div>

              <p className="text-green-400 font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

              <ul className="space-y-1 mb-4">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-gray-800 text-green-300 border border-gray-700"
                  >
                    {t}
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
