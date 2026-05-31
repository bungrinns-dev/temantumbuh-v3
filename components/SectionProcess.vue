<template>
  <section class="section" id="proses" style="background:var(--gray-50)">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Cara Kerja</div>
        <h2 class="section-title">Mulai Tanpa Ribet<br><em>dalam 4 Langkah</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3.5rem">Proses yang jelas dan transparan. Tidak ada kejutan, tidak ada biaya tersembunyi.</p>
      </div>
      <div class="process-grid">
        <div v-for="(step, i) in steps" :key="i" class="process-step reveal" :class="`reveal-d${i+1}`">
          <div class="step-circle" :class="`sc-${i+1}`">{{ i+1 }}</div>
          <div class="step-connector" v-if="i < steps.length - 1"></div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
          <div class="step-duration">{{ step.duration }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const steps = [
  { title:'Konsultasi Gratis', desc:'Ceritakan bisnis dan kebutuhan Anda. Kami analisa dan rekomendasikan sistem yang paling tepat — tanpa komitmen.', duration:'Hari 1' },
  { title:'Desain & Persetujuan', desc:'Tim kami buat mockup sesuai brand Anda. Review, beri masukan, kami sempurnakan sampai Anda puas.', duration:'Hari 2–4' },
  { title:'Development', desc:'Desain yang disetujui kami build menjadi website cepat, responsif, dan dioptimasi untuk SEO dan konversi.', duration:'Hari 5–12' },
  { title:'Launch & Pendampingan', desc:'Website live! Panduan lengkap diserahkan. 30 hari support WhatsApp gratis setelah launch.', duration:'Hari 13–14' },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.process-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative }
.process-grid::before { content:'';position:absolute;top:36px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,var(--green-300),var(--orange-300));z-index:0 }
.process-step { text-align:center;position:relative;z-index:1;padding:0 1rem }
.step-circle { width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-family:var(--font-display);font-weight:700;font-size:1.4rem;border:3px solid white;box-shadow:var(--shadow-md) }
.sc-1{background:var(--green-700);color:white}.sc-2{background:var(--green-500);color:white}.sc-3{background:var(--orange-500);color:white}.sc-4{background:var(--orange-400);color:white}
.process-step h4 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--gray-900);margin-bottom:0.5rem }
.process-step p { font-size:0.82rem;color:var(--gray-500);line-height:1.65;margin-bottom:0.75rem }
.step-duration { display:inline-block;background:var(--green-50);color:var(--green-700);font-size:0.72rem;font-weight:700;padding:4px 12px;border-radius:50px;border:1px solid var(--green-100) }
@media(max-width:768px) { .process-grid { grid-template-columns:1fr 1fr } .process-grid::before { display:none } }
@media(max-width:480px) { .process-grid { grid-template-columns:1fr } }
</style>
