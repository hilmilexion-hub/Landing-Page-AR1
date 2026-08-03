import React from 'react';
import { AuraCanvas } from './AuraCanvas';
import { Sparkles, ShieldCheck, Download, Heart, ArrowRight, MessageCircle, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050208] text-gray-200">
      {/* Background Ethereal Aura Canvas */}
      <AuraCanvas primaryColor="#6366F1" secondaryColor="#A855F7" />

      {/* Elegant Dark Background Aura Decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline, Value Proposition, Pricing, CTAs */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Yayasan Nur Qolbu • Refleksi Spiritual & Emosional</span>
          </div>

          {/* Main Headline with Serif Italic Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] text-white tracking-tight">
            Kenali <span className="text-indigo-400 font-serif italic font-normal">Energi Batin</span> Anda Melalui AI Spiritual
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            Sistem analisis digital dari <strong>Yayasan Nur Qolbu</strong> yang membantu Anda mengenali kondisi batin, pola emosi, dan potensi diri melalui laporan refleksi yang mendalam dan inspiratif.
          </p>

          {/* Pricing & CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-2">
            <div className="flex items-baseline gap-3">
              <span className="text-xs text-gray-500 line-through">Rp 150.000</span>
              <span className="text-3xl sm:text-4xl font-bold text-white">Rp 79.000</span>
            </div>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <button className="relative bg-white text-black font-bold py-3.5 px-8 rounded-full text-xs sm:text-sm uppercase tracking-tighter hover:bg-gray-100 transition-colors flex items-center gap-2 cursor-pointer shadow-xl">
                <span>Baca Aura Kamu Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Secondary CTA & WhatsApp Link */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
            <a
              href="#mini-scan"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 font-medium transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Coba Mini AI Scan Gratis</span>
            </a>

            <a
              href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20Aura%20Reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-indigo-400 border-b border-indigo-500/50 pb-0.5 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
              Hubungi Konsultan WA
            </a>
          </div>

          {/* Trust Features Grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 max-w-xl">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-400"><span className="text-white font-medium">Analisis Batin:</span> Pahami kondisi emosional Anda saat ini.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-400"><span className="text-white font-medium">Potensi Diri:</span> Identifikasi kekuatan tersembunyi Anda.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-400"><span className="text-white font-medium">Panduan Spiritual:</span> Rekomendasi langkah pengembangan diri.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
              <p className="text-xs text-gray-400"><span className="text-white font-medium">Laporan Digital:</span> Hasil instan PDF yang mudah dipahami.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visualizer Glassmorphic Card Mockup */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-full max-w-[360px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 flex flex-col shadow-2xl relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-1 bg-white/10 rounded-full"></div>
              <div className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                AI Scanning
              </div>
            </div>

            {/* Aura Circle Visual */}
            <div className="flex flex-col items-center justify-center py-6 relative">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-80 relative flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full border-2 border-white/20 rounded-full scale-110"></div>
                <div className="absolute inset-0 w-full h-full border border-white/10 rounded-full scale-125"></div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-3xl font-light text-white mb-1 tracking-tighter">98% Harmony</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Energy Resonance</div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-black/40 border border-white/10 text-[11px] text-gray-300 italic text-center">
              &quot;Dominan Cahaya Violet & Emas: Menandakan potensi spiritual tinggi dan dorongan untuk menenangkan jiwa.&quot;
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400">
              <span>Frekuensi: 432Hz</span>
              <span className="text-indigo-400 font-semibold">Status: Seimbang</span>
            </div>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center bg-white text-black font-bold py-2.5 rounded-full text-xs uppercase tracking-tight hover:bg-gray-200 transition-colors"
            >
              Laporan Lengkap (Rp 79.000)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
