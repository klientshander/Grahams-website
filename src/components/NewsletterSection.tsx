import { useState } from "react";

interface NewsletterSectionProps {
  onNotify: (msg: string) => void;
}

export default function NewsletterSection({ onNotify }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onNotify("Thank you for subscribing to Graham's Table!");
    }
  }

  return (
    <section className="bg-[#FFF8F0] py-16" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E8590C] mb-2">
          Stay In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#1A0A00] mb-3">
          Join the Graham's Table
        </h2>
        <p
          className="text-[#7C3813] text-sm max-w-md mx-auto mb-6"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Receive seasonal harvest updates, limited small-batch release notifications, and exclusive subscriber recipes.
        </p>

        {subscribed ? (
          <div className="bg-[#F5D9B8] text-[#1A0A00] font-bold py-4 px-6 rounded-2xl max-w-md mx-auto animate-scale-up">
            ✓ Welcome to the table! Check your inbox soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#F5D9B8]/40 border border-[#7C3813]/20 rounded-full px-5 py-3.5 text-xs font-bold text-[#1A0A00] outline-none focus:ring-2 focus:ring-[#E8590C]"
            />
            <button
              type="submit"
              className="bg-[#E8590C] hover:bg-[#C44A08] text-[#FFF8F0] px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

