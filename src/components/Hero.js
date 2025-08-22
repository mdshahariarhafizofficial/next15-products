import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-30 md:py-50  flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Discover Amazing Products
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Shop the latest and greatest items at unbeatable prices.  
            Find everything you need in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-black transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
          width={500}
          height={300}      
            src="https://i.postimg.cc/XJKcdjyp/undraw-shopping-a55o.png"
            className="rounded-2xl shadow-lg"
            alt="Shopping Illustration"
          />
        </div>
      </div>
    </section>
  );
}
