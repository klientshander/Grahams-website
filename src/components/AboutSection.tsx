export default function AboutSection() {
  return (
    <section className="bg-[#FFF8F0] py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C]">
              Our Story
            </p>
            <h2 className="text-4xl font-black text-[#1A0A00] leading-tight">
              Rooted in Escalante Tradition, made for modern tables.
            </h2>
            <div
              className="space-y-4 text-[#7C3813] text-base leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              <p>
                Started in 2016 in Balintawak Old Town by Shander Santillan, our philosophy remains unchanged: work directly with small growers, use copper open boiling pans, and let natural ingredients shine without synthetic pectins, flavourings, or artificial preservatives.
              </p>
              <p>
                Today, the third generation of the Graham family continues to handcraft every preserve, churn Scottish butter for our shortbread, and forage raw heather honey from Perthshire hills.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F5D9B8]">
              <div>
                <p className="text-3xl font-black text-[#E8590C]">39</p>
                <p className="text-xs font-bold text-[#1A0A00]">Years of Craft</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#E8590C]">100%</p>
                <p className="text-xs font-bold text-[#1A0A00]">Natural Recipe</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#E8590C]">24</p>
                <p className="text-xs font-bold text-[#1A0A00]">Great Taste Awards</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1590083052217-3c5ca32f3906?w=500&h=600&fit=crop&auto=format"
              alt="Artisan jam making"
              className="rounded-2xl shadow-lg object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=600&fit=crop&auto=format"
              alt="Scottish Highlands landscape"
              className="rounded-2xl shadow-lg object-cover h-64 w-full mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

