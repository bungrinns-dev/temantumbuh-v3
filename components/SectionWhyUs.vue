<template>
  <section class="section" id="kenapa-kami" style="background:white">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Kenapa Teman Tumbuh</div>
        <h2 class="section-title">Bukan Sekadar Vendor.<br><em>Partner Tumbuh Anda.</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3rem">Kami dibangun khusus untuk UMKM — bukan korporat, bukan startup tech. Simple, praktis, fokus pada pertumbuhan bisnis lokal.</p>
      </div>
      <div class="why-grid">
        <div v-for="(w,i) in whys" :key="i" class="why-card reveal" :class="`reveal-d${(i%3)+1}`">
          <div class="why-num">0{{ i+1 }}</div>
          <h4>{{ w.title }}</h4>
          <p>{{ w.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const whys = [
  { title:'Ramah untuk Non-Teknis', desc:'Tidak perlu paham coding atau teknologi. Kami jelaskan semuanya dengan bahasa bisnis yang mudah dipahami.' },
  { title:'Fokus pada Hasil Nyata', desc:'Bukan sekadar website cantik. Setiap elemen dirancang untuk mendorong kepercayaan, visibilitas, dan inquiry.' },
  { title:'Proses Cepat 7–14 Hari', desc:'Alur kerja terstruktur dan transparan. Anda tahu apa yang terjadi di setiap tahapan tanpa kejutan.' },
  { title:'Harga Terjangkau UMKM', desc:'Investasi yang masuk akal dengan hasil yang langsung terasa. Paket mulai dari Rp 1,9 juta.' },
  { title:'Garansi Revisi', desc:'Tidak puas dengan hasilnya? Kami revisi sampai Anda puas. Kepuasan klien adalah standar minimum kami.' },
  { title:'Support Setelah Launch', desc:'Kami tidak menghilang setelah website jadi. 30 hari support gratis + panduan pengelolaan lengkap.' },
  { title:'Mobile-First Design', desc:'70%+ pelanggan Anda browsing dari HP. Website kami dioptimasi untuk mobile sejak tahap desain.' },
  { title:'Pendampingan Berkelanjutan', desc:'Dari konsultasi hingga optimasi berkala — kami ada di setiap tahap pertumbuhan digital bisnis Anda.' },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.why-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem }
.why-card { background:var(--gray-50);border-radius:20px;padding:1.75rem;transition:all 0.3s;border:1px solid transparent }
.why-card:hover { background:white;border-color:var(--gray-100);box-shadow:var(--shadow-md);transform:translateY(-2px) }
.why-num { font-family:var(--font-display);font-size:2.8rem;font-weight:700;color:var(--gray-100);line-height:1;margin-bottom:0.75rem }
.why-card h4 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--gray-900);margin-bottom:0.4rem }
.why-card p { font-size:0.82rem;color:var(--gray-500);line-height:1.65 }
</style>
