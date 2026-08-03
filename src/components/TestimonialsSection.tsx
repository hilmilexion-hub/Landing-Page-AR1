import React from 'react';
import { Quote, Star, Sparkles, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Ibu Hajah Kartika',
      role: 'Ibu Rumah Tangga, Bandung',
      story: 'Awalnya saya ragu apakah ini semacam ramalan, tapi setelah membaca penjelasannya murni refleksi batin dan penguatan spiritual Islami. Laporannya sangat menyejukkan hati dan membuat saya lebih tenang mengelola emosi bersama keluarga.',
      color: 'from-purple-500 to-indigo-500',
      tag: 'Ketenangan Keluarga',
    },
    {
      name: 'Bapak Ahmad Faisal',
      role: 'Wiraswasta, Jakarta',
      story: 'Laporan Aura Reader dari Yayasan Nur Qolbu membantu saya melihat potensi diri dan titik-titik stres yang selama ini saya abaikan. Bahasa penjelasannya santun dan menyentuh, sangat direkomendir!',
      color: 'from-indigo-500 to-purple-500',
      tag: 'Pengembangan Diri',
    },
    {
      name: 'Mbak Dewi Nurul',
      role: 'Pekerja Lapangan, Surabaya',
      story: 'Rekomendasi zikir dan refleksi emosinya pas sekali dengan kondisi saya yang sedang jenuh kerjaan. Dengan harga Rp 79.000 ini sangat terjangkau dibanding ketenangan pikiran yang didapat.',
      color: 'from-emerald-500 to-indigo-500',
      tag: 'Refleksi Karir & Jiwa',
    },
  ];

  return (
    <section id="testimoni" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050208] text-gray-200 relative">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-indigo-400" /> Kisah Inspirasi & Refleksi
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">
            Apa Kata Mereka Yang Telah Membaca <span className="text-indigo-400 italic">Aura Reader</span>?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Pengalaman nyata pengguna dalam menemukan kembali kejernihan hati dan ketenangan batin.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[32px] bg-white/5 border border-white/10 space-y-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all glass-panel-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-indigo-400/40" />

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-serif">
                  &quot;{item.story}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
