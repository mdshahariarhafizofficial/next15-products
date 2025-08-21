"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function: Active link style
  const linkClass = (href) =>
    pathname === href
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 font-medium";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyBrand
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/products" className={linkClass("/products")}>
              Products
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link
              href="/login"
              className={`px-4 py-2 rounded transition ${
                pathname === "/login"
                  ? "bg-yellow-400 text-white font-semibold"
                  : "bg-blue-600 text-white hover:bg-yellow-400"
              }`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className={`block px-4 py-3 ${linkClass("/")}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`block px-4 py-3 ${linkClass("/products")}`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-3 ${linkClass("/about")}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/login"
            className={`block px-4 py-3 ${
              pathname === "/login"
                ? "text-yellow-500 font-semibold"
                : "text-blue-600 font-medium"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
