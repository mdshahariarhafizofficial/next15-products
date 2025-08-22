"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import { FiUpload } from "react-icons/fi"; // upload icon

export default function AddProductPage() {
  const { data: session, status } = useSession();

  const [form, setForm] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    image: "",
    features: "",
  });
  const [uploading, setUploading] = useState(false);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="animate-pulse text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return redirect("/login");
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=b67bab25369158e3849ad77e657e26dc`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.success) {
        setForm({ ...form, image: data.data.url });
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Image upload failed!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      toast.success(`Product added successfully!`);
      setForm({
        name: "",
        description: "",
        longDescription: "",
        price: "",
        image: "",
        features: "",
      });
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col items-center py-30 px-4">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-700 drop-shadow-lg">
        Add New Product
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-10 space-y-6 border border-gray-200 w-full max-w-3xl"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">Name</label>
          <input
            type="text"
            placeholder="Product name"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Short Description
          </label>
          <input
            type="text"
            placeholder="Short description"
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Long Description
          </label>
          <textarea
            placeholder="Detailed description"
            rows="4"
            value={form.longDescription}
            required
            onChange={(e) =>
              setForm({ ...form, longDescription: e.target.value })
            }
            className="border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">Price</label>
          <input
            type="number"
            placeholder="Price"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Product Image
          </label>

          {/* Upload card */}
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-2xl p-6 cursor-pointer hover:bg-indigo-50 transition bg-indigo-100 text-indigo-700">
            <FiUpload className="text-3xl mb-2" />
            <span className="text-sm font-medium">Click to upload image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {uploading && (
            <p className="text-sm text-gray-500 mt-2 animate-pulse">Uploading...</p>
          )}
          {form.image && (
            <Image
              src={form.image}
              width={200}
              height={130}
              alt="Preview"
              className="mt-4 w-52 rounded-2xl border shadow-md"
            />
          )}
        </div>

        {/* Features */}
        <div>
          <label className="block font-semibold text-gray-800 mb-2">
            Features (comma separated)
          </label>
          <input
            type="text"
            placeholder="Intel Core i7, 16GB RAM, 512GB SSD"
            value={form.features}
            required
            onChange={(e) => setForm({ ...form, features: e.target.value })}
            className="border border-gray-300 rounded-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <p className="text-xs text-gray-500 mt-1 italic">
            Example: Intel Core i7, 16GB RAM, 512GB SSD
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-4 rounded-2xl hover:bg-indigo-700 transition w-full font-semibold text-lg shadow-lg"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}
