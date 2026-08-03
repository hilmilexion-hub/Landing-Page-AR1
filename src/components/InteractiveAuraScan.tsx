import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AuraAnalysisResult } from '../types';

export const InteractiveAuraScan: React.FC = () => {
  const [name, setName] = useState('');
  const [feeling, setFeeling] = useState('Butuh Ketenangan & Arah Hidup');
  const [focus, setFocus] = useState('Spiritual & Ketenangan Batin');
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuraAnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/aura/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, feeling, focus, birthDate }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error('Failed to analyze aura:', err);
      // Fallback
      setResult({
        dominantAuraColor: 'Violet Spiritual & Emas Kebijaksanaan',
        hexColor: '#8B5CF6',
        secondaryAuraColor: '#F59E0B',
        innerConditionSummary: `Berdasarkan refleksi batin ${name}, terpancar keteguhan hati yang rindu akan ketenangan spiritual dan kejernihan pikiran. Anda menyimpan potensi besar yang siap berkembang.`,
        spiritualReflectionQuote: `"Ingatlah, dengan mengingat Allah hati akan menjadi tenteram." (QS. Ar-Ra'd: 28)`,
        strengths: ['Daya introspeksi yang dalam', "Empati & kepedulian tinggi", 'Keinginan kuat untuk lebih baik'],
        focusAreas: ['Menjaga kestabilan emosi harian', 'Menyeimbangkan fokus pekerjaan dan zikir'],
        teaserRecommendation: 'Unduh laporan lengkap 15+ halaman Aura Reader untuk eksplorasi energi batin secara utuh.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="mini-scan" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] relative overflow-hidden border-y border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Coba Mini Simulasi Gratis
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Simulasi <span className="text-indigo-400 italic">Refleksi Aura Mini</span> AI
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Masukkan data diri Anda di bawah ini untuk melihat contoh preview cuplikan pembacaan energi batin dan emosi Anda secara instan.
          </p>
        </div>

        {/* Interactive Form or Result Display */}
        <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-[36px] border border-white/10 shadow-2xl relative">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Nama Lengkap Anda <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Rahma Anisa"
                    className="w-full bg-black/40 border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Tanggal Lahir (Opsional)
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-2xl px-4 py-3 text-sm text-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Kondisi / Perasaan Saat Ini
                  </label>
                  <select
                    value={feeling}
                    onChange={(e) => setFeeling(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-2xl px-4 py-3 text-sm text-white outline-none transition-all"
                  >
                    <option value="Butuh Ketenangan & Arah Hidup" className="bg-[#050208] text-white">Butuh Ketenangan & Arah Hidup</option>
                    <option value="Sedang Lelah Emosional / Banyak Pikiran" className="bg-[#050208] text-white">Sedang Lelah Emosional / Banyak Pikiran</option>
                    <option value="Semangat Mencari Potensi Baru" className="bg-[#050208] text-white">Semangat Mencari Potensi Baru</option>
                    <option value="Ingin Memperkuat Hubungan & Spiritual" className="bg-[#050208] text-white">Ingin Memperkuat Hubungan & Spiritual</option>
                    <option value="Mencari Solusi Konflik Diri" className="bg-[#050208] text-white">Mencari Solusi Konflik Diri</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Fokus Utama Yang Ingin Diperbaiki
                  </label>
                  <select
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-2xl px-4 py-3 text-sm text-white outline-none transition-all"
                  >
                    <option value="Spiritual & Ketenangan Batin" className="bg-[#050208] text-white">Spiritual & Ketenangan Batin</option>
                    <option value="Pengembangan Potensi Karir & Pekerjaan" className="bg-[#050208] text-white">Pengembangan Potensi Karir & Pekerjaan</option>
                    <option value="Keharmonisan Keluarga & Pasangan" className="bg-[#050208] text-white">Keharmonisan Keluarga & Pasangan</option>
                    <option value="Pengelolaan Emosi & Stres" className="bg-[#050208] text-white">Pengelolaan Emosi & Stres</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 text-center">
                <button
                  type="submit"
                  disabled={loading || !name.trim()}
                  className="w-full sm:w-auto relative group inline-flex items-center justify-center cursor-pointer"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-60 group-hover:opacity-90 transition duration-300"></div>
                  <div className="relative w-full sm:w-auto bg-white text-black font-bold px-10 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-tighter flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Menganalisis Energi Batin Anda...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span>Lihat Hasil Mini Scan Aura AI</span>
                      </>
                    )}
                  </div>
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                Data Anda bersifat rahasia dan hanya digunakan untuk simulasi refleksi ini.
              </p>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Result Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 text-center sm:text-left">
                <div>
                  <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider">
                    Hasil Mini Scan Aura Reader • {name}
                  </span>
                  <h3 className="text-2xl font-light text-white font-serif mt-1">
                    Dominan: <span style={{ color: result.hexColor }} className="italic font-normal">{result.dominantAuraColor}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center animate-pulse"
                    style={{
                      backgroundColor: result.hexColor,
                      boxShadow: `0 0 30px ${result.hexColor}`,
                    }}
                  >
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <button
                    onClick={() => setResult(null)}
                    className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                  >
                    Ulangi Tes
                  </button>
                </div>
              </div>

              {/* Condition Summary */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <p className="text-[11px] uppercase font-bold text-indigo-400 tracking-wider">Refleksi Kondisi Batin & Emosi</p>
                <p className="text-gray-200 text-sm leading-relaxed">{result.innerConditionSummary}</p>
              </div>

              {/* Spiritual Quote */}
              <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-1">
                <Heart className="w-5 h-5 text-indigo-400 mx-auto" />
                <p className="text-sm font-serif italic text-indigo-200">{result.spiritualReflectionQuote}</p>
              </div>

              {/* Strengths & Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider">Potensi & Kekuatan</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {result.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <p className="text-[11px] font-bold uppercase text-indigo-300 tracking-wider">Area Refleksi Batin</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {result.focusAreas.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* High-Converting CTA Box to Get Full Report */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-950/60 to-purple-900/30 border border-indigo-500/30 text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                    Langkah Selanjutnya
                  </span>
                  <h4 className="text-lg font-light font-serif text-white">
                    Buka Laporan Lengkap 15+ Halaman Aura Reader Anda
                  </h4>
                  <p className="text-xs text-gray-400 max-w-lg mx-auto">
                    Dapatkan analisis menyeluruh peta energi, panduan refleksi spiritual harian, serta rekomendasi pengembangan diri lengkap dari Yayasan Nur Qolbu.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <span>Baca Aura Kamu Sekarang (Rp 79.000)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
