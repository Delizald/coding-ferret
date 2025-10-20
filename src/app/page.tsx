import Image from "next/image";
import { prefix } from "../../utils/prefix";
import Navbar from "../app/components/Navbar";
import SocialLinks from "../app/components/SocialLinks";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32">
        <Image
          src={`${prefix}/coding-ferret-logo.png`}
          alt="Coding Ferret logo"
          width={180}
          height={180}
          className="mb-6"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-2">David Elizalde</h1>
        <h2 className="text-xl text-gray-400 mb-6">Software Engineer · Creator of Coding Ferret</h2>

        <p className="max-w-xl text-gray-300 mb-8 leading-relaxed">
          Passionate about software engineering, AI, and environmental restoration. 
          I build systems that combine performance, simplicity, and purpose — from 
          full-stack apps to data-driven marine research tools.
        </p>

        <SocialLinks />

        <a
          href={`${prefix}/cv.pdf`}
          download
          className="mt-10 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
        >
          Download CV
        </a>
      </div>

      <footer className="text-center py-4 text-sm text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Coding Ferret · All Rights Reserved
      </footer>
    </main>
  );
}
