import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  onClose: () => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  cart,
  cartCount,
  cartTotal,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <aside className="relative w-full max-w-md bg-[#FFF8F0] h-full flex flex-col shadow-2xl z-10 animate-slide-left">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#F5D9B8]">
          <div className="flex items-center gap-2">
            <h2 className="font-black text-xl text-[#1A0A00]">Your Basket</h2>
            <span className="text-xs font-bold bg-[#E8590C] text-[#FFF8F0] px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#7C3813] hover:text-[#1A0A00] p-2 hover:bg-[#F5D9B8]/50 rounded-full transition-colors cursor-pointer"
            aria-label="Close basket"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 opacity-75 py-12">
              <div className="w-16 h-16 rounded-full bg-[#F5D9B8] flex items-center justify-center text-[#E8590C]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div>
                <p className="font-black text-lg text-[#1A0A00]">
                  Your basket is empty
                </p>
                <p
                  className="text-sm text-[#7C3813] mt-1"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Explore our preserves, biscuits, and pantry provisions to get started.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-[#E8590C] text-[#FFF8F0] px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider hover:bg-[#C44A08] transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-[#F5D9B8]/40 border border-[#F5D9B8] rounded-2xl p-3"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-[#1A0A00] truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-[#7C3813] truncate font-medium">
                    {item.subtitle}
                  </p>
                  <p className="font-black text-[#E8590C] text-sm mt-1">
                    ₱{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-[#FFF8F0] rounded-full border border-[#7C3813]/20 px-1 py-0.5">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-6 h-6 flex items-center justify-center text-[#7C3813] hover:text-[#1A0A00] font-black text-xs cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-5 text-center text-xs font-black text-[#1A0A00]">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-6 h-6 flex items-center justify-center text-[#7C3813] hover:text-[#1A0A00] font-black text-xs cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-[#7C3813]/60 hover:text-red-600 p-1.5 transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[#F5D9B8] space-y-4 bg-[#FFF8F0]">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#7C3813]">
                <span>Shipping</span>
                <span>{cartTotal >= 45 ? "FREE" : "₱4.50"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#7C3813] text-sm">Subtotal</span>
                <span className="font-black text-[#1A0A00] text-xl">
                  ₱{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            {cartTotal < 45 ? (
              <div className="text-xs text-[#E8590C] font-bold bg-[#E8590C]/10 rounded-xl px-4 py-2.5 flex items-center gap-2">
                <span>💡</span>
                <span>
                  Add ₱{(45 - cartTotal).toFixed(2)} more for free UK delivery!
                </span>
              </div>
            ) : (
              <div className="text-xs text-green-800 font-bold bg-green-100 rounded-xl px-4 py-2.5 flex items-center gap-2">
                <span>✓</span>
                <span>You've qualified for free standard UK delivery!</span>
              </div>
            )}

            <button
              onClick={onCheckout}
              className="w-full bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] py-4 rounded-full font-black text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
            >
              Proceed to Checkout · ₱
              {(cartTotal + (cartTotal >= 45 ? 0 : 4.5)).toFixed(2)}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

