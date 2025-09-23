import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar({ cart }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/Delta.png" 
            alt="DELTA Virtual Mall Logo"
            className="h-20 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-600 transition">
                Login
              </Link>
            </li>
          </ul>

          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-blue-600 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
