<template>
  <section class="section" id="faq" style="background:var(--gray-50)">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">FAQ</div>
        <h2 class="section-title">Pertanyaan yang Sering<br><em>Ditanyakan</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:3rem">Masih ada pertanyaan? Chat langsung via WhatsApp — kami respons dalam 1 jam.</p>
      </div>
      <div class="faq-list">
        <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openIdx === i }">
          <button class="faq-q" @click="openIdx = openIdx === i ? null : i">
            {{ faq.q }}
            <span class="faq-icon">{{ openIdx === i ? '−' : '+' }}</span>
          </button>
          <div class="faq-a">
            <p>{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const openIdx = ref(0)
const faqs = [
  { q:'Berapa harga pembuatan website?', a:'Paket kami mulai dari Rp 1,9 juta untuk Starter Growth System hingga Rp 7 juta ke atas untuk Growth System. Semua paket sudah termasuk domain .com 1 tahun, hosting 1 tahun, desain custom, dan garansi revisi. Hubungi kami untuk penawaran sesuai kebutuhan Anda.' },
  { q:'Berapa lama proses pembuatannya?', a:'Starter Growth System selesai 7–10 hari kerja. Visibility System dan Conversion System 10–14 hari. Growth System dengan fitur custom 3–4 minggu. Timeline dimulai setelah seluruh materi konten diterima dari Anda.' },
  { q:'Apakah saya bisa update konten sendiri?', a:'Ya! Semua website kami dilengkapi panduan lengkap cara update konten mandiri — tanpa harus paham coding. Untuk update rutin, kami juga menyediakan paket Growth Support bulanan jika Anda ingin kami yang handle.' },
  { q:'Sudah termasuk domain dan hosting?', a:'Ya, semua paket sudah termasuk domain .com atau .co.id 1 tahun dan hosting cepat + aman selama 1 tahun. Tahun berikutnya bisa Anda perpanjang sendiri atau minta bantuan kami.' },
  { q:'Bagaimana proses revisi?', a:'Setiap paket mendapat minimum 2 putaran revisi gratis setelah mockup desain dan setelah website selesai. Revisi mencakup perubahan konten, warna, layout, dan elemen desain. 30 hari support teknis gratis setelah launch.' },
  { q:'Apakah Teman Tumbuh bisa bantu Google Business?', a:'Ya! Paket Visibility System dan Growth System sudah termasuk setup dan optimasi Google Business Profile supaya bisnis Anda muncul di Google Maps dan pencarian lokal. Ini salah satu cara tercepat meningkatkan visibilitas UMKM.' },
  { q:'Bagaimana jika saya tidak puas?', a:'Kami revisi sampai Anda puas — itu komitmen kami. Jika setelah semua revisi masih tidak memuaskan, kami akan diskusikan solusi terbaik. Kepuasan klien adalah standar minimum, bukan bonus.' },
]
</script>
<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.faq-list { max-width:740px;margin:0 auto }
.faq-item { border-bottom:1px solid var(--gray-100) }
.faq-q { width:100%;background:none;border:none;text-align:left;padding:1.3rem 0;display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-family:var(--font-display);font-size:1rem;font-weight:600;color:var(--gray-900);gap:1rem;transition:color 0.2s }
.faq-q:hover { color:var(--green-600) }
.faq-icon { width:28px;height:28px;border-radius:50%;background:var(--gray-50);border:1px solid var(--gray-200);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;color:var(--gray-500);transition:all 0.3s }
.faq-item.open .faq-icon { background:var(--green-50);border-color:var(--green-200);color:var(--green-600) }
.faq-a { max-height:0;overflow:hidden;transition:max-height 0.35s ease }
.faq-a p { padding-bottom:1.25rem;font-size:0.9rem;color:var(--gray-500);line-height:1.75 }
.faq-item.open .faq-a { max-height:200px }
</style>
