import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Logos from './components/Logos';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Hero />
      <Logos />
      <Solutions />
      <CTA />
    </div>
  );
}

export default App;
