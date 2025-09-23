import { useRef, useState } from "react";
import { bestSales, categories } from "../../data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Home({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const detailRef = useRef(null);
  const categoriesRef = useRef(null);

  const handleShopNow = () => {
    categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
        };

  const handleView = (product) => {
    setSelectedProduct(product);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  };

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const amount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-24 px-6 shadow-lg mb-16" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/0d/1b/86/0d1b86e752305d383aa0671aae4abd04.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Discover Your Style</h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Trendy, comfortable, and affordable clothing for everyone.
        </p>
        <button
            onClick={handleShopNow}
            className="bg-white text-blue-600 px-8 py-3 drop-shadow-lg rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
            Shop Now
        </button>
        </section>

      {selectedProduct && (
        <section ref={detailRef} className="max-w-6xl mx-auto px-6 py-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white rounded-2xl shadow-lg p-6">
            <div>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-2xl font-semibold text-blue-600 mb-4">
                ${selectedProduct.price}
              </p>
              <p className="text-gray-700 mb-6">
                {selectedProduct.description ?? "No description available."}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-200 text-gray-700 px-5 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Best Sales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSales.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-lg mb-4 w-full h-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
              <p className="text-blue-600 font-bold text-lg mb-4">
                ${item.price}
              </p>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Add
                </button>
                <button
                  onClick={() => handleView(item)}
                  className="flex-1 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={categoriesRef} className="max-w-7xl mx-auto px-6 space-y-16">
        {Object.keys(categories).map((category) => {
  const rowRef = useRef(null);
  return (
    <div key={category} className="relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
      </div>

      <button
        onClick={() => scrollRow(rowRef, "left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={() => scrollRow(rowRef, "right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div
        ref={rowRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
      >
        {categories[category].map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg mb-3 w-full h-full object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {item.name}
            </h3>
            <p className="text-blue-600 font-bold text-lg mb-3">
              ${item.price}
            </p>
            <div className="flex gap-2 w-full">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Add
              </button>
              <button
                onClick={() => handleView(item)}
                className="flex-1 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
})}
        </section>
    </div>
  );
}