import { STOCKISTS } from "../data/mockData";

export default function StockistsSection() {
  return (
    <section className="bg-[#FFF8F0] py-20" id="stockists">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C] mb-1">
            Find In Store
          </p>
          <h2 className="text-4xl font-black text-[#1A0A00] leading-tight">
            Our shops & partner stockists
          </h2>
          <p
            className="text-[#7C3813] text-sm mt-3"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Experience our pantry provisions in person at our Edinburgh deli and fine food purveyors across the UK.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STOCKISTS.map((s) => (
            <div
              key={s.name}
              className="bg-[#F5D9B8] rounded-2xl p-6 border border-[#7C3813]/10 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-black text-base text-[#1A0A00] mb-2">
                  {s.name}
                </p>
                <p
                  className="text-xs text-[#7C3813] leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {s.address}
                </p>
              </div>
              <p className="text-xs font-bold text-[#E8590C] mt-4 pt-4 border-t border-[#7C3813]/20">
                Tel: {s.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

