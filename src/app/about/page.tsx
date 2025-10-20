export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          About Coding Ferret 🦦
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold">Coding Ferret</span> — a space where I share my
          journey as a software engineer, blending code, creativity, and curiosity.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This site is built with <span className="font-medium text-indigo-500">Next.js</span> and{" "}
          <span className="font-medium text-teal-500">Tailwind CSS</span> to showcase my projects,
          thoughts, and experiences in software development and beyond.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          Stay tuned — more updates, portfolio pieces, and articles are coming soon!
        </p>
      </div>
    </main>
  );
}
