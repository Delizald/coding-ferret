import Image from "next/image";
import Link from "next/link";
import { prefix } from "../../utils/prefix";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Logo */}
      <Image
        src={`${prefix}/coding-ferret-logo.png`}
        alt="Coding Ferret logo"
        width={150}
        height={150}
        className="mb-6"
      />

      {/* Name & Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">David Elizalde</h1>
      <h2 className="text-xl text-gray-400 mb-6">Software Engineer & Creator of Coding Ferret</h2>

      {/* About Me */}
      <p className="text-center max-w-xl text-gray-300 mb-8 leading-relaxed">
        Passionate about software engineering, AI, and environmental restoration. 
        I build projects that merge technology with purpose — from data-driven apps 
        to tools that help preserve coral reefs.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mb-8">
        <Link href="https://github.com/yourusername" target="_blank" className="hover:text-green-400">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-green-400">
          LinkedIn
        </Link>
        <Link href="https://twitter.com/yourusername" target="_blank" className="hover:text-green-400">
          X/Twitter
        </Link>
      </div>

      {/* CV Button */}
      <a
        href={`${prefix}/cv.pdf`}
        download
        className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
      >
        Download CV
      </a>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Coding Ferret · All Rights Reserved
      </footer>
    </main>
  );
}
