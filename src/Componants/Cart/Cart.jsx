import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((_, index) => index !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-full object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-2xl font-bold text-blue-600">${total}</p>
          </div>

          <Link
            to="/payment"
            className="block text-center w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Payment
          </Link>
        </div>
      )}
    </div>
  );
}
