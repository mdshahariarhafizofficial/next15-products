import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Next15 <span className="text-blue-500">Products</span>
          </h2>
          <p className="text-gray-400">
            Your one-stop shop for all your needs.  
            Quality products, trusted service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
            <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-500 transition">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-sky-400 transition">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-pink-500 transition">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Next15 Products.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
