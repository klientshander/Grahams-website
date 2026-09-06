interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const footerColumns: Array<{
    heading: string;
    links: Array<{ name: string; href?: string; onClick?: () => void }>;
  }> = [
    {
      heading: "Shop",
      links: [
        { name: "Preserves & Jams", onClick: () => onSelectCategory("Preserves & Jams") },
        { name: "Biscuits & Cookies", onClick: () => onSelectCategory("Biscuits & Cookies") },
        { name: "Pantry Staples", onClick: () => onSelectCategory("Pantry Staples") },
        { name: "Gift Sets", onClick: () => onSelectCategory("Gift Sets") },
      ],
    },
    {
      heading: "Company",
      links: [
        { name: "Our Heritage", href: "#about" },
        { name: "The Journal", href: "#journal" },
        { name: "Find Stockists", href: "#stockists" },
        { name: "Sustainability", href: "#about" },
      ],
    },
    {
      heading: "Customer Care",
      links: [
        { name: "Free Delivery Over £45", href: "#shop" },
        { name: "Returns & Guarantees", href: "#contact" },
        { name: "Gift Wrapping Service", href: "#shop" },
        { name: "Contact Our Edinburgh Deli", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1A0A00] text-[#F5D9B8] py-16 border-t border-[#7C3813]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <p className="font-black text-2xl text-[#FFF8F0] tracking-tight">
            GRAHAM'S
          </p>
          <p
            className="text-xs leading-relaxed opacity-80"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Fine foods since 1987. Hand-stirred preserves, highland honey, and artisan biscuits from Edinburgh.
          </p>
          <p className="text-xs font-bold text-[#E8590C]">
            Enquiries: klientshandersantillan@gmail.com
          </p>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading} className="space-y-4">
            <p className="font-black text-[#FFF8F0] text-xs tracking-[0.2em] uppercase">
              {col.heading}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.name}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-xs text-left hover:text-[#FFF8F0] transition-colors opacity-80 hover:opacity-100 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href || "#"}
                      className="text-xs hover:text-[#FFF8F0] transition-colors opacity-80 hover:opacity-100"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#7C3813]/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-60">
        <p>© 2026 Graham's Fine Foods Ltd. All rights reserved.</p>
        <p>Handmade with care in Escalante City, Negros Occidental</p>
      </div>
    </footer>
  );
}

