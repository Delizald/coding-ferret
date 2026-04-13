import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCertificate, FaGlobe, FaCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">About Me</h1>
        <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest">Who I am</p>

        <div className="flex flex-col gap-3 mb-10 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-400 shrink-0" />
            <span>Zapopan, Jalisco, Mexico</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-green-400 shrink-0" />
            <span>Senior Software Engineer · .NET | Python | Azure | Cloud &amp; Microservices</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-green-400 shrink-0" />
            <span>B.S. in Systems Engineering — Instituto Tecnológico de Chihuahua II</span>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-white">Bio</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Software Engineer with 10+ years of experience delivering enterprise solutions across cloud
            infrastructure, microservices, and AI-integrated systems. Primary expertise in .NET Core and
            Python, with production experience across Azure, SQL, and event-driven architectures.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Proven track record at Electronic Arts, Thomson Reuters, and Globant, working with distributed
            teams across multiple time zones — with a consistent ability to ramp up quickly on complex
            legacy codebases and deliver value across the full stack.
          </p>
        </section>

        {/* What I bring */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-white">What I bring to a team</h2>
          <ul className="list-none space-y-2 text-gray-300">
            {[
              "Deep expertise in C# / .NET Core with a focus on clean, maintainable architecture",
              "Hands-on experience designing and deploying cloud-native solutions on Azure",
              "Strong background in SQL and NoSQL database design across SQL Server, MongoDB, and CosmosDB",
              "Comfortable leading technical discussions and ramping up quickly on legacy codebases",
              "Experience working in distributed, international agile teams across multiple time zones",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-400 mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <FaCertificate className="text-green-400" /> Certifications
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "MCSA: Web Applications — Microsoft Certified",
              "TOEFL iBT (2022) — Score: 99 (C1 English)",
              "Neural Networks for Machine Learning — University of Toronto / Coursera (May 2017)",
              "Learn to Program: Crafting Quality Code — University of Toronto / Coursera (Sep 2017)",
            ].map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 shrink-0">▹</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <FaGlobe className="text-green-400" /> Languages
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { lang: "Spanish", level: "Native" },
              { lang: "English", level: "C1 · TOEFL 99" },
              { lang: "French", level: "A2" },
            ].map(({ lang, level }) => (
              <div
                key={lang}
                className="bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-2 text-sm"
              >
                <span className="text-white font-medium">{lang}</span>
                <span className="text-gray-500 ml-2">{level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <FaCode className="text-green-400" /> Open Source &amp; Community
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "React contributor to Folding@Home, a distributed computing platform for disease research.",
              "PHP contributor to BOINC, the world's largest volunteer computing platform.",
              "Spanish translator for BOINC and Anki, localization used by millions of users globally.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </main>
  );
}
