import React, { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050208]/85 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-indigo-400 p-0.5 shadow-lg shadow-indigo-900/40 flex items-center justify-center border border-white/20">
              <div className="w-full h-full bg-[#050208] rounded-full flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">A</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">
                  Aura Reader
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  Yayasan Nur Qolbu
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Refleksi Spiritual & Emosional AI</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-300">
            <a href="#fitur" className="hover:text-indigo-400 transition-colors">
              Fitur Utama
            </a>
            <a href="#mini-scan" className="hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-indigo-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Coba Mini AI Scan
            </a>
            <a href="#tentang" className="hover:text-indigo-400 transition-colors">
              Tentang Kami
            </a>
            <a href="#testimoni" className="hover:text-indigo-400 transition-colors">
              Kisah Refleksi
            </a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20pembacaan%20Aura%20Reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-indigo-300 border-b border-indigo-500/50 pb-1 hover:text-white transition-colors flex items-center gap-1.5"
              title="Konsultasi via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Hubungi Konsultan</span>
            </a>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
              <button className="relative bg-white text-black font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-tighter hover:bg-gray-100 transition-colors flex items-center gap-2 cursor-pointer">
                <span>Baca Aura Kamu Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050208] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#fitur"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 text-xs uppercase tracking-wider font-medium"
          >
            Fitur Utama
          </a>
          <a
            href="#mini-scan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-indigo-300 font-semibold rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs uppercase tracking-wider"
          >
            ✨ Coba Mini AI Scan Gratis
          </a>
          <a
            href="#tentang"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 text-xs uppercase tracking-wider font-medium"
          >
            Tentang Kami & Yayasan
          </a>
          <a
            href="#testimoni"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 text-xs uppercase tracking-wider font-medium"
          >
            Kisah Refleksi
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-gray-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 text-xs uppercase tracking-wider font-medium"
          >
            FAQ
          </a>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <a
              href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20pembacaan%20Aura%20Reader"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold text-indigo-300 border border-indigo-500/30 bg-indigo-950/30"
            >
              <MessageCircle className="w-4 h-4 text-indigo-400" />
              <span>WhatsApp: +6282322913080</span>
            </a>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-full text-xs uppercase tracking-tighter"
            >
              <span>Baca Aura Kamu Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
