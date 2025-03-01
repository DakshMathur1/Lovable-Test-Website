
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="relative z-10">
          <h1 className="text-xl font-medium tracking-tight">
            <span className="font-bold text-indigo-600">Alex</span> Johnson
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-indigo-700 hover:shadow-md"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-10 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span
              className={cn(
                "h-0.5 bg-gray-900 rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-gray-900 rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "opacity-0" : "w-4"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-gray-900 rounded-full transition-all duration-300 ease-out",
                mobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 mt-4 bg-indigo-600 text-white text-lg font-medium rounded-full transition-all duration-300 hover:bg-indigo-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
