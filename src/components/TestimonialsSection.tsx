const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Bristol",
    text: "The Seville marmalade is genuinely the best I've ever had. I order six jars at a time so I never run out in our breakfast room.",
    rating: 5,
  },
  {
    name: "Tom & Felicity R.",
    location: "Edinburgh",
    text: "Graham's has been our Christmas hamper go-to for eight years. The quality never wavers. Utterly reliable Scottish craftsmanship.",
    rating: 5,
  },
  {
    name: "James C.",
    location: "London",
    text: "The wildflower honey goes on everything. Moved here from New Zealand and this is the first British honey that truly impressed me.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-black tracking-[0.25em] uppercase text-[#1A0A00] mb-2 text-center">
          What people say
        </p>
        <h2 className="text-4xl font-black text-[#FFF8F0] text-center mb-12">
          Loved by kitchens<br className="hidden md:block" /> across Britain.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#C44A08]/90 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-xl border border-[#FFF8F0]/20"
            >
              <div className="flex gap-1 text-[#F5D9B8] text-lg">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p
                className="text-[#FFF8F0] font-medium text-sm leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                "{t.text}"
              </p>
              <div>
                <p className="text-[#FFF8F0] font-black text-sm">{t.name}</p>
                <p className="text-[#F5D9B8] text-xs font-semibold">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
