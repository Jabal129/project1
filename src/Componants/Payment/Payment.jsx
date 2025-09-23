import { useState } from "react";

export default function Payment({ cart, clearCart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setTimeout(() => {
      setSuccess(true);
      clearCart();
    }, 1500);
  };

  if (success) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          Payment Successful!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Thank you, {form.name}! Your order has been placed.
        </p>
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h2>

      <div className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.length > 0 ? (
          <ul className="space-y-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-2 text-gray-700"
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold text-lg pt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
        />

        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
        />

        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={form.cardNumber}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
        />

        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={handleChange}
            required
            className="w-1/2 border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            required
            className="w-1/2 border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Pay ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}
