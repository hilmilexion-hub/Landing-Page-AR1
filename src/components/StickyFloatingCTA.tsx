import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

export const StickyFloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-[#050208]/90 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        {/* Left Info & Price */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 items-center justify-center">
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Aura Reader Promo</span>
              <span className="text-[10px] bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                Hemat Rp 71.000
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-light text-white font-serif">Rp 79.000</span>
              <span className="text-xs line-through text-gray-500">Rp 150.000</span>
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20Aura%20Reader"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors"
            title="Chat WA"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <a
            href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>Baca Aura Kamu Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
