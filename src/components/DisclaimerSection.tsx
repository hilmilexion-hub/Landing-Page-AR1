import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const DisclaimerSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#050208] text-gray-300 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-[28px] bg-white/5 border border-white/10 space-y-3 relative">
          <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-xs tracking-wider uppercase">
            <AlertTriangle className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Disclaimer Resmi Aura Reader</span>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Seluruh hasil yang ditampilkan oleh Aura Reader merupakan analisis berbasis data yang Anda masukkan dan tidak dapat dijadikan sebagai diagnosis psikologis, medis, maupun fatwa keagamaan. Hasil analisis bersifat informatif dan reflektif, sehingga keputusan serta tindakan tetap menjadi tanggung jawab masing-masing pengguna. Untuk permasalahan yang memerlukan penanganan khusus, disarankan berkonsultasi dengan tenaga profesional atau pembimbing agama yang kompeten.
          </p>

          <div className="pt-2 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
            Yayasan Nur Qolbu • Komitmen Edukasi & Penguatan Spiritual Humanis
          </div>
        </div>
      </div>
    </section>
  );
};
