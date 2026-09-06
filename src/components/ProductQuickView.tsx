import { Product } from "../types";
import { BADGE_COLORS } from "../data/mockData";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductQuickView({
  product,
  onClose,
  onAddToCart,
}: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative bg-[#FFF8F0] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 grid md:grid-cols-2 animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#FFF8F0]/80 hover:bg-[#FFF8F0] text-[#1A0A00] p-2 rounded-full shadow-md cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative h-64 md:h-full bg-[#F5D9B8]">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span
              className={`absolute top-4 left-4 text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full ${
                BADGE_COLORS[product.badge]
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
          <div>
            <p className="text-xs font-bold text-[#E8590C] uppercase tracking-wider">
              {product.category}
            </p>
            <h3 className="text-2xl font-black text-[#1A0A00] mt-1 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-[#7C3813] font-semibold mt-1">
              {product.subtitle}
            </p>

            <p
              className="text-sm text-[#7C3813] mt-4 leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {product.description}
            </p>

            <div className="mt-4 pt-4 border-t border-[#F5D9B8] space-y-2 text-xs">
              <p>
                <strong className="text-[#1A0A00]">Ingredients:</strong>{" "}
                <span className="text-[#7C3813]">{product.ingredients}</span>
              </p>
              <p>
                <strong className="text-[#1A0A00]">Origin:</strong>{" "}
                <span className="text-[#7C3813]">{product.origin}</span>
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#F5D9B8]">
            <span className="text-2xl font-black text-[#E8590C]">
              £{product.price.toFixed(2)}
            </span>
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

