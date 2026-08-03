import React from 'react';
import { HeartPulse, Target, Compass, Download, Sparkles, ArrowRight } from 'lucide-react';

export const KeyFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: HeartPulse,
      color: 'from-purple-500 to-indigo-500',
      badge: 'Analisis Batin',
      title: 'Analisis Kondisi Batin & Emosi',
      description: 'Memetakan tingkat ketenangan, kestabilan emosional, serta kejernihan pikiran yang sedang Anda rasakan saat ini.',
    },
    {
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      badge: 'Potensi Diri',
      title: 'Identifikasi Kekuatan & Potensi Diri',
      description: 'Mengenali keunggulan alami dan bakat terpendam yang dapat Anda optimalkan untuk karir, keluarga, dan kehidupan.',
    },
    {
      icon: Compass,
      color: 'from-emerald-500 to-indigo-500',
      badge: 'Panduan Spiritual',
      title: 'Rekomendasi Refleksi & Spiritual',
      description: 'Saran zikir, renungan hati, dan amalan penenang jiwa yang relevan dengan kondisi batin Anda saat ini.',
    },
    {
      icon: Download,
      color: 'from-blue-500 to-indigo-500',
      badge: 'Format Digital',
      title: 'Laporan Praktis Siap Unduh',
      description: 'Disajikan dalam format PDF terstruktur, rapi, dan bahasa yang sejuk sehingga nyaman dibaca kapan saja.',
    },
    {
      icon: Sparkles,
      color: 'from-pink-500 to-purple-500',
      badge: 'Pendekatan Santun',
      title: 'Humanis, Edukatif & Inspiratif',
      description: 'Dirancang tanpa menakut-nakuti atau ramalan masa depan, fokus murni pada motivasi perbaikan diri dan introspeksi.',
    },
  ];

  return (
    <section id="fitur" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] relative border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Keunggulan Utama
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Fitur Utama <span className="text-indigo-400 italic">Aura Reader</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Segala yang Anda butuhkan untuk perjalanan refleksi batin, penyembuhan emosional, dan penguatan spiritual.
          </p>
        </div>

        {/* Grid of 5 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between glass-panel-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${feat.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#050208] rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center text-xs font-medium text-indigo-400 gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Termasuk dalam Laporan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Purchase Promotion */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-purple-950/50 via-indigo-950/80 to-[#050208] border border-indigo-500/40 flex flex-col justify-between text-center sm:text-left space-y-6">
            <div className="space-y-3">
              <span className="inline-block bg-white text-black font-bold text-[10px] uppercase px-3 py-1 rounded-full tracking-widest">
                Dapatkan Sekarang
              </span>
              <h3 className="text-xl font-light font-serif text-white">
                Siap Melakukan <span className="italic text-indigo-300">Refleksi Diri</span> Hari Ini?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Manfaatkan harga promo spesial Rp 79.000 (Normal Rp 150.000) sebelum periode diskon berakhir.
              </p>
            </div>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-full text-xs uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
            >
              <span>Baca Aura Kamu Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
