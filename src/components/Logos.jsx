const brands = [
  'Nova Skin',
  'Atlas Outdoors',
  'Moonwell',
  'Kite Co.',
  'Northline',
  'Solara',
];

export default function Logos() {
  return (
    <section className="bg-slate-950 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-white/60 text-sm">Trusted by modern DTC brands</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((b) => (
            <div key={b} className="flex items-center justify-center py-3">
              <span className="text-white/40 text-sm tracking-wider uppercase">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
