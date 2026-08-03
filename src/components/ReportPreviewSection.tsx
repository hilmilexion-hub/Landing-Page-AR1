import React, { useState } from 'react';
import { FileText, Sparkles, Check, Download, ArrowRight, ShieldCheck } from 'lucide-react';

export const ReportPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const reportTabs = [
    {
      title: '1. Peta Energi Aura',
      subtitle: 'Analisis Spektrum Warna & Frekuensi Batin',
      content: {
        heading: 'Peta Diagram Energi & Dominasi Warna Aura',
        details: [
          'Penjelasan makna warna aura dominan (Violet, Nila, Emas, Hijau, Biru).',
          'Tingkat vitalitas & kejernihan energi batin saat ini.',
          'Interaksi antara aura utama dan aura sekunder.',
          'Identifikasi titik energi yang memerlukan penyeimbangan.',
        ],
        quote: 'Memberikan gambaran visual mengenai warna energi yang sedang mendominasi pikiran dan emosi Anda.',
      },
    },
    {
      title: '2. Analisis Potensi Diri',
      subtitle: 'Identifikasi Keunggulan Alami & Bakat Terpendam',
      content: {
        heading: 'Evaluasi Kekuatan & Bakat Alami Terpendam',
        details: [
          'Karakteristik kepribadian dan gaya komunikasi bawaan.',
          'Kelebihan intuisi & daya tangkap emosional.',
          'Peluang pengembangan karir dan karya yang selaras dengan energi Anda.',
          'Cara mengoptimalkan potensi untuk kebaikan bersama.',
        ],
        quote: 'Membantu Anda mengenali kelebihan diri yang sering kali tidak disadari.',
      },
    },
    {
      title: '3. Rekomendasi Spiritual',
      subtitle: 'Panduan Zikir, Renungan & Penenang Hati',
      content: {
        heading: 'Panduan Penyelarasan Spiritual & Zikir Batin',
        details: [
          'Rekomendasi bacaan doa dan zikir harian sesuai kondisi batin.',
          'Tips membangun kebiasaan muhasabah (introspeksi) sejuk.',
          'Cara mengelola kekhawatiran dan memupuk prasangka baik kepada Allah SWT.',
          'Langkah praktis memperkuat ketenangan hati.',
        ],
        quote: 'Dirancang santun sebagai sarana mempererat hubungan batin dengan Sang Maha Pencipta.',
      },
    },
    {
      title: '4. Matriks Hubungan & Emosi',
      subtitle: 'Pola Interaksi Sosial & Keluarga',
      content: {
        heading: 'Pola Emosi dalam Hubungan Sosial & Keluarga',
        details: [
          'Gaya merespons tekanan dan konflik interpresonal.',
          'Langkah mengkomunikasikan perasaan dengan lembut.',
          'Menjaga batas emosional agar tidak mudah lelah batin.',
          'Saran membangun keharmonisan dalam keluarga.',
        ],
        quote: 'Membimbing Anda agar tetap seimbang dalam menjalani interaksi harian.',
      },
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] text-gray-200 relative">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-indigo-400" /> Preview Laporan Digital
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Apa Yang Akan Anda Dapatkan Dalam <span className="text-indigo-400 italic">Laporan Lengkap</span>?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Laporan eksklusif 15+ halaman disajikan dengan tata letak elegan, visual jernih, dan rekomendasi personal.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {reportTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-indigo-950/80 border-indigo-500/80 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">{tab.title}</p>
              <p className="text-xs font-medium line-clamp-1 mt-1 text-gray-300">{tab.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Tab Content Display Card */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white/5 backdrop-blur-xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Bab Laporan Lanjutan
            </span>
            <h3 className="text-2xl font-light text-white font-serif">
              {reportTabs[activeTab].content.heading}
            </h3>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-indigo-200 italic font-serif">
              &quot;{reportTabs[activeTab].content.quote}&quot;
            </div>

            <ul className="space-y-3">
              {reportTabs[activeTab].content.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="http://lynk.id/bundayayula/52dvglzggqnm/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Dapatkan Laporan Lengkap (Rp 79.000)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Document Card Mockup */}
          <div className="lg:col-span-5 bg-black/50 p-6 rounded-[28px] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-bold text-gray-200">Aura_Reader_Report.pdf</span>
              </div>
              <span className="text-[10px] bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                Siap Unduh
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-gray-400">Penerbit:</span>
                <span className="font-semibold text-gray-200">Yayasan Nur Qolbu</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-gray-400">Format:</span>
                <span className="font-semibold text-gray-200">PDF High Resolution</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                <span className="text-gray-400">Pendekatan:</span>
                <span className="font-semibold text-indigo-300">Spiritual & Emosional</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garansi Kerahasiaan Data 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
