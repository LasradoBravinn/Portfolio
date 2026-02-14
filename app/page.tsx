"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Code2,
  Database,
  Terminal,
  GraduationCap,
  MapPin,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "education",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "ResQNet",
      description:
        "A real-time emergency response system that connects patients, hospitals, and authorities to speed up coordination and reduce response time during road accidents.",
      tags: ["React", "TypeScript", "PostgreSQL", "SupaBase", "Real-Time"],
      live: "https://kenet.vercel.app/user",
    },
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "VSCode", "Figma", "Linux", "Power-BI"],
  };

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "St Aloysius University, Mangalore",
    },
    {
      degree: "12th Grade",
      institution: "St Philomena Pre-University College, Puttur",
    },
  ];

  const certifications = [{ name: "Full Stack Web Development", year: "2024" }];

  const navItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-gradient-to-br from-[#0a1811] via-[#0f1f18] to-[#081410]" : "bg-gradient-to-br from-slate-50 via-green-50 to-slate-100"} transition-colors duration-500 relative overflow-hidden`}
    >
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        .glass {
          background: ${isDark
          ? "rgba(10, 24, 17, 0.8)"
          : "rgba(255, 255, 255, 0.8)"};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid
            ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)"};
        }

        .glass-scrolled {
          background: ${isDark
          ? "rgba(10, 24, 17, 0.95)"
          : "rgba(255, 255, 255, 0.95)"};
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: ${isDark
          ? "0 4px 24px rgba(0, 0, 0, 0.3)"
          : "0 4px 24px rgba(0, 0, 0, 0.08)"};
        }

        .card {
          background: ${isDark
          ? "rgba(15, 31, 24, 0.6)"
          : "rgba(255, 255, 255, 0.9)"};
          border: 1px solid
            ${isDark ? "rgba(52, 211, 153, 0.1)" : "rgba(34, 197, 94, 0.1)"};
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: ${isDark
          ? "rgba(52, 211, 153, 0.3)"
          : "rgba(34, 197, 94, 0.3)"};
          transform: translateY(-4px);
          box-shadow: 0 12px 40px
            ${isDark ? "rgba(52, 211, 153, 0.1)" : "rgba(34, 197, 94, 0.15)"};
        }

        .text-gradient {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: ${isDark
          ? "linear-gradient(90deg, #34d399, #10b981)"
          : "linear-gradient(90deg, #22c55e, #16a34a)"};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px 2px 0 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        @media (max-width: 768px) {
          .mobile-menu {
            animation: slideDown 0.3s ease-out forwards;
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-emerald-500/20 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-green-500/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Modern Professional Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-scrolled" : "glass"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${isDark
                  ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30"
                  : "bg-gradient-to-br from-green-600 to-emerald-600 text-white group-hover:shadow-lg group-hover:shadow-green-500/30"
                  }`}
              >
                BL
              </div>
              <span
                className={`text-lg font-semibold hidden sm:block transition-colors ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Bravin Lasrado
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 relative">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${activeSection === item.toLowerCase()
                    ? isDark
                      ? "text-emerald-400"
                      : "text-green-600"
                    : isDark
                      ? "text-slate-300 hover:text-emerald-400"
                      : "text-slate-600 hover:text-green-600"
                    }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDark ? "bg-emerald-400" : "bg-green-600"} rounded-full`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-lg transition-all duration-200 ${isDark
                  ? "text-slate-300 hover:bg-white/5 hover:text-emerald-400"
                  : "text-slate-700 hover:bg-slate-100 hover:text-green-600"
                  }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CTA Button - Hidden on mobile */}
              <a
                href="mailto:bravinlasrado.dev@gmail.com"
                className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${isDark
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-lg hover:shadow-emerald-500/30"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/30"
                  }`}
              >
                Let&apos;s Talk
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-lg transition-all duration-200 ${isDark
                  ? "text-slate-300 hover:bg-white/5"
                  : "text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mobile-menu border-t ${isDark ? "border-white/10 bg-[#0a1811]/95" : "border-slate-200 bg-white/95"} backdrop-blur-xl`}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === item.toLowerCase()
                    ? isDark
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-green-500/10 text-green-600"
                    : isDark
                      ? "text-slate-300 hover:bg-white/5"
                      : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="mailto:bravinlasrado.dev@gmail.com"
                className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 mt-4 ${isDark
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  }`}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-22 relative"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="opacity-0 animate-fadeInUp delay-100 mb-6 w-full">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-4 text-center ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Bravin Lasrado
              </h1>
              <p className="text-2xl md:text-3xl text-gradient font-semibold text-center">
                Full Stack Developer
              </p>
            </div>

            <div className="opacity-0 animate-fadeInUp delay-200 mb-10 w-full">
              <p
                className={`text-lg md:text-xl leading-relaxed text-center ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                Passionate about building clean, intuitive, and visually
                polished web experiences. I specialize in React, Next.js, and
                modern UI design, transforming ideas into fast, accessible, and
                production-ready interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fadeInUp delay-300 mb-10 justify-center w-full">
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${isDark
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-emerald-500/30"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/30"
                  }`}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${isDark ? "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" : "border-green-500/30 text-green-600 hover:bg-green-50"}`}
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-6 opacity-0 animate-fadeInUp delay-400 justify-center">
              {[
                { Icon: Github, href: "https://github.com/LasradoBravinn" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/bravin-lasrado-74b239293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                { Icon: Mail, href: "mailto:bravinlasrado.dev@gmail.com" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`p-3 rounded-lg transition-all duration-200 ${isDark ? "text-slate-400 hover:text-emerald-400 hover:bg-white/5" : "text-slate-600 hover:text-green-600 hover:bg-green-50"}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center opacity-0 animate-scaleIn order-1 md:order-2 relative mt-8 md:mt-0">
            <div
              className={`absolute w-56 h-56 md:w-80 md:h-80 rounded-full ${isDark ? "bg-emerald-500/20" : "bg-green-500/10"} blur-3xl`}
            ></div>
            <div
              className={`relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isDark ? "border-emerald-500" : "border-green-600"} shadow-2xl`}
              style={{
                boxShadow: isDark
                  ? "0 0 60px 20px rgba(16, 185, 129, 0.3)"
                  : "0 0 60px 20px rgba(22, 163, 74, 0.2)",
              }}
            >
              <img
                src="/profile.jpeg"
                alt="Bravin Lasrado"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-10 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              About Me
            </h2>
          </div>

          <div className="card rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className={`text-lg leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Full Stack Developer specializing in frontend engineering and
                  modern web experiences. I work across React, Next.js, Node.js,
                  and cloud infrastructure, with a strong focus on design
                  quality, performance, and usability. I enjoy building clean,
                  intuitive products that feel as good as they function.
                </p>
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  When I'm not coding, you'll find me exploring new technologies
                  and experimenting with personal projects. I spend time
                  improving my Designing skills, and building interfaces that
                  are visually polished.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:gap-4 w-full">
                {[
                  { Icon: MapPin, text: "Mangalore, India" },
                  { Icon: Mail, text: "bravinlasrado.dev@gmail.com" },
                  { Icon: Code2, text: "Available for Opportunities" },
                ].map(({ Icon, text }, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 w-full p-3 sm:p-4 rounded-xl backdrop-blur-lg border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
                  >
                    <Icon
                      size={20}
                      className={`shrink-0 ${isDark ? "text-emerald-400" : "text-green-600"}`}
                    />
                    <span
                      className={`text-sm sm:text-base break-words ${isDark ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {text}
                    </span>
                  </div>
                ))}

                <a
                  href="/cv.jpg"
                  download="Bravin_Lasrado_Resume.jpg"
                  className={`mt-3 w-full px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-lg cursor-pointer ${isDark
                    ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                    : "bg-green-50 text-green-600 hover:bg-green-100"
                    }`}
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="pt-10 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Education & Certifications
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="card rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
                  >
                    <GraduationCap
                      size={32}
                      className={isDark ? "text-emerald-400" : "text-green-600"}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-lg mb-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="card rounded-2xl p-8 shadow-xl">
              <h3
                className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl ${isDark ? "bg-white/5" : "bg-slate-50"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${isDark ? "bg-emerald-500/10" : "bg-green-100"}`}
                      >
                        <Check
                          size={20}
                          className={
                            isDark ? "text-emerald-400" : "text-green-600"
                          }
                        />
                      </div>
                      <div>
                        <p
                          className={`font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          {cert.name}
                        </p>
                        <p
                          className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                        >
                          {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-10 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              My Projects
            </h2>
          </div>
        </div>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="card rounded-2xl p-6 shadow-lg w-full max-w-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-gradient-to-br from-green-500 to-emerald-600"}`}
                >
                  <Code2 className="text-white" size={24} />
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${isDark ? "bg-white/5 text-slate-300 border border-white/10" : "bg-slate-100 text-slate-600 border border-slate-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className={`flex items-center gap-2 font-semibold transition-all duration-200 ${isDark ? "text-emerald-400 hover:text-emerald-300" : "text-green-600 hover:text-green-500"}`}
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-10 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Code2, title: "Frontend", items: skills.frontend },
              { Icon: Database, title: "Backend", items: skills.backend },
              { Icon: Terminal, title: "Tools", items: skills.tools },
            ].map(({ Icon, title, items }, idx) => (
              <div key={idx} className="card rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
                  >
                    <Icon
                      size={28}
                      className={isDark ? "text-emerald-400" : "text-green-600"}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${isDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-10 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Let&apos;s Work Together
            </h2>
          </div>

          <div className="mb-12">
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              I&apos;m always open to discussing new projects, collaborations, and
              opportunities. If you&apos;d like to work together or just connect,
              feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                Icon: Mail,
                title: "Email",
                text: "bravinlasrado.dev@gmail.com",
                href: "mailto:bravinlasrado.dev@gmail.com",
              },
              {
                Icon: Linkedin,
                title: "LinkedIn",
                text: "Connect with me",
                href: "https://www.linkedin.com/in/bravin-lasrado-74b239293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                Icon: Github,
                title: "GitHub",
                text: "View my code",
                href: "https://github.com/LasradoBravinn",
              },
            ].map(({ Icon, title, text, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="card rounded-2xl p-8 shadow-lg"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
                >
                  <Icon
                    size={32}
                    className={isDark ? "text-emerald-400" : "text-green-600"}
                  />
                </div>
                <h3
                  className={`font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {text}
                </p>
              </a>
            ))}
          </div>

          <a
            href="mailto:bravinlasrado.dev@gmail.com"
            className={`inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-emerald-500/30" : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/30"}`}
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-8 px-4 sm:px-6 lg:px-8 ${isDark ? "border-white/10" : "border-slate-200"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 p-6 rounded-xl ${isDark ? "bg-white/5" : "bg-white"}`}
          >
            <p className={isDark ? "text-slate-400" : "text-slate-600"}>
              © 2024 Bravin Lasrado.
            </p>

            <div className="flex gap-4">
              {[
                { name: "GitHub", href: "https://github.com/LasradoBravinn" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/bravin-lasrado-74b239293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                { name: "Email", href: "mailto:bravinlasrado.dev@gmail.com" },
              ].map(({ name, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${isDark ? "text-slate-400 hover:text-emerald-400 hover:bg-white/5" : "text-slate-600 hover:text-green-600 hover:bg-slate-50"}`}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}