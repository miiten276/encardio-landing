import React from 'react';

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <div>
        {/* Hero-Bereich */}
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

        {/* Bereich für Produkte */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-4">
              Produkte
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Entdecken Sie unsere breite Palette an präzisen Messinstrumenten für jedes Projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1 flex-shrink-0">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <span className="font-medium text-slate-800">{product}</span>
                </div>
                
                <a 
                  href="https://www.encardio.com/geotechnical-products" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70 px-3 py-2 rounded-lg transition-colors duration-200 mt-auto"
                >
                  <span>Mehr Details</span>
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bereich für Kontakt / Offertanfrage */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Kontakt & <span className="text-emerald-400 font-normal">Offertanfrage</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 font-light">
            Haben Sie Fragen zu unseren Produkten oder wünschen Sie eine unverbindliche Offerte? Wir sind gerne für Sie da.
          </p>
          <a 
            href="mailto:encardio@marmota.com" 
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span>encardio@marmota.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
