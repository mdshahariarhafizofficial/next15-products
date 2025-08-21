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
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
          Featured Products
        </h3>
        <p className="text-gray-600 mb-12">
          Hand-picked collection of our best products just for you
        </p>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
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
                  {product.price}
                </p>
                <a
                  href={`/products/${product.id}`}
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
