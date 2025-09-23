import { useParams, useLocation, Link } from "react-router-dom";
import { allProducts } from "../../data/products";
import { useState } from "react";

export default function Product({ addToCart }) {
  const { id } = useParams();
  const location = useLocation();

  const initialProduct = location.state ?? allProducts.find((p) => String(p.id) === String(id));
  const [product] = useState(initialProduct);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600">Product not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">Back to shop</Link>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes[1] || "M");

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={product.img} alt={product.name} className="w-full h-96 object-cover rounded-md" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description ?? "No description available."}</p>

          <div className="mb-6">
            <h4 className="font-medium mb-2">Size</h4>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-2 border rounded-md ${selectedSize === s ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart({ ...product, selectedSize })}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              View Cart
            </Link>
          </div>

          <div className="mt-8">
            <Link to="/" className="text-blue-600 hover:underline">← Back to shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
