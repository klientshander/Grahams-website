import { CATEGORIES } from "../data/mockData";

interface CategorySectionProps {
  activeCategory: string;
  onSelectCategory: (filterKey: string) => void;
}

export default function CategorySection({
  activeCategory,
  onSelectCategory,
}: CategorySectionProps) {
  return (
    <section className="bg-[#FFF8F0] py-20" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C] mb-1">
              Browse Collections
            </p>
            <h2 className="text-4xl font-black text-[#1A0A00] leading-tight">
              Shop by category
            </h2>
          </div>
          <button
            onClick={() => onSelectCategory("All")}
            className="text-sm font-black text-[#E8590C] hover:text-[#C44A08] underline underline-offset-4 transition-colors cursor-pointer"
          >
            View all products →
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.filterKey)}
              className={`group relative overflow-hidden rounded-2xl aspect-square text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none cursor-pointer ${
                activeCategory === cat.filterKey
                  ? "ring-4 ring-[#E8590C] shadow-lg"
                  : "border-2 border-transparent"
              }`}
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/85 via-[#1A0A00]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <p className="text-[#FFF8F0] font-black text-lg sm:text-xl leading-tight group-hover:text-[#F5D9B8] transition-colors">
                  {cat.label}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[#F5D9B8] text-xs font-semibold">
                    {cat.count} items
                  </p>
                  <span className="text-xs text-[#FFF8F0] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

