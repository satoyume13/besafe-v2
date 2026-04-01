export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Our Heritage. Your Defense.
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          Besafe Tech was founded on a simple principle: **Security is not a product, it is a process.** With a presence in Riyadh, Dubai, and London, we bridge the gap between 
          complex threats and business continuity.
        </p>

        {/* The Three Pillars Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
            <h3 className="font-bold text-lg mb-2">Pillar 1: Analysis</h3>
            <p className="text-sm text-slate-500">In-depth penetration testing to find the cracks before hackers do.</p>
          </div>
          <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
            <h3 className="font-bold text-lg mb-2">Pillar 2: Response</h3>
            <p className="text-sm text-slate-500">24/7 incident monitoring from our elite Security Operations Centers.</p>
          </div>
          <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
            <h3 className="font-bold text-lg mb-2">Pillar 3: Strategy</h3>
            <p className="text-sm text-slate-500">Guidance on international compliance including ISO and PCI-DSS.</p>
          </div>
        </div>
      </div>
    </main>
  );
}