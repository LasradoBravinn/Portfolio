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
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());

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

      // Intersection observer for scroll animations
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            setVisibleSections((prev) => new Set([...prev, section]));
          }
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      handleMobileMenuClose();
    }
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
    }, 300); // Match animation duration
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      handleMobileMenuClose();
    } else {
      setIsMobileMenuOpen(true);
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

        /* Remove old glass styles - now inline in component */

        .card {
          background: ${isDark
          ? "rgba(15, 31, 24, 0.6)"
          : "rgba(255, 255, 255, 0.9)"};
          border: 1px solid
            ${isDark ? "rgba(52, 211, 153, 0.1)" : "rgba(34, 197, 94, 0.1)"};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover {
          border-color: ${isDark
          ? "rgba(52, 211, 153, 0.3)"
          : "rgba(34, 197, 94, 0.3)"};
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px
            ${isDark ? "rgba(52, 211, 153, 0.15)" : "rgba(34, 197, 94, 0.2)"};
        }

        .text-gradient {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
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

        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-5px) translateX(-10px);
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

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes slideInStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: floatSlow 10s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out forwards;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            ${isDark ? "rgba(52, 211, 153, 0.1)" : "rgba(34, 197, 94, 0.1)"},
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slideInStagger {
          animation: slideInStagger 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }

        .section-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-hidden {
          opacity: 0;
          transform: translateY(30px);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px
            ${isDark ? "rgba(52, 211, 153, 0.3)" : "rgba(34, 197, 94, 0.3)"};
        }

        /* Nav styles moved inline for better control */

        /* Mobile menu animations handled inline */

        .cursor-glow {
          pointer-events: none;
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            ${isDark ? "rgba(52, 211, 153, 0.08)" : "rgba(34, 197, 94, 0.05)"}
              0%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stagger-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Cursor Glow Effect */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-emerald-500/20 animate-floatSlow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-green-500/20 animate-floatSlow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl bg-teal-500/10 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Modern Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 ${
            isScrolled
              ? isDark
                ? "bg-[#0a1811]/80 backdrop-blur-2xl border border-emerald-500/10 shadow-2xl shadow-emerald-500/5"
                : "bg-white/80 backdrop-blur-2xl border border-green-500/10 shadow-2xl shadow-green-500/5"
              : isDark
                ? "bg-[#0a1811]/40 backdrop-blur-xl border border-white/5"
                : "bg-white/40 backdrop-blur-xl border border-slate-200/50"
          } rounded-2xl`}
        >
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo with Animated Ring */}
            <div
              className="flex items-center gap-3 group cursor-pointer opacity-0 animate-fadeInDown delay-100 relative"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative">
                {/* Animated Ring */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    isDark
                      ? "bg-gradient-to-br from-emerald-400 to-green-500 opacity-20 group-hover:opacity-40 blur-md"
                      : "bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 group-hover:opacity-40 blur-md"
                  } group-hover:scale-125`}
                />
                <div
                  className={`relative w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 overflow-hidden ${
                    isDark
                      ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white"
                      : "bg-gradient-to-br from-green-600 to-emerald-600 text-white"
                  }`}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">BL</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div
                  className={`text-base font-bold tracking-tight transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Bravin Lasrado
                </div>
                <div
                  className={`text-xs font-medium ${
                    isDark ? "text-emerald-400/70" : "text-green-600/70"
                  }`}
                >
                  Full Stack Developer
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Pill Style */}
            <div
              className={`hidden lg:flex items-center gap-1 p-1.5 rounded-xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-slate-100/50 border border-slate-200/50"
              }`}
            >
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg opacity-0 animate-fadeInDown ${
                    activeSection === item.toLowerCase()
                      ? isDark
                        ? "text-white"
                        : "text-slate-900"
                      : isDark
                        ? "text-slate-400 hover:text-emerald-400"
                        : "text-slate-600 hover:text-green-600"
                  }`}
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                >
                  {/* Active Background */}
                  {activeSection === item.toLowerCase() && (
                    <div
                      className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                        isDark
                          ? "bg-gradient-to-br from-emerald-500/20 to-green-600/20 border border-emerald-500/30"
                          : "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
                      }`}
                    />
                  )}
                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                      isDark ? "bg-white/5" : "bg-slate-200/50"
                    }`}
                  />
                  <span className="relative">{item}</span>
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 opacity-0 animate-fadeInDown delay-400">
              {/* Theme Toggle - Refined */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden group ${
                  isDark
                    ? "text-slate-300 hover:text-emerald-400"
                    : "text-slate-600 hover:text-green-600"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? "bg-white/5" : "bg-slate-100"
                  }`}
                />
                <div className="relative transition-transform duration-300 group-hover:rotate-180">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </div>
              </button>

              {/* CTA Button - Modern Gradient */}
              <a
                href="mailto:bravinlasrado.dev@gmail.com"
                className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20"
                }`}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Let's Talk</span>
                <ArrowRight
                  size={16}
                  className="relative group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Mobile Menu Button - Enhanced */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  isDark
                    ? "text-slate-300 hover:text-emerald-400"
                    : "text-slate-600 hover:text-green-600"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? "bg-white/5" : "bg-slate-100"
                  }`}
                />
                <div className="relative">
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Redesigned */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 rounded-2xl overflow-hidden ${
              isMobileMenuClosing ? "animate-slideUp" : "animate-slideDown"
            } ${
              isDark
                ? "bg-[#0a1811]/95 backdrop-blur-2xl border border-emerald-500/10"
                : "bg-white/95 backdrop-blur-2xl border border-green-500/10"
            }`}
          >
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    isMobileMenuClosing ? "animate-fadeOut" : "animate-fadeInUp"
                  } relative overflow-hidden group ${
                    activeSection === item.toLowerCase()
                      ? isDark
                        ? "bg-gradient-to-r from-emerald-500/20 to-green-600/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 border border-green-500/30"
                      : isDark
                        ? "text-slate-300 hover:bg-white/5 border border-transparent"
                        : "text-slate-600 hover:bg-slate-100 border border-transparent"
                  }`}
                  style={{
                    animationDelay: isMobileMenuClosing
                      ? "0ms"
                      : `${index * 50}ms`,
                  }}
                >
                  <span className="relative">{item}</span>
                </button>
              ))}
              <a
                href="mailto:bravinlasrado.dev@gmail.com"
                className={`flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-bold transition-all duration-300 mt-4 ${
                  isMobileMenuClosing ? "animate-fadeOut" : "animate-fadeInUp"
                } relative overflow-hidden group ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/20"
                }`}
                style={{
                  animationDelay: isMobileMenuClosing ? "0ms" : "300ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Let's Talk</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-27 relative"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="opacity-0 animate-fadeInLeft delay-200 mb-6 w-full">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-4 text-center ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Bravin Lasrado
              </h1>
              <p className="text-2xl md:text-3xl text-gradient font-semibold text-center">
                Full Stack Developer
              </p>
            </div>

            <div className="opacity-0 animate-fadeInLeft delay-300 mb-10 w-full">
              <p
                className={`text-lg md:text-xl leading-relaxed text-center ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                Passionate about building clean, intuitive, and visually
                polished web experiences. I specialize in React, Next.js, and
                modern UI design, transforming ideas into fast, accessible, and
                production-ready interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fadeInLeft delay-400 mb-10 justify-center w-full">
              <button
                onClick={() => scrollToSection("projects")}
                className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover-glow flex items-center gap-2 ${isDark
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-emerald-500/30"
                  : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/30"
                  }`}
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 hover-lift ${isDark ? "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10" : "border-green-500/30 text-green-600 hover:bg-green-50"}`}
              >
                Get in Touch
              </button>
            </div>

            <div className="flex gap-6 opacity-0 animate-fadeInLeft delay-500 justify-center">
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
                  className={`p-3 rounded-lg transition-all duration-300 hover-lift hover-glow ${isDark ? "text-slate-400 hover:text-emerald-400 hover:bg-white/5" : "text-slate-600 hover:text-green-600 hover:bg-green-50"}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center opacity-0 animate-scaleIn delay-300 order-1 md:order-2 relative mt-8 md:mt-0">
            <div
              className={`absolute w-56 h-56 md:w-80 md:h-80 rounded-full ${isDark ? "bg-emerald-500/20" : "bg-green-500/10"} blur-3xl animate-pulse`}
            ></div>
            <div
              className={`relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${isDark ? "border-emerald-500" : "border-green-600"} shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-3`}
              style={{
                boxShadow: isDark
                  ? "0 0 60px 20px rgba(16, 185, 129, 0.3)"
                  : "0 0 60px 20px rgba(22, 163, 74, 0.2)",
              }}
            >
              <img
                src="/profile.jpeg"
                alt="Bravin Lasrado"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`pt-10 py-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${visibleSections.has("about") ? "section-visible" : "section-hidden"}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp delay-100">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              About Me
            </h2>
            <div
              className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600" : "bg-gradient-to-r from-green-600 to-emerald-600"}`}
            />
          </div>

          <div className="card rounded-2xl p-8 md:p-12 shadow-xl opacity-0 animate-scaleIn delay-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="opacity-0 animate-fadeInLeft delay-300">
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
                    className={`flex items-center gap-3 w-full p-3 sm:p-4 rounded-xl backdrop-blur-lg border opacity-0 animate-fadeInRight hover-lift ${isDark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}
                    style={{ animationDelay: `${400 + idx * 100}ms` }}
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
                  className={`mt-3 w-full px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-lg cursor-pointer opacity-0 animate-fadeInRight delay-700 hover-lift hover-glow ${isDark
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
      <section
        id="education"
        className={`pt-10 py-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${visibleSections.has("education") ? "section-visible" : "section-hidden"}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp delay-100">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Education & Certifications
            </h2>
            <div
              className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600" : "bg-gradient-to-r from-green-600 to-emerald-600"}`}
            />
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="card rounded-2xl p-8 shadow-xl opacity-0 animate-slideInStagger"
                style={{ animationDelay: `${200 + idx * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-4 rounded-xl transition-all duration-300 hover-lift ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
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

            <div className="card rounded-2xl p-8 shadow-xl opacity-0 animate-scaleIn delay-500">
              <h3
                className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl transition-all duration-300 hover-lift hover-glow ${isDark ? "bg-white/5" : "bg-slate-50"}`}
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
      <section
        id="projects"
        className={`pt-10 py-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${visibleSections.has("projects") ? "section-visible" : "section-hidden"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp delay-100">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              My Projects
            </h2>
            <div
              className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600" : "bg-gradient-to-r from-green-600 to-emerald-600"}`}
            />
          </div>
        </div>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="card rounded-2xl p-6 shadow-lg w-full max-w-sm opacity-0 animate-scaleIn group"
                style={{ animationDelay: `${200 + idx * 150}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${isDark ? "bg-gradient-to-br from-emerald-500 to-green-600" : "bg-gradient-to-br from-green-500 to-emerald-600"}`}
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
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover-lift ${isDark ? "bg-white/5 text-slate-300 border border-white/10" : "bg-slate-100 text-slate-600 border border-slate-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className={`flex items-center gap-2 font-semibold transition-all duration-200 hover-lift group/link ${isDark ? "text-emerald-400 hover:text-emerald-300" : "text-green-600 hover:text-green-500"}`}
                  >
                    <ExternalLink size={18} />
                    <span className="relative">
                      Live
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`pt-10 py-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${visibleSections.has("skills") ? "section-visible" : "section-hidden"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp delay-100">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Skills & Technologies
            </h2>
            <div
              className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600" : "bg-gradient-to-r from-green-600 to-emerald-600"}`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Code2, title: "Frontend", items: skills.frontend },
              { Icon: Database, title: "Backend", items: skills.backend },
              { Icon: Terminal, title: "Tools", items: skills.tools },
            ].map(({ Icon, title, items }, idx) => (
              <div
                key={idx}
                className="card rounded-2xl p-8 shadow-xl opacity-0 animate-scaleIn"
                style={{ animationDelay: `${200 + idx * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 hover-lift ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
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
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-110 hover-glow cursor-default ${isDark ? "bg-white/5 text-slate-300 hover:bg-white/10" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
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
      <section
        id="contact"
        className={`pt-10 py-20 px-4 sm:px-6 lg:px-8 relative transition-all duration-1000 ${visibleSections.has("contact") ? "section-visible" : "section-hidden"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 opacity-0 animate-fadeInUp delay-100">
            <h2
              className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Let's Work Together
            </h2>
            <div
              className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600" : "bg-gradient-to-r from-green-600 to-emerald-600"}`}
            />
          </div>

          <div className="mb-12 opacity-0 animate-fadeInUp delay-200">
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              I'm always open to discussing new projects, collaborations, and
              opportunities. If you'd like to work together or just connect,
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
                className="card rounded-2xl p-8 shadow-lg opacity-0 animate-scaleIn group"
                style={{ animationDelay: `${300 + idx * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${isDark ? "bg-emerald-500/10" : "bg-green-50"}`}
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
            className={`inline-flex items-center gap-3 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg opacity-0 animate-fadeInUp delay-600 hover-glow ${isDark ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:shadow-emerald-500/30" : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/30"}`}
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
            className={`flex flex-col md:flex-row justify-between items-center gap-4 p-6 rounded-xl transition-all duration-300 hover-lift ${isDark ? "bg-white/5" : "bg-white"}`}
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
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover-lift relative group ${isDark ? "text-slate-400 hover:text-emerald-400 hover:bg-white/5" : "text-slate-600 hover:text-green-600 hover:bg-slate-50"}`}
                >
                  {name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}