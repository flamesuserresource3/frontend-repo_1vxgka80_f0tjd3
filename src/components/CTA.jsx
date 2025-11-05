export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-slate-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center backdrop-blur">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Ready to synthesize compounding growth?
          </h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Connect your store, pick a module, and see impact within days—not quarters.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full sm:w-80 rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-slate-900 font-medium px-5 py-3 hover:bg-emerald-300 transition">
              Get early access
            </button>
          </form>
          <p className="mt-3 text-xs text-white/50">No spam. We’ll reach out within 24h.</p>
        </div>
        <p className="mt-8 text-center text-white/40 text-xs">© {new Date().getFullYear()} SilverSynth. All rights reserved.</p>
      </div>
    </section>
  );
}
