<template>
  <section class="harga-section section" id="harga" style="background:white">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Investasi</div>
        <h2 class="section-title">Harga yang <em>Masuk Akal</em>,<br>Hasil yang Nyata</h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3rem">Kami tidak menjual website murah. Kami menjual sistem digital yang menghasilkan kepercayaan dan pelanggan untuk bisnis Anda.</p>
      </div>
      <div class="harga-grid">
        <div v-for="(p, i) in packages" :key="i" class="harga-card" :class="{ featured: p.featured }">
          <div class="hc-badge" v-if="p.featured">⭐ Paling Direkomendasikan</div>
          <div class="hc-top">
            <h3>{{ p.name }}</h3>
            <p class="hc-target">{{ p.target }}</p>
            <div class="hc-price">
              <span class="price-from">Mulai dari</span>
              <div class="price-num">{{ p.price }}</div>
            </div>
          </div>
          <ul class="hc-features">
            <li v-for="f in p.features" :key="f">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M20 6L9 17l-5-5"/></svg>
              {{ f }}
            </li>
          </ul>
          <a href="https://wa.me/6281234567890" class="btn" :class="p.featured ? 'btn-primary' : 'btn-secondary'" style="width:100%;justify-content:center">
            {{ p.featured ? 'Mulai Sekarang' : 'Tanya Detail' }}
          </a>
          <p class="hc-note">{{ p.note }}</p>
        </div>
      </div>
      <div class="harga-note reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="2" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Semua paket sudah termasuk <strong>domain .com 1 tahun</strong>, <strong>hosting 1 tahun</strong>, <strong>garansi revisi</strong>, dan <strong>30 hari support</strong> setelah launch.
      </div>
    </div>
  </section>
</template>
<script setup>
const packages = [
  { name:'Starter Growth System', target:'UMKM yang baru mulai digital', price:'Rp 1,9 jt', featured:false,
    note:'Termasuk domain + hosting 1 tahun',
    features:['Website 1–5 halaman','Mobile responsive','WhatsApp integration','Google Maps embed','Basic SEO','Tutorial penggunaan'] },
  { name:'Visibility System', target:'Bisnis yang ingin mudah ditemukan', price:'Rp 4 jt', featured:true,
    note:'Paling banyak dipilih klien kami',
    features:['Multi-page website','Google Business optimization','Local SEO setup','CTA & inquiry funnel','WhatsApp conversion flow','Analytics setup','Copywriting assistance','Speed optimization'] },
  { name:'Growth System', target:'Bisnis yang ingin scale lebih serius', price:'Rp 7 jt', featured:false,
    note:'Harga menyesuaikan kompleksitas fitur',
    features:['Custom features & system','Booking / lead system','Advanced SEO','AI chatbot dasar','Conversion optimization','Consultation strategis'] },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.harga-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-bottom:2rem }
.harga-card { background:var(--gray-50);border:1px solid var(--gray-100);border-radius:22px;padding:2rem;display:flex;flex-direction:column;gap:0;position:relative;transition:all 0.3s }
.harga-card:hover { box-shadow:var(--shadow-md);transform:translateY(-3px) }
.harga-card.featured { background:white;border-color:var(--green-200);box-shadow:var(--shadow-md) }
.hc-badge { background:var(--green-600);color:white;font-size:0.65rem;font-weight:800;padding:4px 12px;border-radius:50px;display:inline-block;margin-bottom:1rem;letter-spacing:0.06em }
.hc-top { margin-bottom:1.5rem }
.hc-top h3 { font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--gray-900);margin-bottom:0.35rem }
.hc-target { font-size:0.8rem;color:var(--gray-400);margin-bottom:1.25rem;line-height:1.5 }
.price-from { font-size:0.75rem;color:var(--gray-400);font-weight:500 }
.price-num { font-family:var(--font-display);font-size:2.2rem;font-weight:700;color:var(--green-700);line-height:1.1 }
.hc-features { list-style:none;display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1.5rem;flex:1 }
.hc-features li { display:flex;align-items:flex-start;gap:8px;font-size:0.82rem;color:var(--gray-600);line-height:1.45 }
.hc-features li svg { color:var(--green-500);flex-shrink:0;margin-top:2px }
.hc-note { font-size:0.72rem;color:var(--gray-400);text-align:center;margin-top:0.75rem }
.harga-note { display:flex;align-items:center;gap:10px;background:var(--green-50);border:1px solid var(--green-100);border-radius:14px;padding:1.25rem 1.5rem;font-size:0.875rem;color:var(--green-800);line-height:1.6 }
.harga-note svg { flex-shrink:0 }
@media(max-width:900px) { .harga-grid { grid-template-columns:1fr } }
</style>
