import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  // Countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 48,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-950 text-gray-200 py-2.5 px-4 border-b border-indigo-500/20 text-sm relative z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-300 animate-pulse" /> PROMO KHUSUS
          </span>
          <span className="font-medium text-gray-200">
            Aura Reader Diskon 47%: <span className="line-through text-gray-500">Rp 150.000</span> →{' '}
            <span className="font-extrabold text-white text-base">Rp 79.000</span>
          </span>
          <span className="hidden md:inline text-indigo-300/80 text-xs font-semibold">
            (Hemat Rp 71.000 Hari Ini)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs bg-black/40 px-2.5 py-1 rounded-full border border-white/10 font-mono font-medium text-indigo-300">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>

          <a
            href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-black font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-tight hover:bg-gray-200 transition-all shadow-md group"
          >
            Ambil Promo <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
