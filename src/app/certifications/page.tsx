"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiX } from "react-icons/fi";

type Cert = {
  file: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
};

const certs: Cert[] = [
  // Professional
  { file: "cert-oracle-java.jpg",         title: "Oracle Certified Professional, Java SE 6",         issuer: "Oracle",             year: "2012", category: "Professional" },

  // Coursera
  { file: "cert-neural-networks.jpg",     title: "Neural Networks for Machine Learning",              issuer: "Coursera / U of Toronto", year: "2017", category: "Coursera" },
  { file: "cert-coursera-quality-code.jpg", title: "Learn to Program: Crafting Quality Code",         issuer: "Coursera / U of Toronto", year: "2017", category: "Coursera" },

  // Cloud & DevOps
  { file: "cert-aws.jpg",                 title: "AWS — Curso básico de desarrollo en Amazon AWS",    issuer: "Udemy",              year: "2019", category: "Cloud & DevOps" },
  { file: "cert-docker-kubernetes.jpg",   title: "Docker & Kubernetes: The Practical Guide",          issuer: "Udemy",              year: "2021", category: "Cloud & DevOps" },
  { file: "cert-opencv.png",              title: "OpenCV Bootcamp — Certificate of Excellence",       issuer: "OpenCV University",  year: "—",    category: "Cloud & DevOps" },

  // .NET & Java
  { file: "cert-aspnet-core-angular.jpg", title: "Build an App with ASP.NET Core and Angular",       issuer: "Udemy",              year: "2021", category: ".NET & Java" },
  { file: "cert-java-masterclass.jpg",    title: "Java Masterclass: De cero a Heroe",                issuer: "Udemy",              year: "2019", category: ".NET & Java" },
  { file: "cert-java-design-patterns.jpg", title: "Java Design Patterns and Architecture",            issuer: "Udemy",              year: "2017", category: ".NET & Java" },
  { file: "cert-spring-framework.jpg",    title: "Spring Framework & Dependency Injection for Beginners", issuer: "Udemy",         year: "2018", category: ".NET & Java" },

  // Frontend & Full Stack
  { file: "cert-angular.jpg",             title: "Angular 7 — The Complete Guide",                   issuer: "Udemy",              year: "2019", category: "Frontend & Full Stack" },
  { file: "cert-react.jpg",               title: "React — The Complete Guide (Hooks, Router, Redux)", issuer: "Udemy",              year: "2019", category: "Frontend & Full Stack" },
  { file: "cert-nestjs.jpg",              title: "NestJS: Node + TypeScript at estilo Angular",       issuer: "Udemy",              year: "2019", category: "Frontend & Full Stack" },
  { file: "cert-js-css-html.jpg",         title: "JavaScript, CSS & HTML",                           issuer: "Udemy",              year: "—",    category: "Frontend & Full Stack" },
  { file: "cert-js-angular-nodejs-mongodb.jpg", title: "Desarrollo web con JS, Angular, NodeJS y MongoDB", issuer: "Udemy",       year: "2017", category: "Frontend & Full Stack" },
  { file: "cert-nodejs-socketio.jpg",     title: "App de Chat con NodeJS y SocketIO",                issuer: "Udemy",              year: "2017", category: "Frontend & Full Stack" },

  // Data Science & ML
  { file: "cert-ml-ds-masterclass.jpg",   title: "Machine Learning & Data Science Foundations Masterclass", issuer: "Udemy",       year: "—",    category: "Data Science & ML" },
  { file: "cert-effective-datascience.jpg", title: "Effective Data Science: Delivering Impact & Value End-to-End", issuer: "Udemy", year: "2018", category: "Data Science & ML" },
  { file: "cert-r-basics.jpg",            title: "R Basics — R Programming Language Introduction",   issuer: "Udemy",              year: "2017", category: "Data Science & ML" },
  { file: "cert-r-ggplot.jpg",            title: "R, ggplot, and Simple Linear Regression",          issuer: "Udemy",              year: "2017", category: "Data Science & ML" },
  { file: "cert-r-polynomial.jpg",        title: "Polynomial Regression, R, and ggplot",             issuer: "Udemy",              year: "2017", category: "Data Science & ML" },
  { file: "cert-r-training-sets.jpg",     title: "Training Sets, Test Sets, R, and ggplot",          issuer: "Udemy",              year: "2017", category: "Data Science & ML" },

  // Other
  { file: "cert-mongodb.jpg",             title: "MongoDB — The Complete Developer's Guide",         issuer: "Udemy",              year: "2019", category: "Other" },
  { file: "cert-python-blockchain.jpg",   title: "Learn Python by Building a Blockchain & Cryptocurrency", issuer: "Udemy",        year: "2018", category: "Other" },
  { file: "cert-agile-scrum.jpg",         title: "Agile Scrum Course: Scrum Fundamentals & Certification", issuer: "Udemy",        year: "2018", category: "Other" },
  { file: "cert-chatbots-dialogflow.jpg", title: "ChatBots: Messenger ChatBot with DialogFlow & Node.js", issuer: "Udemy",         year: "2019", category: "Other" },
  { file: "cert-user-story-mapping.jpg",  title: "User Story Mapping",                               issuer: "Udemy",              year: "2021", category: "Other" },
];

const categories = ["All", ...Array.from(new Set(certs.map((c) => c.category)))];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<Cert | null>(null);

  const filtered = activeCategory === "All" ? certs : certs.filter((c) => c.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-green-400">Certifications</h1>
        <p className="text-gray-500 mb-8 text-sm uppercase tracking-widest">
          Courses, credentials &amp; achievements — {certs.length} total
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                activeCategory === cat
                  ? "border-green-400 text-green-400 bg-green-400/10"
                  : "border-gray-700 text-gray-400 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((cert) => (
            <button
              key={cert.file}
              onClick={() => setLightbox(cert)}
              className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-400/60 transition aspect-[4/3]"
            >
              <Image
                src={`/certs/${cert.file}`}
                alt={cert.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3 text-left">
                <p className="text-white text-xs font-semibold leading-tight line-clamp-2">{cert.title}</p>
                <p className="text-green-400 text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 text-gray-400 hover:text-white transition bg-black/50 rounded-full p-1"
            >
              <FiX size={20} />
            </button>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={`/certs/${lightbox.file}`}
                alt={lightbox.title}
                fill
                className="object-contain p-4"
                sizes="768px"
              />
            </div>
            <div className="px-6 py-4 border-t border-gray-800">
              <p className="text-white font-semibold">{lightbox.title}</p>
              <p className="text-green-400 text-sm mt-0.5">{lightbox.issuer} · {lightbox.year}</p>
              <p className="text-xs text-gray-600 mt-1">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
