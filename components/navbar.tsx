"use client";

import { useState } from "react";
import { Container } from "./primitives";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar({ name = "[YOUR NAME]" }: { name?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-bg/95 backdrop-blur-sm border-b border-primary-surface z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary-accent/20 border border-primary-accent/40 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-primary-accent">
                A
              </span>
            </div>
            <span className="font-mono text-sm font-semibold text-primary-text hidden sm:inline">
              {name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-primary-muted hover:text-primary-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block px-4 py-2 text-xs font-mono font-semibold uppercase tracking-widest bg-primary-accent text-primary-bg rounded border border-primary-accent hover:bg-primary-accent/90 transition-colors">
            GET IN TOUCH
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary-surface rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-primary-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary-surface py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-widest text-primary-muted hover:text-primary-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full px-4 py-2 text-xs font-mono font-semibold uppercase tracking-widest bg-primary-accent text-primary-bg rounded border border-primary-accent hover:bg-primary-accent/90 transition-colors mt-2">
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
