import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const distinctCount = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          ShopEase
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="text-lg font-semibold hover:text-blue-600">
            Products
          </Link>
        </div>

        {/* Mobile Hamburger + Cart */}
        <div className="flex items-center  space-x-4">
          {/* Cart Icon */}
          <Link to="/checkout" className="relative" aria-label="Go to shopping cart">
            <ShoppingCart />
            {distinctCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-2">
                {distinctCount}
              </span>
            )}
          </Link>

          {/* Hamburger Button */}
          <button className="md:hidden"  aria-label="Open navigation menu"  onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md px-6 pb-4 text-white relative z-60">
          <Link
            to="/"
            className="block py-2 text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
