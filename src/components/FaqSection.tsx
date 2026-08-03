import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah Aura Reader merupakan bentuk ramalan masa depan?',
      a: 'Sama sekali TIDAK. Aura Reader adalah sarana refleksi diri berbasis analisis data inputan Anda untuk mengenali pola emosi, kondisi batin, dan potensi diri secara psikologis & spiritual. Hasilnya tidak memberikan kepastian masa depan, melainkan bahan perenungan (introspeksi) dan perbaikan diri.',
    },
    {
      q: 'Bagaimana proses pengiriman laporan setelah pembacaan?',
      a: 'Setelah Anda menyelesaikan pembayaran melalui link checkout Lynk.id, laporan Aura Reader lengkap berbentuk digital (PDF) akan langsung diproses dan dapat langsung diunduh atau dikirimkan ke perangkat Anda dengan cepat.',
    },
    {
      q: 'Apakah data pribadi dan hasil pembacaan saya terjamin kerahasiaannya?',
      a: 'Sangat terjamin. Yayasan Nur Qolbu menjaga privasi setiap pengguna dengan ketat. Data Anda tidak akan dibagikan atau dipublikasikan kepada pihak mana pun.',
    },
    {
      q: 'Bagaimana jika saya ingin bertanya atau konsultasi lebih lanjut?',
      a: 'Anda dapat menghubungi tim Yayasan Nur Qolbu kapan saja via WhatsApp di nomor +6282322913080. Kami siap membantu membimbing dan menjawab pertanyaan Anda dengan ramah.',
    },
    {
      q: 'Metode pembayaran apa saja yang didukung?',
      a: 'Melalui platform Lynk.id, pembayaran sangat fleksibel dan aman meliputi QRIS (Gopay, OVO, Dana, ShopeePay, LinkAja), Transfer Bank (BCA, Mandiri, BRI, BNI), Kartu Kredit, serta E-Wallet lainnya.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] text-gray-200 relative border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" /> Tanya Jawab Umum
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Pertanyaan Yang Sering <span className="text-indigo-400 italic">Diajukan</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Temukan jawaban lengkap atas pertanyaan umum mengenai Aura Reader Yayasan Nur Qolbu.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[24px] bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-semibold text-white flex items-center justify-between gap-4 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <div className="p-6 rounded-[28px] bg-white/5 border border-white/10 text-center space-y-3">
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Masih Ada Pertanyaan Lain?</p>
          <a
            href="https://wa.me/6282322913080?text=Halo%20Yayasan%20Nur%20Qolbu,%20saya%20ingin%20bertanya%20mengenai%20Aura%20Reader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-xs uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Kami via WhatsApp: +6282322913080</span>
          </a>
        </div>
      </div>
    </section>
  );
};
