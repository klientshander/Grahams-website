interface DeliveryBannerProps {
  onShopGiftSets: () => void;
}

export default function DeliveryBanner({ onShopGiftSets }: DeliveryBannerProps) {
  return (
    <section className="bg-[#1A0A00] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#E8590C] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#E8590C] blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C]">
            Free UK Delivery
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#FFF8F0] leading-tight">
            Orders over <span className="text-[#E8590C]">₱45</span> ship complimentary.
          </h2>
          <p
            className="text-[#F5D9B8] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Hand-packed in sustainable wood wool with custom wax seal accents. Gift messages and next-day UK courier dispatch available at checkout.
          </p>
          <div className="pt-2">
            <button
              onClick={onShopGiftSets}
              className="inline-block bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] px-8 py-4 rounded-full font-black text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Shop Gift Sets & Hampers
            </button>
          </div>
        </div>
        <div className="relative h-72 sm:h-80">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=700&h=450&fit=crop&auto=format"
            alt="Graham's gift hamper with jars and preserves"
            className="w-full h-full object-cover rounded-3xl border-4 border-[#E8590C]/30 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

