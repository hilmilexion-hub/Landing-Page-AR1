import React from 'react';
import { Sparkles, MessageCircle, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050208] text-gray-400 text-xs border-t border-white/10 pt-16 pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-lg font-light text-white font-serif tracking-tight">Aura Reader</span>
                <p className="text-xs text-gray-400 font-medium">Yayasan Nur Qolbu</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Platform digital refleksi batin, emosi, dan pengembangan potensi spiritual humanis yang dirancang untuk membantu Anda meraih ketenangan jiwa.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
              <MessageCircle className="w-4 h-4" />
              <span>Layanan Pelanggan WA: +6282322913080</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-bold text-gray-200 uppercase tracking-widest text-[10px]">Navigasi Utama</p>
            <ul className="space-y-2">
              <li><a href="#fitur" className="hover:text-indigo-400 transition-colors">Fitur Aura Reader</a></li>
              <li><a href="#mini-scan" className="hover:text-indigo-400 transition-colors">Simulasi Mini Scan AI</a></li>
              <li><a href="#tentang" className="hover:text-indigo-400 transition-colors">Visi Yayasan Nur Qolbu</a></li>
              <li><a href="#testimoni" className="hover:text-indigo-400 transition-colors">Kisah Refleksi</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

          {/* Direct Checkout CTA Box */}
          <div className="md:col-span-4 p-6 rounded-[28px] bg-white/5 border border-white/10 space-y-3">
            <span className="text-[10px] bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Promo Spesial Rp 79.000
            </span>
            <h4 className="font-light font-serif text-white text-base">Dapatkan Pembacaan Aura Kamu Hari Ini</h4>
            <p className="text-gray-400 text-xs">
              Mulai perjalanan mengenali potensi batin dan menguatkan kedamaian spiritual.
            </p>
            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-full text-xs uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
            >
              <span>Baca Aura Kamu Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Aura Reader – Yayasan Nur Qolbu. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Transaksi Aman</span>
            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-indigo-400" /> Refleksi Batin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
