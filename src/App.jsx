import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Componants/Navbar/Navbar";
import Home from "./Componants/Home/Home";
import About from "./Componants/About/About";
import Contact from "./Componants/Contact/Contact";
import Login from "./Componants/Auth/Login";
import Register from "./Componants/Auth/Register";
import Cart from "./Componants/Cart/Cart";
import Product from "./Componants/Products/Products";
import Footer from "./Componants/Footer/Footer";
import Payment from "./Componants/Payment/Payment";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <Navbar cart={cart} />

      <main className="min-h-screen bg-gray-50 pt-24">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<Product addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/payment" element={<Payment cart={cart} clearCart={() => setCart([])} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
