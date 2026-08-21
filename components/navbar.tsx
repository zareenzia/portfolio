"use client";

import { useState } from "react";

const navItems = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESEARCH", href: "#research" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar({ name = "Zareen Zia" }: { name?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080d1f]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-[52px]">

          {/* Logo + Name — clicks scroll to top */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-md bg-[#1a1f3a] border border-[#d4af37]/60 flex items-center justify-center">
              <span className="font-mono text-[11px] font-bold text-[#d4af37] leading-none">
                {initials}
              </span>
            </div>
            <span className="font-sans text-[15px] font-bold text-[#e8e6e1] whitespace-nowrap leading-none group-hover:text-[#d4af37] transition-colors">
              {name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b7280] hover:text-[#d4af37] transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center px-4 py-2 bg-[#d4af37] text-[#080d1f] font-mono text-[11px] font-bold uppercase tracking-[0.1em] rounded-lg hover:bg-[#c9a52e] transition-colors whitespace-nowrap flex-shrink-0"
          >
            GET IN TOUCH
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-[#6b7280] hover:text-[#d4af37]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-widest text-[#6b7280] hover:text-[#d4af37] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-fit px-4 py-2 bg-[#d4af37] text-[#080d1f] font-mono text-[11px] font-bold uppercase tracking-widest rounded-lg mt-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET IN TOUCH
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
