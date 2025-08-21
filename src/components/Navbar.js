"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
            <span className="text-black">Next15</span> Products
        </h1>

        <div className="space-x-6">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
            } hover:text-blue-600`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${
              pathname.startsWith("/products")
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Products
          </Link>
          <Link
            href="/login"
            className={`${
              pathname === "/login"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
