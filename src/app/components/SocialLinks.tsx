import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function SocialLinks() {
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/Delizald", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/elizaldedavid/", label: "LinkedIn" },
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
