<template>
  <section class="ai-section section" id="teknologi">
    <div class="container">
      <div class="ai-inner">
        <div class="ai-left reveal">
          <div class="label label-white">Teknologi & AI</div>
          <h2 class="section-title section-title-white">Membumikan AI<br>untuk <em>Bisnis Lokal</em></h2>
          <p style="color:rgba(255,255,255,0.65);font-size:1.05rem;line-height:1.8;margin-bottom:2rem">Kami tidak percaya AI hanya untuk startup Silicon Valley. AI yang tepat, diimplementasikan dengan cara yang sederhana, bisa menjadi leverage luar biasa untuk UMKM Indonesia.</p>
          <p style="color:rgba(255,255,255,0.5);font-size:0.9rem;line-height:1.75;margin-bottom:2rem">Kami tidak memaksakan AI jika belum dibutuhkan. Tapi kami memastikan sistem digital yang kami bangun <strong style="color:rgba(255,255,255,0.8)">siap diintegrasikan</strong> ketika bisnis Anda siap naik level.</p>
          <a href="https://wa.me/6281234567890?text=Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20AI%20untuk%20bisnis%20saya" class="btn btn-outline-white">
            Pelajari Lebih Lanjut
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="ai-right reveal reveal-d2">
          <div class="ai-cards">
            <div class="ai-card" v-for="f in features" :key="f.title">
              <div class="ai-card-icon">{{ f.icon }}</div>
              <div>
                <h4>{{ f.title }}</h4>
                <p>{{ f.desc }}</p>
                <div class="ai-status" :class="f.status">{{ f.statusLabel }}</div>
              </div>
            </div>
          </div>
          <div class="ai-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            Fitur AI ditambahkan secara bertahap sesuai kesiapan dan kebutuhan bisnis Anda — tidak dipaksakan, tidak membingungkan.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const features = [
  { icon:'💬', title:'AI Chatbot untuk Bisnis', desc:'Jawab pertanyaan pelanggan otomatis 24/7 — harga, stok, lokasi, cara order. Tanpa harus standby terus.', status:'available', statusLabel:'✅ Tersedia' },
  { icon:'✍️', title:'AI-Assisted Content', desc:'Bantu tulis deskripsi produk, caption media sosial, dan halaman website yang lebih persuasif.', status:'available', statusLabel:'✅ Tersedia' },
  { icon:'🔄', title:'Workflow Automation', desc:'Otomatisasi follow-up, pengiriman info, dan notifikasi — sistem bekerja bahkan saat Anda tidur.', status:'soon', statusLabel:'🔜 Segera' },
  { icon:'📊', title:'Smart Business Insight', desc:'Dashboard sederhana yang menunjukkan dari mana pelanggan datang dan konten mana yang paling efektif.', status:'soon', statusLabel:'🔜 Segera' },
]
</script>
<style scoped>
.ai-section { background:var(--gray-900) }
.ai-inner { display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start }
.section-title em { font-style:italic;color:var(--orange-400) }
.ai-cards { display:flex;flex-direction:column;gap:1rem;margin-bottom:1rem }
.ai-card { background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem 1.5rem;display:flex;gap:1rem;align-items:flex-start;transition:all 0.3s }
.ai-card:hover { background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.14) }
.ai-card-icon { font-size:1.5rem;flex-shrink:0;margin-top:2px }
.ai-card h4 { font-family:var(--font-display);font-size:0.95rem;font-weight:700;color:white;margin-bottom:0.35rem }
.ai-card p { font-size:0.8rem;color:rgba(255,255,255,0.5);line-height:1.6;margin-bottom:0.6rem }
.ai-status { display:inline-block;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:50px }
.ai-status.available { background:rgba(76,175,111,0.2);color:var(--green-400) }
.ai-status.soon { background:rgba(245,149,32,0.2);color:var(--orange-400) }
.ai-note { display:flex;align-items:flex-start;gap:8px;font-size:0.78rem;color:rgba(255,255,255,0.35);line-height:1.65;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:1rem }
.ai-note svg { flex-shrink:0;margin-top:2px }
@media(max-width:1024px) { .ai-inner { grid-template-columns:1fr } }
</style>
