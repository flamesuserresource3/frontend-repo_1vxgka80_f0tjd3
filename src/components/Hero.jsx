import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradients for depth - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-72 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-emerald-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live AI for DTC Brands
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          SilverSynth: AI that compounds your ecommerce growth
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Reduce CAC, recapture abandoned carts, and unlock predictive LTV with a glass-morphic, modern AI stack purpose-built for Shopify, WooCommerce, and custom stores.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-medium px-5 py-3 shadow-lg shadow-white/10 hover:bg-white/90 transition">
            Book a demo
          </a>
          <a href="#solutions" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 backdrop-blur hover:bg-white/10 transition">
            Explore solutions
          </a>
        </div>
      </div>
    </section>
  );
}
