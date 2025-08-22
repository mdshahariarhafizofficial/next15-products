"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BACKEND_URL = "https://next15-products-server.vercel.app";

export default function ProductDetailsPage({ params }) {
  const { id } = use(params); // Next.js থেকে id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/products/${id}`);
        if (!res.ok) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-72 bg-gray-200 rounded-xl animate-pulse" />
            <div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (notFound || !product) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            ← Back to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/products" className="text-blue-600 hover:underline">
          ← Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <Image 
              width={400}  
              height={300}
              src={product.image} 
              alt={product.name} 
              className="w-full h-80 object-cover" 
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-3">{product.longDescription}</p>

            <div className="mt-6">
              <p className="text-2xl font-bold text-blue-600">${product.price}</p>
            </div>

            {Array.isArray(product.features) && product.features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500
                         text-white font-semibold hover:opacity-90 transition"
              onClick={() => alert("Demo: Add to cart")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
