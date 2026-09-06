import { useState, useEffect } from "react";
import { Product, CartItem } from "./types";
import { PRODUCTS } from "./data/mockData";

// Modular Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ShopSection from "./components/ShopSection";
import DeliveryBanner from "./components/DeliveryBanner";
import AboutSection from "./components/AboutSection";
import JournalSection from "./components/JournalSection";
import StockistsSection from "./components/StockistsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ProductQuickView from "./components/ProductQuickView";
import OrderSuccessModal from "./components/OrderSuccessModal";
import Toast from "./components/Toast";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("grahams_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Sync cart with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("grahams_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Lock body scroll when modals or cart drawer are open
  useEffect(() => {
    if (cartOpen || selectedProduct || orderSuccess) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cartOpen, selectedProduct, orderSuccess]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function triggerToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  }

  function addToCart(product: Product, quantity = 1) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          qty: quantity,
          img: product.img,
        },
      ];
    });
    triggerToast(`Added ${product.name} to basket`);
  }

  function updateQuantity(id: number, delta: number) {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function handleCategorySelect(catFilter: string) {
    setActiveCategory(catFilter);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleCheckout() {
    setOrderSuccess(true);
    setCartOpen(false);
    setCart([]);
  }

  function handleResetFilters() {
    setActiveCategory("All");
    setSearchQuery("");
  }

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="min-h-screen bg-[#E8590C] bg-cover bg-center bg-fixed text-[#1A0A00] selection:bg-[#1A0A00] selection:text-[#FFF8F0]"
      style={{ backgroundImage: "url('/images/grahams-background.png')" }}
    >
      {/* Toast */}
      <Toast message={toastMessage} />

      {/* Navigation */}
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <CategorySection
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* Shop Section */}
      <ShopSection
        products={filteredProducts}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onSelectCategory={setActiveCategory}
        onSearchChange={setSearchQuery}
        onAddToCart={addToCart}
        onQuickView={setSelectedProduct}
        onResetFilters={handleResetFilters}
      />

      {/* Free Delivery Banner */}
      <DeliveryBanner onShopGiftSets={() => handleCategorySelect("Gift Sets")} />

      {/* About & Heritage */}
      <AboutSection />

      {/* Journal */}
      <JournalSection />

      {/* Stockists */}
      <StockistsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Newsletter */}
      <NewsletterSection onNotify={triggerToast} />

      {/* Footer */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Order Confirmation Modal */}
      <OrderSuccessModal
        isOpen={orderSuccess}
        onClose={() => setOrderSuccess(false)}
      />
    </div>
  );
}
