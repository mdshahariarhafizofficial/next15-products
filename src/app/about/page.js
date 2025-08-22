"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Website</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">Next15 Products</span>! Discover our mission, values, and the team behind this platform.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make product discovery simple and enjoyable. We aim to provide detailed, accurate, and visually appealing information about every product.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to become the go-to platform for tech enthusiasts and shoppers looking for reliable, up-to-date product information.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            width={400}  
            height={300}
            src="https://dummyimage.com/600x400/3b82f6/ffffff&text=Next15+Products"
            alt="About Website"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Product Highlights", desc: "View featured products with all essential details." },
              { title: "Secure Login", desc: "Login with Google to manage and add new products securely." },
              { title: "Responsive Design", desc: "Our platform works seamlessly on desktop and mobile." },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Shahriar Hafiz", role: "Founder & Developer", image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" },
              { name: "Alice Johnson", role: "UI/UX Designer", image: "https://i.pravatar.cc/150?img=6" },
              { name: "Bob Smith", role: "Backend Developer", image: "https://i.pravatar.cc/150?img=7" },
              { name: "Carol Lee", role: "Marketing Specialist", image: "https://i.pravatar.cc/150?img=8" },
            ].map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
                <Image
                  width={400}  
                  height={300}    
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
