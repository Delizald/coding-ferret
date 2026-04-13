import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/Delizald",
    href: "https://github.com/Delizald",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/elizaldedavid",
    href: "https://www.linkedin.com/in/elizaldedavid/",
    icon: <FaLinkedin />,
  },
  {
    label: "Email",
    value: "david.elizalde.r.a@gmail.com",
    href: "mailto:david.elizalde.r.a@gmail.com",
    icon: <FaEnvelope />,
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Contact</h1>
        <p className="text-gray-500 mb-4 text-sm uppercase tracking-widest">Get in touch</p>

        <p className="text-gray-300 leading-relaxed mb-12">
          I&apos;m currently open to new opportunities. Whether you have a role in mind, want to
          collaborate, or just want to say hello — my inbox is open.
        </p>

        <div className="space-y-4 mb-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-green-400/60 hover:text-green-400 transition group"
            >
              <span className="text-xl text-green-400">{c.icon}</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{c.label}</p>
                <p className="text-sm text-gray-200 group-hover:text-green-300 transition">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/40">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4">
            Send a message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1 uppercase tracking-widest">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 uppercase tracking-widest">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1 uppercase tracking-widest">Message</label>
              <textarea
                rows={4}
                placeholder="What's on your mind?"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-400 transition resize-none"
              />
            </div>
            <p className="text-xs text-gray-600 italic">
              Note: form submission not yet wired up — connect to an email service (e.g. Resend,
              Formspree) when ready.
            </p>
            <button
              type="submit"
              className="bg-green-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-green-400 transition text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
