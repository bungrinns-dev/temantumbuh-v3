<template>
  <section class="section" id="kenapa-kami" style="background:white">
    <div class="container">
      <!-- Founder worldview -->
      <div class="worldview-banner reveal">
        <div class="wv-quote">
          <div class="wv-icon">💡</div>
          <blockquote>
            "Kami percaya UMKM Indonesia tidak kekurangan potensi — hanya belum memiliki sistem digital yang tepat untuk bertumbuh secara modern. Teman Tumbuh hadir untuk menjembatani gap tersebut."
          </blockquote>
          <cite>— Founder, Teman Tumbuh</cite>
        </div>
      </div>

      <div class="why-header text-center" style="margin-top:4rem">
        <div class="label label-center">Kenapa Teman Tumbuh</div>
        <h2 class="section-title">Filosofi Kami:<br><em>Membumikan Transformasi Digital</em><br>untuk Bisnis Lokal</h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3rem">Bukan sekadar vendor yang bikin website lalu pergi. Kami partner pertumbuhan — hadir dari awal hingga bisnis Anda benar-benar berkembang secara digital.</p>
      </div>

      <div class="why-grid">
        <div v-for="(w,i) in whys" :key="i" class="why-card reveal" :class="`reveal-d${(i%3)+1}`">
          <div class="why-num">0{{ i+1 }}</div>
          <h4>{{ w.title }}</h4>
          <p>{{ w.desc }}</p>
        </div>
      </div>

      <!-- Mission statement -->
      <div class="mission-strip reveal">
        <div class="ms-item" v-for="m in mission" :key="m.label">
          <div class="ms-icon">{{ m.icon }}</div>
          <div>
            <strong>{{ m.label }}</strong>
            <span>{{ m.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const whys = [
  { title:'Ramah untuk Non-Teknis', desc:'Tidak perlu paham coding. Kami jelaskan semuanya dengan bahasa bisnis yang mudah dipahami, dari konsultasi hingga sistem live.' },
  { title:'Fokus pada Transformasi Nyata', desc:'Bukan sekadar website cantik. Setiap keputusan desain dan teknis diarahkan pada satu tujuan: pertumbuhan bisnis Anda.' },
  { title:'Proses Cepat 7–14 Hari', desc:'Alur kerja terstruktur dan transparan. Anda tahu apa yang terjadi di setiap tahapan tanpa kejutan dan tanpa biaya tersembunyi.' },
  { title:'Harga yang Masuk Akal', desc:'Investasi yang proporsional dengan hasil. Paket mulai dari Rp 1,9 juta — dirancang agar UMKM serius bisa masuk tanpa perang anggaran.' },
  { title:'Garansi Revisi', desc:'Kami revisi sampai Anda puas. Kepuasan bukan sekadar janji — ini standar minimum yang kami pegang di setiap project.' },
  { title:'Support Setelah Launch', desc:'Kami tidak menghilang setelah sistem live. 30 hari support gratis + panduan pengelolaan lengkap + opsi pendampingan bulanan.' },
  { title:'AI-Ready Architecture', desc:'Sistem yang kami bangun dirancang untuk bisa diintegrasikan dengan AI — chatbot, automasi, personalisasi — saat bisnis Anda siap.' },
  { title:'Pendampingan Pertumbuhan', desc:'Dari konsultasi pertama hingga optimasi bulanan — kami ada di setiap tahap perjalanan digital bisnis Anda.' },
]
const mission = [
  { icon:'🏠', label:'Milik Anda Sepenuhnya', desc:'Bukan bergantung algoritma media sosial' },
  { icon:'🌱', label:'Tumbuh Bersama Bisnis', desc:'Sistem yang bisa berkembang sesuai kebutuhan' },
  { icon:'🤖', label:'Siap untuk Era AI', desc:'Fondasi digital yang future-proof' },
  { icon:'🇮🇩', label:'Untuk Bisnis Lokal', desc:'Dibangun dengan konteks UMKM Indonesia' },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
/* Worldview */
.worldview-banner { background:linear-gradient(135deg,var(--green-800),var(--green-700));border-radius:24px;padding:2.5rem 3rem }
.wv-quote { max-width:700px;margin:0 auto;text-align:center }
.wv-icon { font-size:2.5rem;margin-bottom:1.25rem }
.wv-quote blockquote { font-family:var(--font-display);font-size:clamp(1.1rem,2vw,1.35rem);font-weight:600;color:white;line-height:1.65;font-style:italic;margin-bottom:1.25rem }
.wv-quote cite { font-size:0.82rem;color:rgba(255,255,255,0.55);font-style:normal;font-weight:600 }
/* Grid */
.why-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;margin-bottom:2.5rem }
.why-card { background:var(--gray-50);border-radius:20px;padding:1.75rem;transition:all 0.3s;border:1px solid transparent }
.why-card:hover { background:white;border-color:var(--gray-100);box-shadow:var(--shadow-md);transform:translateY(-2px) }
.why-num { font-family:var(--font-display);font-size:2.8rem;font-weight:700;color:var(--gray-100);line-height:1;margin-bottom:0.75rem }
.why-card h4 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--gray-900);margin-bottom:0.4rem }
.why-card p { font-size:0.82rem;color:var(--gray-500);line-height:1.65 }
/* Mission strip */
.mission-strip { display:grid;grid-template-columns:repeat(4,1fr);gap:1rem }
.ms-item { display:flex;align-items:flex-start;gap:12px;background:var(--gray-50);border-radius:16px;padding:1.25rem }
.ms-icon { font-size:1.5rem;flex-shrink:0 }
.ms-item strong { display:block;font-size:0.875rem;font-weight:700;color:var(--gray-900);margin-bottom:3px }
.ms-item span { font-size:0.78rem;color:var(--gray-400);line-height:1.5 }
@media(max-width:900px) { .mission-strip { grid-template-columns:1fr 1fr } }
@media(max-width:480px) { .mission-strip { grid-template-columns:1fr } .worldview-banner { padding:2rem 1.5rem } }
</style>
