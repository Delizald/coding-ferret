'aaaa' 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-800">
      <Link href="/" className="text-green-400 font-semibold text-xl hover:opacity-80 transition">
        Coding Ferret
      </Link>

      <div className="flex gap-6 text-gray-300">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:text-green-400 transition ${
              pathname === link.href ? "text-green-400 font-medium" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
