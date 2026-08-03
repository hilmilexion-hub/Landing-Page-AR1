import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Aura Reader - Yayasan Nur Qolbu" });
});

// Mini AI Aura Reflection API Endpoint
app.post("/api/aura/analyze", async (req, res) => {
  try {
    const { name, feeling, focus, birthDate } = req.body;

    if (!name) {
      res.status(400).json({ error: "Nama wajib diisi." });
      return;
    }

    const prompt = `
Kamu adalah asisten refleksi batin dan analisis spiritual emosional "Aura Reader" oleh Yayasan Nur Qolbu.
Pengguna memberikan data berikut:
- Nama: ${name}
- Kondisi/Perasaan Saat Ini: ${feeling || 'Perlunya ketenangan batin'}
- Fokus Utama Kehidupan: ${focus || 'Pengembangan Diri & Ketenangan Batin'}
- Tanggal Lahir (opsional): ${birthDate || 'Tidak disebutkan'}

Tugasmu adalah memberikan Refleksi Aura Mini & Analisis Batin Ringkas (teaser preview).
Harap buat analisis yang humanis, edukatif, santun, Islami/spiritual yang menenangkan, dan inspiratif.
Penting: Tekankan bahwa ini adalah refleksi batin berbasis data inputan untuk introspeksi diri dan mendekatkan diri kepada Allah SWT.

Kembalikan jawaban dalam format JSON persis sesuai struktur berikut:
{
  "dominantAuraColor": "string (contoh: 'Violet Spiritual', 'Nila Kebijaksanaan', 'Emas Kedamaian', 'Hijau Keseimbangan', 'Biru Kejujuran')",
  "hexColor": "string hex color untuk visualisasi aura (contoh: '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EC4899')",
  "secondaryAuraColor": "string warna sekunder",
  "innerConditionSummary": "string 2-3 kalimat penjelasan kondisi emosional & potensi batin saat ini",
  "spiritualReflectionQuote": "string 1 kalimat zikir/renungan/pesan inspirasi batin yang menyejukkan hati",
  "strengths": ["string kekuatan batin 1", "string kekuatan batin 2", "string kekuatan batin 3"],
  "focusAreas": ["string poin refleksi 1", "string poin refleksi 2"],
  "teaserRecommendation": "string 1-2 kalimat saran untuk mendapatkan Laporan Lengkap 15+ Halaman Aura Reader Yayasan Nur Qolbu"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: "Kamu adalah pakar refleksi batin dan spiritualitas humanis Yayasan Nur Qolbu. Berikan respon dalam JSON yang indah, menyentuh, santun, dan menenangkan.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            dominantAuraColor: { type: Type.STRING },
            hexColor: { type: Type.STRING },
            secondaryAuraColor: { type: Type.STRING },
            innerConditionSummary: { type: Type.STRING },
            spiritualReflectionQuote: { type: Type.STRING },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            focusAreas: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            teaserRecommendation: { type: Type.STRING }
          },
          required: [
            "dominantAuraColor",
            "hexColor",
            "secondaryAuraColor",
            "innerConditionSummary",
            "spiritualReflectionQuote",
            "strengths",
            "focusAreas",
            "teaserRecommendation"
          ]
        }
      }
    });

    const jsonText = response.text || "{}";
    const parsedData = JSON.parse(jsonText);
    res.json(parsedData);
  } catch (err: any) {
    console.error("Error generating aura reflection:", err);
    // Fallback response if API key is missing or errored
    res.json({
      dominantAuraColor: "Violet Kedamaian & Emas Kebijaksanaan",
      hexColor: "#8B5CF6",
      secondaryAuraColor: "#F59E0B",
      innerConditionSummary: `Berdasarkan refleksi batin ${req.body.name || 'Anda'}, terpancar energi pencarian kedamaian dan kerinduan akan ketenangan spiritual. Anda memiliki intuisi yang peka dan potensi besar untuk mengalirkan kebaikan.`,
      spiritualReflectionQuote: `"Ketahuilah, hanya dengan mengingat Allah hati menjadi tenang." (QS. Ar-Ra'd: 28)`,
      strengths: ["Keahlian empati mendalam", "Semangat introspeksi diri", "Kebijaksanaan mengelola emosi"],
      focusAreas: ["Menjaga konsistensi zikir batin", "Menyeimbangkan kesibukan duniawi & ketenangan jiwa"],
      teaserRecommendation: "Untuk membuka peta energi batin secara utuh beserta panduan spiritual 15+ halaman, unduh laporan lengkap Aura Reader."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Aura Reader running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
