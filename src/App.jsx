export default function EncardioLandingPage() {
  const products = [
    "Piezometer",
    "Inklinometer",
    "Extensometer",
    "Setzungsmesssysteme",
    "Rissmonitore",
    "Lastmessdosen",
    "Dehnungsmesssensoren",
    "Drucksensoren",
    "Temperatursensoren",
    "Neigungssensoren",
    "Datalogger",
    "Wireless Monitoring Systeme",
    "Gateway Systeme",
    "Vibrating Wire Sensoren",
    "Automatische Datenerfassung",
    "Geotechnische Messinstrumente",
    "Bauwerksüberwachungssysteme",
    "Bohrlochmesssysteme",
    "Ankerkraftmesssysteme",
    "Füllstandsensoren"
  ];

  const applications = [
    "Tunnelbau",
    "Brückenüberwachung",
    "Dammüberwachung",
    "Baugruben",
    "Geotechnik",
    "Infrastrukturprojekte",
    "Bergbau",
    "Hoch- und Tiefbau"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 mb-8">
              Encardio Rite Vertrieb Deutschland & Schweiz
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight text-white mb-8">
              Sensoren & Datalogger
              <span className="block text-emerald-400">
                für Geotechnik & Infrastruktur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-light">
              Vertrieb hochwertiger Encardio Rite Messinstrumente für geotechnische Anwendungen,
              Infrastrukturprojekte und Bauwerksüberwachung.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
