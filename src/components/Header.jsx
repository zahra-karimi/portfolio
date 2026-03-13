"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll section highlight
  useEffect(() => {
    const sections = ["about", "projects", "journey", "skills", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      // Section highlight
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(sec);
          }
        }
      }

      // Shadow effect
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "journey", label: "My Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={
        "fixed w-full py-3 px-6 top-0 left-0 z-50 bg-white section-primary shadow-md relative"
      }
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        <a href="#" className="text-2xl text-purple-400">
          Z.K | Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : "text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                setMobileOpen(false);
              }}
              className={`block hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : "text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
