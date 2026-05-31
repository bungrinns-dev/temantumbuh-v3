<template>
  <section class="problem-section section" id="masalah">
    <div class="container">
      <div class="text-center">
        <div class="label label-center label-orange">Kenali Masalahnya</div>
        <h2 class="section-title section-title-white">Mengapa Banyak UMKM <em class="em-orange">Sulit Bertumbuh</em><br>Secara Digital?</h2>
        <p class="section-desc section-desc-center" style="color:rgba(255,255,255,0.5);margin-bottom:3rem">Bukan soal produk Anda. Ini soal <strong style="color:rgba(255,255,255,0.8)">kepercayaan</strong>, <strong style="color:rgba(255,255,255,0.8)">visibilitas</strong>, dan <strong style="color:rgba(255,255,255,0.8)">sistem digital</strong> yang belum optimal.</p>
      </div>
      <div class="problem-grid">
        <div v-for="(p, i) in problems" :key="i" class="problem-card reveal" :class="`reveal-d${(i%4)+1}`">
          <div class="problem-emoji">{{ p.emoji }}</div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
      <div class="problem-stat-row reveal">
        <div class="stat-block" v-for="s in stats" :key="s.num">
          <div class="stat-num">{{ s.num }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const problems = [
  { emoji:'📱', title:'Hanya Andalkan Instagram', desc:'Calon pelanggan sulit temukan info lengkap dan akhirnya pergi ke kompetitor yang punya website.' },
  { emoji:'🔍', title:'Tidak Muncul di Google', desc:'Saat pelanggan search produk Anda, nama bisnis tidak ada. Ratusan peluang hilang setiap bulan.' },
  { emoji:'😟', title:'Terlihat Kurang Profesional', desc:'84% konsumen menganggap bisnis tanpa website kurang terpercaya dibanding yang sudah punya.' },
  { emoji:'💬', title:'Capek Jawab Pertanyaan Sama', desc:'Harga, katalog, lokasi — ditanya berulang setiap hari. Website menjawab semuanya otomatis.' },
  { emoji:'🚫', title:'Tidak Punya Aset Digital', desc:'Instagram bisa down, akun bisa banned. Website adalah aset digital yang 100% milik Anda.' },
  { emoji:'📉', title:'Kalah Saing Kompetitor', desc:'Kompetitor sudah punya digital presence. Setiap hari tanpa website adalah hari mereka selangkah lebih maju.' },
]
const stats = [
  { num:'84%', label:'konsumen lebih percaya bisnis yang punya website' },
  { num:'7–15', label:'calon pelanggan hilang per hari tanpa digital presence' },
  { num:'3×', label:'lebih banyak inquiry setelah punya website profesional' },
]
onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>
<style scoped>
.problem-section { background:var(--gray-900) }
.em-orange { font-style:italic;color:var(--orange-400) }
.problem-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin-bottom:3rem }
.problem-card { background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:20px;padding:1.75rem;transition:all 0.3s }
.problem-card:hover { background:rgba(255,255,255,0.07);border-color:rgba(255,255,255,0.14);transform:translateY(-2px) }
.problem-emoji { font-size:1.75rem;margin-bottom:1rem }
.problem-card h3 { font-family:var(--font-display);font-size:1.05rem;font-weight:700;color:white;margin-bottom:0.5rem }
.problem-card p { font-size:0.875rem;color:rgba(255,255,255,0.45);line-height:1.65 }
.problem-stat-row { display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;background:rgba(245,149,32,0.08);border:1px solid rgba(245,149,32,0.18);border-radius:20px;padding:2.5rem }
.stat-block { text-align:center }
.stat-num { font-family:var(--font-display);font-size:2.5rem;font-weight:700;color:var(--orange-400);line-height:1;margin-bottom:0.5rem }
.stat-label { font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.5 }
@media(max-width:640px) { .problem-stat-row { grid-template-columns:1fr } }
</style>
