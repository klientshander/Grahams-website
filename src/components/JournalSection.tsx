import { JOURNAL_POSTS } from "../data/mockData";

export default function JournalSection() {
  return (
    <section className="bg-[#F5D9B8] py-20" id="journal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C] mb-1">
              The Journal
            </p>
            <h2 className="text-4xl font-black text-[#1A0A00] leading-tight">
              Stories, recipes & notes
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#FFF8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-[#1A0A00] text-[#FFF8F0] text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {post.readTime}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-bold text-[#E8590C] mb-2">{post.date}</p>
                <h3 className="text-lg font-black text-[#1A0A00] leading-snug group-hover:text-[#E8590C] transition-colors mb-2">
                  {post.title}
                </h3>
                <p
                  className="text-xs text-[#7C3813] leading-relaxed flex-1"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {post.summary}
                </p>
                <span className="text-xs font-bold text-[#E8590C] mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

