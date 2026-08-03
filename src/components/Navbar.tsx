import React, { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050208]/85 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand */}
          <div className="flex items-center gap-4">

            <img
              src="/logo-nur-qolbu.png"
              alt="Yayasan Nur Qolbu"
              className="w-14 h-14 rounded-full object-cover shadow-lg shadow-purple-500/20"
            />

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">
                  Aura Reader
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-300 bg-indigo-900/40 border border-indigo-500/30 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  Yayasan Nur Qolbu
                </span>
              </div>

              <p className="text-xs text-gray-400">
                Refleksi Spiritual & Emotional AI
              </p>
            </div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-gray-300">

            <a
              href="#fitur"
              className="hover:text-indigo-400 transition-colors"
            >
              Fitur Utama
            </a>

            <a
              href="#mini-scan"
              className="hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-indigo-400 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Coba Mini AI Scan
            </a>

            <a
              href="#tentang"
              className="hover:text-indigo-400 transition-colors"
            >
              Tentang Kami
            </a>

            <a
              href="#testimoni"
              className="hover:text-indigo-400 transition-colors"
            >
              Kisah Refleksi
            </a>

            <a
              href="#faq"
              className="hover:text-indigo-400 transition-colors"
            >
              FAQ
            </a>

          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20pembacaan%20Aura%20Reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-indigo-300 border-b border-indigo-500/50 pb-1 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Hubungi Konsultan
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

                <ArrowRight className="w-4 h-4" />

              </button>

            </a>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
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
            Tentang Kami
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
              <MessageCircle className="w-4 h-4" />
              WhatsApp Konsultan
            </a>

            <a
              href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-full text-xs uppercase tracking-tighter"
            >
              Baca Aura Kamu Sekarang
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      )}
    </header>
  );
};
