export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 z-10 pt-4 sm:pt-8">
            <div className="inline-block bg-white text-[#E8590C] text-[11px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-md">
              EST. 2016 · ESCALANTE CITY
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
              Good food,<br />
              <span className="text-[#1A0A00]">honestly</span><br />
              made.
            </h1>

            <p className="text-white text-base sm:text-lg font-medium max-w-md leading-relaxed">
              Three generations of carefully sourced preserves, biscuits, and pantry essentials. Nothing artificial. Nothing unnecessary.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#shop"
                className="bg-[#1A0A00] hover:bg-[#321401] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1A0A00] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Center Floating Rating Badge */}
          <div className="hidden md:flex absolute left-[45%] lg:left-[47%] top-[34%] -translate-x-1/2 z-30 bg-[#1A0A00]/95 text-white rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-md border border-white/10 flex-col items-start min-w-[170px]">
            <p className="text-2xl font-black flex items-center gap-1 leading-none">
              4.9<span className="text-white text-xl">★</span>
            </p>
            <p className="text-[11px] text-white/80 font-medium mt-1.5 tracking-tight">
              12,400+ happy customers
            </p>
          </div>

          {/* Right Image Collage */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] w-full flex items-center justify-end">
            {/* Main store shelves image (top right) */}
            <div className="absolute right-0 top-0 w-64 sm:w-72 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                src="https://images.unsplash.com/photo-1545588155-e35ed2608eac?w=600&h=700&fit=crop&auto=format"
                alt="Graham's artisan preserves and shelves"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping cookie image (bottom left) */}
            <div className="absolute right-32 sm:right-40 bottom-2 w-56 sm:w-64 h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=500&fit=crop&auto=format"
                alt="Artisan chocolate chip cookie"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small honey dipper image (bottom right) */}
            <div className="absolute right-4 bottom-8 w-32 sm:w-36 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop&auto=format"
                alt="Pure Scottish wildflower honey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
