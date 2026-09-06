import { useState, useEffect } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Stockists", href: "#stockists" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A0A00]/85 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#F5D9B8] transition-colors drop-shadow-sm"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            SHANDER'S
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-white/90 uppercase -mt-0.5">
            Fine Foods
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-white hover:text-[#F5D9B8] transition-colors duration-150 tracking-wide drop-shadow-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 bg-white hover:bg-[#F5D9B8] text-[#1A0A00] px-5 py-2.5 rounded-full font-black text-sm shadow-lg transition-all duration-150 active:scale-95 cursor-pointer"
            aria-label="Open basket"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Basket</span>
            {cartCount > 0 && (
              <span className="bg-[#1A0A00] text-white text-xs font-black min-w-5 h-5 px-1 rounded-full flex items-center justify-center ml-0.5">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-black/20 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A0A00]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-white/10 animate-fade-in shadow-2xl mt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#F5D9B8] font-bold text-base tracking-wide py-1 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
