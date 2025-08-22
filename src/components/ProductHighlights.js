const sampleProducts = [
  {
    "id": 1,
    "name": "Premium Laptop",
    "description": "Powerful 14\" laptop for work & play.",
    "longDescription": "This premium laptop features a fast processor, color-accurate display and all-day battery life. Ideal for developers & creators.",
    "price": 1299,
    "image": "https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    "features": [
      "Intel Core i7",
      "16GB RAM",
      "512GB SSD",
      "14\" IPS Display"
    ]
  },
  {
    "id": 2,
    "name": "Smartphone Pro",
    "description": "Flagship camera & all-day battery.",
    "longDescription": "Take stunning photos with advanced computational photography and enjoy fluid performance throughout the day.",
    "price": 899,
    "image": "https://www.trustedreviews.com/wp-content/uploads/sites/7/2025/01/Best-Android-smartphone-2025.jpg",
    "features": [
      "Triple Camera",
      "8GB RAM",
      "128GB Storage",
      "5G"
    ]
  },
  {
    "id": 3,
    "name": "Noise-Cancel Headphones",
    "description": "Immersive sound. Less noise.",
    "longDescription": "Block the world and dive into your music. Comfortable fit and crystal-clear calls with beamforming mics.",
    "price": 249,
    "image": "https://cdn.mos.cms.futurecdn.net/PJkUwt9QbceoZDkmR3eg8C.jpg",
    "features": [
      "Active NC",
      "40mm Drivers",
      "Bluetooth 5.3",
      "30h Battery"
    ]
  }
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
          Featured <span className="text-blue-600">Products</span>
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
                  ${product.price}
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
