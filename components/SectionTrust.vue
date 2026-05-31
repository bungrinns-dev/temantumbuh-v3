<template>
  <div class="trust-strip">
    <div class="container">
      <p class="strip-label">Dipercaya UMKM dari berbagai industri</p>
      <div class="strip-items">
        <span v-for="item in items" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = ['🛍️ Fashion & Apparel','🍔 Kuliner & F&B','🏠 Properti & Interior','💄 Kecantikan','🎓 Edukasi & Kursus','🔧 Jasa & Servis','🏥 Klinik & Kesehatan']
</script>
<style scoped>
.trust-strip{padding:36px 0;background:var(--gray-50);border-top:1px solid var(--gray-100);border-bottom:1px solid var(--gray-100)}
.strip-label{text-align:center;font-size:0.78rem;color:var(--gray-400);font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:1.25rem}
.strip-items{display:flex;align-items:center;justify-content:center;gap:2.5rem;flex-wrap:wrap;opacity:0.55}
.strip-items span{font-size:0.875rem;font-weight:700;color:var(--gray-500);letter-spacing:-0.01em}
</style>
