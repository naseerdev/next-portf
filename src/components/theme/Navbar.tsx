"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, name: "Home", url: "#introduction" },
  { id: 2, name: "About", url: "#profile" },
  { id: 3, name: "Experience", url: "#experience" },
  { id: 4, name: "Skills", url: "#skills" },
  { id: 5, name: "Portfolio", url: "#portfolio" },
  { id: 6, name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [position, setPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${position > 50
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#introduction")}
            className="flex items-center space-x-3"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/profile.jpg"
                alt="Naseer Ahmed"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Naseer Ahmed
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.url)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="ml-4 btn-primary-theme"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.url)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full btn-primary-theme text-center"
            >
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

