"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-800">
      <Link href="/" className="text-green-400 font-semibold text-xl hover:opacity-80 transition">
        Coding Ferret
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 text-gray-300">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:text-green-400 transition text-sm ${
              pathname === link.href ? "text-green-400 font-medium" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-gray-300 hover:text-green-400 transition"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-gray-800 flex flex-col md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-8 py-3 text-gray-300 hover:text-green-400 hover:bg-white/5 transition text-sm ${
                pathname === link.href ? "text-green-400 font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
