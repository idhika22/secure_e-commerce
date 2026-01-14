import { Link } from "react-router-dom";

function ShopNavBar() {
  return (
    <nav className="bg-[#e8e8e8] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 items-center py-3">
          {/* Shop All */}
          <Link to="/products" className="flex-shrink-0 text-gray-900 font-medium">
            Shop All
          </Link>

          {/* Specific categories */}
          <Link to="/products/category/laptops" className="flex-shrink-0 hover:text-blue-600">
            Computers
          </Link>
          <Link to="/products/category/headphones" className="flex-shrink-0 hover:text-blue-600">
            Audio
          </Link>
          <Link to="/products/category/watches" className="flex-shrink-0 hover:text-blue-600">
            Watches
          </Link>
          <Link to="/products/category/television" className="flex-shrink-0 hover:text-blue-600">
            Home Cinema
          </Link>
          <Link to="/products/category/camera" className="flex-shrink-0 hover:text-blue-600">
            Camera
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default ShopNavBar;
