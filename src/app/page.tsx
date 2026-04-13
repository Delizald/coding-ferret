import Image from "next/image";
import { prefix } from "../../utils/prefix";
import Navbar from "../app/components/Navbar";
import SocialLinks from "../app/components/SocialLinks";
import Footer from "../app/components/Footer";

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
        <h2 className="text-xl text-gray-400 mb-6">Senior Software Engineer · .NET | Python | Azure | Cloud &amp; Microservices</h2>

        <p className="max-w-xl text-gray-300 mb-8 leading-relaxed">
          10+ years building enterprise solutions across cloud infrastructure, microservices, and
          AI-integrated systems. Proven track record at Electronic Arts, Thomson Reuters, and Globant —
          delivering value across the full stack.
        </p>

        <SocialLinks />

      </div>

      <Footer />
    </main>
  );
}
