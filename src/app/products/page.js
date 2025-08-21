"use client";

import Link from "next/link";

const sampleProducts = [
  {
    id: 1,
    name: "Premium Laptop",
    price: "$1299",
    description: "Powerful laptop for work and play with sleek design.",
    image: "https://dummyimage.com/400x300/3b82f6/ffffff&text=Laptop",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    price: "$899",
    description: "Stay connected with the latest smartphone technology.",
    image: "https://dummyimage.com/400x300/f59e0b/ffffff&text=Phone",
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    price: "$249",
    description: "Experience immersive sound without distractions.",
    image: "https://dummyimage.com/400x300/10b981/ffffff&text=Headphones",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "$199",
    description: "Keep track of your fitness and notifications.",
    image: "https://dummyimage.com/400x300/f43f5e/ffffff&text=Smartwatch",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-25">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <p className="text-blue-600 font-bold text-lg mb-4">{product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
