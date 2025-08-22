"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function AddProductPage() {
  const { data: session, status } = useSession();

  // ✅ সব ফিল্ড তোমার data.js এর সাথে মিলিয়ে রাখা হলো
  const [form, setForm] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    image: "",
    features: "",
  });

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="animate-pulse text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 font-semibold text-lg">
          Please login to add products.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ features কে array এ convert করবো (comma separated string থেকে)
    const payload = {
      ...form,
      price: Number(form.price),
      features: form.features.split(",").map((f) => f.trim()),
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("✅ Product added successfully!");
      setForm({
        name: "",
        description: "",
        longDescription: "",
        price: "",
        image: "",
        features: "",
      });
    } else {
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 space-y-6 border"
      >
        {/* Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Product name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <input
            type="text"
            placeholder="Short description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Long Description
          </label>
          <textarea
            placeholder="Detailed description"
            rows="4"
            value={form.longDescription}
            onChange={(e) =>
              setForm({ ...form, longDescription: e.target.value })
            }
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Price</label>
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            placeholder="https://dummyimage.com/800x600/..."
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Features (comma separated)
          </label>
          <input
            type="text"
            placeholder="Intel Core i7, 16GB RAM, 512GB SSD"
            value={form.features}
            onChange={(e) => setForm({ ...form, features: e.target.value })}
            className="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Example: Intel Core i7, 16GB RAM, 512GB SSD
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full font-semibold"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}
