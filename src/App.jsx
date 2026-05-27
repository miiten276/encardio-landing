import React from 'react';
// Hinweis: Falls du Lucide-Icons nutzt, kannst du diese importieren. 
// Wenn nicht, funktionieren die SVG-Icons im Code trotzdem perfekt!

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero-Bereich (Bestehend) */}
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

      {/* NEU: Bereich für Produkte */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-4">
            Unsere <span className="text-emerald-600 font-normal">Produkte</span>
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Entdecken Sie unsere breite Palette an präzisen Messinstrumenten für jedes Projekt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors duration-200 flex items-start gap-3">
              <span className="text-emerald-500 mt-1">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span className="font-medium text-slate-800">{product}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEU: Bereich für Anwendungsbereiche */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Einsatz- und <span className="text-emerald-400 font-normal">Anwendungsbereiche</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Sichere und präzise Überwachung für anspruchsvolle Infrastrukturen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800 transition-colors duration-200">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4">
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 15.75h19.5m-16.5-12h13.5m-12 3h10.5M3.75 21V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75V21M7.5 21v-3.75c0-.414.336-.75.75-.75h7.5c.414 0 .75.336.75.75V21" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-100">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

