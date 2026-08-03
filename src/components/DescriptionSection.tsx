import React from 'react';
import { Heart, Sparkles, BookOpen, Compass, ShieldCheck } from 'lucide-react';

export const DescriptionSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] text-gray-200 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-indigo-400" /> Visi & Misi Refleksi Batin
          </div>
          <h2 className="text-3xl sm:text-4xl font-light font-serif tracking-tight text-white">
            Aura Reader – <span className="text-indigo-400 italic">Yayasan Nur Qolbu</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Platform refleksi diri berbasis AI dengan pendekatan spiritual, emosional, dan psikologis yang santun dan penuh keberkahan.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-[36px] border border-white/10 shadow-2xl space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
          <p>
            <strong className="text-white font-bold">Aura Reader</strong> adalah platform digital yang dirancang untuk membantu Anda melakukan refleksi diri melalui pendekatan spiritual, emosional, dan psikologis secara sederhana. Sistem ini menyajikan analisis berdasarkan informasi yang Anda berikan untuk membantu mengenali kondisi batin, pola emosi, potensi diri, serta area kehidupan yang membutuhkan perhatian.
          </p>

          <p>
            Hasil analisis disusun dalam bentuk laporan yang mudah dipahami, sehingga dapat menjadi bahan introspeksi dan motivasi untuk terus memperbaiki diri. Aura Reader tidak dimaksudkan sebagai alat untuk meramal masa depan atau memberikan kepastian terhadap suatu kejadian, melainkan sebagai sarana refleksi yang mendukung proses pengembangan diri dan penguatan spiritual.
          </p>

          <div className="p-6 rounded-2xl bg-indigo-950/40 border-l-2 border-indigo-400 my-6 text-indigo-100 italic space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold not-italic text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4 text-indigo-400" />
              <span>Harapan Yayasan Nur Qolbu</span>
            </div>
            <p className="font-serif text-base text-gray-200">
              &quot;Melalui platform ini, Yayasan Nur Qolbu berharap setiap pengguna dapat lebih mengenal dirinya sendiri, membangun ketenangan hati, memperkuat hubungan dengan Allah SWT, serta mengambil langkah-langkah positif dalam menjalani kehidupan, keluarga, pekerjaan, maupun hubungan sosial.&quot;
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 space-y-3 glass-panel-hover">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Refleksi Spiritual</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mendorong penenangan jiwa, memperkuat hubungan dengan Sang Pencipta, serta memberikan pesan zikir dan renungan batin.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 space-y-3 glass-panel-hover">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Pemahaman Emosional</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Membantu memetakan pola emosi dan dinamika psikologis agar Anda dapat menyikapi dinamika hidup secara lebih bijak.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 space-y-3 glass-panel-hover">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Edukasi & Motivasi</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Disusun tanpa narasi mistis atau keputusasaan, melainkan sebagai dorongan positif untuk pengembangan potensi diri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
