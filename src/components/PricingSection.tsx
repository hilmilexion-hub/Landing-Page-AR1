import React, { useState, useEffect } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Clock, MessageCircle, Heart, Lock } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 48,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  const includes = [
    'Laporan Refleksi Aura Lengkap 15+ Halaman (Format PDF)',
    'Analisis Spektrum Emosi & Tingkat Ketenangan Batin',
    'Pemetaan Potensi Diri & Kekuatan Alami Terpendam',
    'Panduan Zikir, Renungan & Penenang Hati Khusus',
    'Matriks Evaluasi Hubungan Sosial & Pasangan/Keluarga',
    'Akses Langsung Unduh Serta Merta Setelah Checkout',
    'Dukungan Layanan Pertanyaan via WhatsApp Yayasan Nur Qolbu',
  ];

  return (
    <section id="harga" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] relative overflow-hidden border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Penawaran Terbatas Hari Ini
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Mulai Perjalanan <span className="text-indigo-400 italic">Refleksi Batin</span> Anda
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Dapatkan laporan komprehensif Aura Reader dengan harga khusus promo Yayasan Nur Qolbu.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-white/5 backdrop-blur-xl p-8 sm:p-12 rounded-[40px] border border-white/10 shadow-2xl space-y-8">
          {/* Top Badge Banner */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black font-bold px-6 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> PROMO DISKON 47%
          </div>

          {/* Countdown & Price */}
          <div className="text-center space-y-4 pt-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Sisa Waktu Promo: {formatNum(timeLeft.hours)} jam {formatNum(timeLeft.minutes)} menit {formatNum(timeLeft.seconds)} detik</span>
            </div>

            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Harga Resmi Aura Reader</p>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="text-lg sm:text-xl line-through text-gray-500 font-bold">Rp 150.000</span>
                <span className="text-4xl sm:text-5xl font-light text-white font-serif">
                  Rp 79.000
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-bold mt-1">
                Anda Hemat Rp 71.000 (Pengeluaran Sekali Bayar)
              </p>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Semua Yang Anda Dapatkan:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Checkout Button */}
          <div className="space-y-4 text-center">
            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full inline-flex items-center justify-center cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-full bg-white text-black font-bold px-8 py-4 rounded-full text-sm uppercase tracking-tight flex items-center justify-center gap-3">
                <span>Baca Aura Kamu Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-indigo-400" /> Pembayaran Aman via Lynk.id
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Kerahasiaan Terjamin
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-indigo-400" /> Yayasan Nur Qolbu
              </span>
            </div>
          </div>

          {/* WhatsApp Direct Help Box */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-emerald-300">Ada Pertanyaan Sebelum Membeli?</p>
              <p className="text-[11px] text-gray-300">Tim Yayasan Nur Qolbu siap membantu Anda melalui WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20pembacaan%20Aura%20Reader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-full text-xs transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WA: +6282322913080</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
