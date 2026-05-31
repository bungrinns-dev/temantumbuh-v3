<template>
  <section class="layanan-section section" id="layanan" style="background:var(--gray-50)">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Sistem Digital Kami</div>
        <h2 class="section-title">Bukan Paket Website.<br><em>Journey Transformasi Digital.</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:1rem">Setiap sistem dirancang sebagai tahapan pertumbuhan — bukan sekadar produk yang berdiri sendiri.</p>
        <!-- Journey indicator -->
        <div class="journey-bar">
          <div class="journey-step" v-for="(s,i) in services" :key="i">
            <div class="jb-dot" :class="`jb-${i+1}`">{{ i+1 }}</div>
            <span>{{ s.shortName }}</span>
            <div class="jb-line" v-if="i < services.length - 1"></div>
          </div>
        </div>
      </div>
      <div class="layanan-grid">
        <div v-for="(s, i) in services" :key="i" class="layanan-card reveal" :class="[`reveal-d${i+1}`, { featured: s.featured }]">
          <div class="lc-badge" v-if="s.featured">⭐ Paling Direkomendasikan</div>
          <div class="lc-step">Tahap {{ i + 1 }}</div>
          <div class="lc-icon">{{ s.icon }}</div>
          <h3>{{ s.name }}</h3>
          <p class="lc-target">{{ s.target }}</p>
          <ul class="lc-features">
            <li v-for="f in s.features" :key="f">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M20 6L9 17l-5-5"/></svg>
              {{ f }}
            </li>
          </ul>
          <div class="lc-outcome">
            <span class="lc-outcome-label">Outcome:</span> {{ s.outcome }}
          </div>
          <a href="https://wa.me/6281234567890" class="btn" :class="s.featured ? 'btn-primary' : 'btn-secondary'" style="width:100%;justify-content:center;margin-top:auto">
            Tanya Sekarang
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const services = [
  {
    icon:'🌱', shortName:'Foundation', name:'Digital Foundation System',
    target:'Untuk UMKM yang baru membangun kehadiran digital', featured:false,
    outcome:'Bisnis Anda terlihat profesional dan mudah dihubungi',
    features:['Website 1–5 halaman','Mobile responsive','Domain + hosting 1 tahun','WhatsApp integration','Google Maps embed','Tutorial penggunaan']
  },
  {
    icon:'🔍', shortName:'Visibility', name:'Market Visibility System',
    target:'Untuk bisnis yang ingin mudah ditemukan & dipercaya', featured:true,
    outcome:'Pelanggan menemukan bisnis Anda sebelum kompetitor',
    features:['Multi-page website','Google Business optimization','Local SEO setup','CTA & inquiry funnel','WhatsApp conversion flow','Analytics setup','Copywriting assistance']
  },
  {
    icon:'🚀', shortName:'Conversion', name:'Growth Conversion System',
    target:'Untuk bisnis yang ingin lebih banyak inquiry & closing', featured:false,
    outcome:'Sistem yang mengubah pengunjung menjadi pelanggan',
    features:['Landing page konversi tinggi','Lead funnel strategy','Advanced CTA optimization','WhatsApp flow automation','A/B testing halaman','Speed optimization']
  },
  {
    icon:'🔄', shortName:'Scale', name:'Growth Support System',
    target:'Pendampingan berkelanjutan untuk terus bertumbuh', featured:false,
    outcome:'Sistem digital yang terus dioptimasi setiap bulan',
    features:['Maintenance & update rutin','SEO lokal berkala','Monthly performance insight','AI chatbot integration','WhatsApp support','Optimization berkelanjutan']
  },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
/* Journey bar */
.journey-bar { display:flex;align-items:center;justify-content:center;gap:0;margin:1.75rem auto 2.5rem;max-width:600px;flex-wrap:wrap;gap:0 }
.journey-step { display:flex;align-items:center;gap:0 }
.jb-dot { width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;color:white;flex-shrink:0 }
.jb-1{background:var(--green-400)}.jb-2{background:var(--green-600)}.jb-3{background:var(--orange-500)}.jb-4{background:var(--orange-400)}
.journey-step span { font-size:0.75rem;font-weight:700;color:var(--gray-500);padding:0 10px }
.jb-line { width:30px;height:2px;background:var(--gray-200) }
/* Cards */
.layanan-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem }
.layanan-card { background:white;border-radius:22px;padding:2rem;border:1px solid var(--gray-100);transition:all 0.3s;display:flex;flex-direction:column;gap:0;position:relative;overflow:hidden }
.layanan-card::after { content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green-500),var(--orange-400));transform:scaleX(0);transition:transform 0.3s;transform-origin:left }
.layanan-card:hover { border-color:var(--gray-200);box-shadow:var(--shadow-md);transform:translateY(-4px) }
.layanan-card:hover::after { transform:scaleX(1) }
.layanan-card.featured { border-color:var(--green-200);background:linear-gradient(160deg,var(--green-50),white) }
.lc-badge { background:var(--green-600);color:white;font-size:0.65rem;font-weight:800;letter-spacing:0.08em;padding:4px 12px;border-radius:50px;display:inline-block;margin-bottom:0.5rem }
.lc-step { font-size:0.7rem;font-weight:700;color:var(--gray-400);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:0.5rem }
.lc-icon { font-size:2.2rem;margin-bottom:0.875rem }
.layanan-card h3 { font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--gray-900);margin-bottom:0.35rem }
.lc-target { font-size:0.82rem;color:var(--gray-400);margin-bottom:1.25rem;line-height:1.5 }
.lc-features { list-style:none;display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1.25rem;flex:1 }
.lc-features li { display:flex;align-items:flex-start;gap:8px;font-size:0.82rem;color:var(--gray-600);line-height:1.45 }
.lc-features li svg { color:var(--green-500);flex-shrink:0;margin-top:2px }
.lc-outcome { background:var(--green-50);border:1px solid var(--green-100);border-radius:10px;padding:0.75rem;font-size:0.78rem;color:var(--green-800);line-height:1.55;margin-bottom:1.25rem }
.lc-outcome-label { font-weight:800 }
</style>
