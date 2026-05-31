<template>
  <section class="layanan-section section" id="layanan" style="background:var(--gray-50)">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Sistem Digital Kami</div>
        <h2 class="section-title">Bukan Paket Website.<br><em>Sistem Pertumbuhan Digital.</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3rem">Setiap sistem dirancang untuk hasil nyata — bukan sekadar website yang ada.</p>
      </div>
      <div class="layanan-grid">
        <div v-for="(s, i) in services" :key="i" class="layanan-card reveal" :class="[`reveal-d${i+1}`, { featured: s.featured }]">
          <div class="lc-tag" v-if="s.featured">⭐ Paling Populer</div>
          <div class="lc-icon">{{ s.icon }}</div>
          <h3>{{ s.name }}</h3>
          <p class="lc-target">{{ s.target }}</p>
          <ul class="lc-features">
            <li v-for="f in s.features" :key="f">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M20 6L9 17l-5-5"/></svg>
              {{ f }}
            </li>
          </ul>
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
  { icon:'🌱', name:'Starter Growth System', target:'Untuk UMKM yang baru mulai digital', featured:false,
    features:['Website 1–5 halaman','Mobile responsive','Domain + hosting 1 tahun','WhatsApp integration','Google Maps embed','Tutorial penggunaan'] },
  { icon:'🔍', name:'Visibility System', target:'Untuk bisnis yang ingin mudah ditemukan Google', featured:true,
    features:['Multi-page website','Google Business optimization','Local SEO setup','CTA & inquiry funnel','WhatsApp conversion flow','Analytics setup','Copywriting assistance'] },
  { icon:'🚀', name:'Conversion System', target:'Untuk bisnis yang ingin lebih banyak inquiry', featured:false,
    features:['Landing page konversi tinggi','Lead funnel strategy','Advanced CTA optimization','WhatsApp flow automation','Speed optimization','A/B testing halaman'] },
  { icon:'🔄', name:'Growth Support', target:'Pendampingan & maintenance bulanan', featured:false,
    features:['Maintenance rutin','Update konten','SEO lokal berkala','Monthly insight report','WhatsApp support','Optimization berkelanjutan'] },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.layanan-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem }
.layanan-card { background:white;border-radius:22px;padding:2rem;border:1px solid var(--gray-100);transition:all 0.3s;display:flex;flex-direction:column;gap:0;position:relative;overflow:hidden }
.layanan-card::after { content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green-500),var(--orange-400));transform:scaleX(0);transition:transform 0.3s;transform-origin:left }
.layanan-card:hover { border-color:var(--gray-200);box-shadow:var(--shadow-md);transform:translateY(-4px) }
.layanan-card:hover::after { transform:scaleX(1) }
.layanan-card.featured { border-color:var(--green-200);background:linear-gradient(160deg,var(--green-50),white) }
.lc-tag { background:var(--green-600);color:white;font-size:0.65rem;font-weight:800;letter-spacing:0.08em;padding:4px 12px;border-radius:50px;display:inline-block;margin-bottom:1rem }
.lc-icon { font-size:2.2rem;margin-bottom:1rem }
.layanan-card h3 { font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--gray-900);margin-bottom:0.35rem }
.lc-target { font-size:0.82rem;color:var(--gray-400);margin-bottom:1.25rem;line-height:1.5 }
.lc-features { list-style:none;display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1.75rem;flex:1 }
.lc-features li { display:flex;align-items:flex-start;gap:8px;font-size:0.82rem;color:var(--gray-600);line-height:1.45 }
.lc-features li svg { color:var(--green-500);flex-shrink:0;margin-top:2px }
</style>
