import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopNavBar from './components/ShopNavBar';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#e8e8e8]">
        
        {/* ✅ Sticky container for both navbars */}
        <div className="sticky top-0 z-50">
          <Navbar />
          <ShopNavBar />
        </div>

        {/* ✅ Reserve 160px space for navbars */}
        <main className="flex-1">
          <Suspense
            fallback={
              // ✅ Better fallback to prevent footer LCP
              <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">
                <p className="text-lg font-semibold">Loading ShopEase...</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/category/:category" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;