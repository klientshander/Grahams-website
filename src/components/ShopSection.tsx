import { Product } from "../types";
import { FILTER_TABS } from "../data/mockData";
import ProductCard from "./ProductCard";

interface ShopSectionProps {
  products: Product[];
  activeCategory: string;
  searchQuery: string;
  onSelectCategory: (category: string) => void;
  onSearchChange: (query: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onResetFilters: () => void;
}

export default function ShopSection({
  products,
  activeCategory,
  searchQuery,
  onSelectCategory,
  onSearchChange,
  onAddToCart,
  onQuickView,
  onResetFilters,
}: ShopSectionProps) {
  return (
    <section className="bg-[#F5D9B8] py-20" id="shop">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C] mb-1">
              From Our Pantry
            </p>
            <h2 className="text-4xl font-black text-[#1A0A00] leading-tight">
              Featured products
            </h2>
          </div>

          {/* Category tabs & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pantry..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-[#FFF8F0] text-[#1A0A00] placeholder-[#7C3813]/60 text-xs font-bold px-4 py-2.5 rounded-full pl-9 outline-none focus:ring-2 focus:ring-[#E8590C] border border-[#7C3813]/20 w-48 sm:w-56"
              />
              <svg
                className="absolute left-3 top-3 text-[#7C3813] w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => onSelectCategory(tab.value)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all duration-150 cursor-pointer ${
                    activeCategory === tab.value
                      ? "bg-[#E8590C] text-[#FFF8F0] shadow-md scale-105"
                      : "bg-[#FFF8F0] text-[#7C3813] hover:bg-[#E8590C] hover:text-[#FFF8F0]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="bg-[#FFF8F0] rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm">
            <p className="text-2xl font-black text-[#1A0A00] mb-2">
              No delicacies found
            </p>
            <p
              className="text-[#7C3813] text-sm mb-6"
              style={{ fontFamily: "'Lora', serif" }}
            >
              No products match your current search or category filter.
            </p>
            <button
              onClick={onResetFilters}
              className="bg-[#E8590C] text-[#FFF8F0] px-6 py-2.5 rounded-full text-xs font-black hover:bg-[#C44A08] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAddToCart}
                onQuickView={() => onQuickView(product)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

