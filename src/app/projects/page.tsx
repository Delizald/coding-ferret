import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-400">
          Projects
        </h1>

        <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed">
          The Coding Ferret forge is currently being prepared. Soon, this
          section will showcase the tools, systems, and experiments I’m building
          to merge technology with purpose — from full-stack apps to machine
          learning work.
        </p>

        <div className="border border-gray-700 rounded-lg px-6 py-3 text-gray-500 italic animate-pulse">
          Work in progress 🛠️ — check back soon.
        </div>
      </div>

      <footer className="text-center py-4 text-sm text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Coding Ferret · All Rights Reserved
      </footer>
    </main>
  );
}
