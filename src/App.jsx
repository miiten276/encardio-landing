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
              {/* Geänderter Text: Deutschland, Österreich & Schweiz */}
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 mb-8">
                Encardio Rite Vertrieb Deutschland, Österreich & Schweiz
              </div>

              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight text-white mb-8">
                Sensoren & Datalogger
                <span className="block text-emerald-400">
                  für Geotechnik & Infrastruktur
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-light">
                Vertrieb hochwertiger Encardio Rite Messinstrumente für geotechnische Anwendungen,
                Infrastrukturprojekte und Bauwerksüberwachung
              </p>
            </div>
          </div>
        </section>

        {/* Vorteile / USPs oberhalb der Produkte */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vorteil 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M21 21h1.5M3 21h1.5m0 0V8.25m0 12.75h4.5M3 21V3.545M3 3.545a.75.75 0 0 1 .75-.75h5.5c.414 0 .75.336.75.75V8.25m-7.5 0h7.5m0 0h5.25m-5.25 0v3.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75h-5.25" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Schnelle Verfügbarkeit</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Viele Produkte direkt ab eigenem CH-Lager</p>
              </div>
            </div>

            {/* Vorteil 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-12H16.5M21 15.75V18m0-2.25h.75m-7.5-3h.008v.008H14.25v-.008Zm0 2.25h.008v.008H14.25v-.008Zm-.75-2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Kompetitive Preise</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Attraktive Konditionen für Ihre Messprojekte</p>
              </div>
            </div>

            {/* Vorteil 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83m0 0a2.999 2.999 0 0 0-4.142-4.142m4.142 4.142-3.658 3.658m0 0a3 3 0 1 1-4.142-4.142m4.142 4.142V12M10.5 10.5H12m-6.75 6.75 2.586-2.586m12.164-12.164A2.652 2.652 0 0 0 16.5 3c-.051 0-.1 0-.15.002L12 6M3 16.5V21h4.5l7.42-7.42" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Technische Unterstützung</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Unkomplizierter und direkter Support bei Fragen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bereich für Produkte */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-4">
              Produkte
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Entdecken Sie unsere breite Palette an präzisen Messinstrumenten für jedes Projekt
            </p>
          </div>
          
          {/* Produkt-Raster */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all duration-200 flex items-start gap-3">
                <span className="text-emerald-500 mt-1 flex-shrink-0">
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <span className="font-medium text-slate-800">{product}</span>
              </div>
            ))}
          </div>

          {/* Zentraler Button unter der Liste */}
          <div className="text-center">
            <a 
              href="https://encardio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-6 py-3 rounded-xl transition-colors duration-200"
            >
              <span>Mehr Details zu den Produkten</span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
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
            Haben Sie Fragen zu den Produkten oder wünschen Sie eine unverbindliche Offerte? Wir sind gerne für Sie da.
          </p>
          <a 
            href="mailto:encardio@marmota.com" 
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span>contact@marmota.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
