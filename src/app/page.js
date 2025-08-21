export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Next15 Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Explore our collection of amazing products. Login to manage and add your own!
        </p>
        <a
          href="/products"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Products
        </a>
      </section>

      {/* Product Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="border p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Product One</h3>
            <p className="text-gray-600">Short description goes here.</p>
            <p className="mt-3 font-semibold">$20</p>
          </div>
          {/* Product Card 2 */}
          <div className="border p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Product Two</h3>
            <p className="text-gray-600">Short description goes here.</p>
            <p className="mt-3 font-semibold">$30</p>
          </div>
          {/* Product Card 3 */}
          <div className="border p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Product Three</h3>
            <p className="text-gray-600">Short description goes here.</p>
            <p className="mt-3 font-semibold">$40</p>
          </div>
        </div>
      </section>
    </main>
  );
}
