import React, { useState } from "react";
import {
  ExternalLink,
  Code,
  Layout,
  Wand2,
  ArrowUpRight,
  BadgeCheck,
  Server,
  ShieldCheck,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // ---------------------------------------------
  // PROJECTS DATA
  // ---------------------------------------------
  const projects = [
    {
      id: 1,
      title: "Vasundara construction",
      category: "Web",
      desc: "A futuristic shopping platform with 3D product previews and AI recommendations.",
      image: "img/vasundra.webp",
      link: "https://vasundharaconstruction.in/",
    },
    {
      id: 2,
      title: "MediGoza",
      category: "Web",
      desc: "Real-time financial analytics, charts, and visualization tools for the banking industry.",
      image: "img/medical.webp",
      link: "https://medigoza.com/",
    },
    {
      id: 3,
      title: "Shri Ram Investment",
      category: "Financial",
      desc: "Investment portfolio management and tracking system.",
      image: "img/shri ram.webp",
      link: "https://shriraminvestment.com/",
    },
    {
      id: 4,
      title: "Bioburg Lifesciences",
      category: "Pharmacy",
      desc: "Threat detection & automated firewall system using ML classification.",
      image: "img/bioburg.webp",
      link: "https://bioburglifesciences.in/",
    },
    {
      id: 5,
      title: "Lok Jansakti party",
      category: "Political",
      desc: "Decentralized social platform powered by blockchain technology.",
      image: "img/party.webp",
      link: "https://en.wikipedia.org/wiki/Lok_Janshakti_Party",
    },
    {
      id: 6,
      title: "Psynapse Global Institute",
      category: "Education",
      desc: "Award-winning personal portfolio built using GSAP animations.",
      image: "img/global.webp",
      link: "https://psynapseglobal.com",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900 min-h-screen overflow-x-hidden">
      
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-50/60 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/60 rounded-full blur-[120px] opacity-60"></div>
      </div>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative z-10 pt-40 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-200 rounded-full bg-cyan-50 shadow-sm">
            <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></span>
            <span className="text-cyan-700 text-xs font-bold tracking-[0.2em] uppercase">
              Project Archives Active
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Project Universe
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We engineer high-performance ecosystems, futuristic applications,
            and enterprise-grade platforms powering thousands of users daily.
          </p>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECT ---------------- */}
      <section className="relative z-10 container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white border border-gray-200 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Deployment
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our most advanced system: a cloud-native analytics infrastructure
              handling 2M+ daily users with lightning speed.
            </p>

            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex items-center gap-3">
                <BadgeCheck className="text-cyan-600" /> 0.005s response time
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="text-cyan-600" /> 99.9% uptime guarantee
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="text-cyan-600" /> Quantum-optimized
                caching
              </li>
            </ul>

            <button className="mt-8 px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg flex items-center gap-3 hover:bg-cyan-700 transition-all shadow-lg">
              View Case Study <ArrowUpRight />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Featured"
              className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECT STATS ---------------- */}
      <section className="relative z-10 container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Total Deployments", value: "140+" },
            { label: "Web Projects", value: "85+" },
            { label: "Mobile Apps", value: "35+" },
            { label: "AI Systems", value: "20+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <h3 className="text-4xl font-black text-cyan-600">{stat.value}</h3>
              <p className="text-gray-500 mt-2 font-bold uppercase text-xs tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FILTER BUTTONS ---------------- */}
      <section className="relative z-10 container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Web", "App", "AI"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-2 rounded-lg font-bold text-sm uppercase transition-all border ${
                activeFilter === filter
                  ? "bg-cyan-600 text-white border-cyan-600 shadow-lg"
                  : "bg-white border-gray-200 text-gray-500 hover:border-cyan-300 hover:text-cyan-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECT GRID ---------------- */}
      <section className="relative z-10 container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* UPDATED IMAGE SECTION:
                  1. h-64: Fixed Height
                  2. w-full: Full Width
                  3. object-fill: Stretches image to fit completely without space (might skew ratio slightly)
                  4. Removed padding & background
              */}
              <div className="relative h-64 overflow-hidden border-b border-gray-100">
                <img
                  src={project.image}
                  className="w-full h-full object-fill group-hover:scale-105 transition-all duration-700"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.desc}</p>

                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-800 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- WORKFLOW SECTION ---------------- */}
      <section className="relative z-10 container mx-auto px-6 mb-24 bg-gray-50 py-20 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">How We Build</h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            {
              icon: Wand2,
              title: "Planning",
              desc: "Understanding requirements & creating technical roadmap.",
            },
            {
              icon: Layout,
              title: "Design",
              desc: "Premium UI/UX crafted with precision & performance.",
            },
            {
              icon: Code,
              title: "Development",
              desc: "Writing structured, scalable & maintainable code.",
            },
            {
              icon: Server,
              title: "Deployment",
              desc: "Zero-downtime CI/CD pipelines & cloud optimization.",
            },
            {
              icon: ShieldCheck,
              title: "Security",
              desc: "Enterprise-grade encryption, monitoring & audits.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <step.icon className="mx-auto mb-4 text-cyan-600" size={32} />
              <h4 className="font-bold mb-2 text-slate-900">{step.title}</h4>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TECH MARQUEE ---------------- */}
      <section className="relative z-10 py-14 border-y border-gray-200 overflow-hidden bg-white">
        <div className="animate-scroll flex gap-24 whitespace-nowrap text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-400 opacity-50">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="uppercase select-none">
                {[
                  "React",
                  "Node",
                  "Python",
                  "AWS",
                  "Docker",
                  "Flutter",
                  "NextJS",
                  "MongoDB",
                ][i % 8]}
              </span>
            ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Want Us to Build Your Project?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
          We merge creativity, engineering & futuristic technology to deliver
          next-generation digital experiences.
        </p>

        <button className="px-10 py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
          Start Your Project
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;