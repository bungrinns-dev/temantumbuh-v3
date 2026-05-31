<template>
  <section class="recurring-section section" id="recurring">
    <div class="container">
      <div class="recurring-inner">
        <div class="recurring-left reveal">
          <div class="label label-white">Jangan Berhenti di Launch</div>
          <h2 class="section-title section-title-white">Website Live Bukan Akhir —<br><em>Ini Baru Awal</em></h2>
          <p style="color:rgba(255,255,255,0.6);font-size:1.05rem;line-height:1.75;margin-bottom:2rem">Bisnis digital yang tumbuh butuh optimasi berkelanjutan. Kami hadir setiap bulan untuk memastikan sistem digital Anda terus bekerja dan berkembang.</p>
          <a href="https://wa.me/6281234567890?text=Saya%20tertarik%20paket%20Growth%20Support" class="btn btn-white btn-lg">Tanya Paket Bulanan</a>
        </div>
        <div class="recurring-right reveal reveal-d2">
          <div class="recurring-cards">
            <div v-for="p in plans" :key="p.name" class="rc-card">
              <div class="rc-header">
                <h4>{{ p.name }}</h4>
                <div class="rc-price">{{ p.price }}<span>/bulan</span></div>
              </div>
              <ul>
                <li v-for="f in p.features" :key="f">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green-400)" stroke-width="2.5" width="13" height="13"><path d="M20 6L9 17l-5-5"/></svg>
                  {{ f }}
                </li>
              </ul>
            </div>
          </div>
          <p class="recurring-note">💡 Klien yang berlangganan Growth Support rata-rata melihat peningkatan inquiry 40% lebih banyak dalam 3 bulan pertama.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const plans = [
  { name:'Care', price:'Rp 299rb', features:['Maintenance & backup','Update ringan','Support WhatsApp'] },
  { name:'Growth', price:'Rp 749rb', features:['SEO lokal berkala','Update konten','Google Business update','Monthly insight'] },
  { name:'Scale', price:'Rp 1,9 jt', features:['Conversion optimization','Funnel optimization','AI chatbot','Strategic consultation'] },
]
</script>
<style scoped>
.recurring-section { background:var(--green-800) }
.recurring-inner { display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center }
.section-title em { font-style:italic;color:var(--orange-300,#ffd080) }
.recurring-cards { display:flex;flex-direction:column;gap:1rem }
.rc-card { background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:1.25rem 1.5rem }
.rc-header { display:flex;align-items:center;justify-content:space-between;margin-bottom:0.875rem }
.rc-header h4 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:white }
.rc-price { font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--orange-400) }
.rc-price span { font-size:0.75rem;color:rgba(255,255,255,0.5);font-family:var(--font-body);font-weight:400 }
.rc-card ul { list-style:none;display:flex;flex-direction:column;gap:0.45rem }
.rc-card li { display:flex;align-items:center;gap:8px;font-size:0.8rem;color:rgba(255,255,255,0.6) }
.recurring-note { margin-top:1.25rem;font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.65;background:rgba(245,149,32,0.1);border:1px solid rgba(245,149,32,0.2);border-radius:12px;padding:1rem }
@media(max-width:1024px) { .recurring-inner { grid-template-columns:1fr } }
</style>
