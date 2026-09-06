import { useState } from "react";
import { Product } from "../types";
import { BADGE_COLORS } from "../data/mockData";

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  onQuickView: () => void;
}

export default function ProductCard({
  product,
  onAdd,
  onQuickView,
}: ProductCardProps) {
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <div
      onClick={onQuickView}
      className="group bg-[#FFF8F0] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer border border-[#F5D9B8]/40 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/4] bg-[#F5D9B8]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-black tracking-wide uppercase px-3 py-1 rounded-full shadow-sm ${
              BADGE_COLORS[product.badge]
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] text-xs font-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-md cursor-pointer"
        >
          + Quick Add
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] font-bold text-[#7C3813] tracking-wide uppercase mb-1">
          {product.subtitle}
        </p>
        <h3 className="font-black text-[#1A0A00] text-base sm:text-lg leading-snug flex-1 group-hover:text-[#E8590C] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F5D9B8]/50">
          <span className="font-black text-[#E8590C] text-lg">
            £{product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={`text-xs font-black px-4 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer ${
              added
                ? "bg-[#1A0A00] text-[#FFF8F0] scale-95"
                : "bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] active:scale-95"
            }`}
          >
            {added ? "Added ✓" : "Add to basket"}
          </button>
        </div>
      </div>
    </div>
  );
}

