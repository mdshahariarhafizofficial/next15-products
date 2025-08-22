"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BACKEND_URL = "https://next15-products-server.vercel.app";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/products`);
        const data = await res.json();
        setProducts(data.slice(0, 6)); // প্রথম 6 product দেখাবে
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 text-center">
        <p className="text-gray-600">Loading products...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
          Featured <span className="text-blue-600">Products</span>
        </h3>
        <p className="text-gray-600 mb-12">
          Hand-picked collection of our best products just for you
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id} // MongoDB ObjectId
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <Image
                width={400}
                height={300}
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h4>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-5">
                  ${product.price}
                </p>
                <Link
                  href={`/products/${product._id}`}
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
