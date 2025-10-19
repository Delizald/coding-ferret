import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com/yourusername", label: "Instagram" },
  ];

  return (
    <div className="flex gap-6 text-2xl text-gray-300">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          aria-label={social.label}
          className="hover:text-green-400 transition-transform transform hover:scale-110"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
