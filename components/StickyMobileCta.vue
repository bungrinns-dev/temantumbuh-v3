<template>
  <div class="sticky-mobile">
    <a href="https://wa.me/6281234567890?text=Halo%20Teman%20Tumbuh%2C%20saya%20ingin%20konsultasi%20gratis">💬 Konsultasi Gratis via WhatsApp</a>
  </div>
</template>
<style scoped>
.sticky-mobile{display:none;position:fixed;bottom:0;left:0;right:0;z-index:150;padding:12px 16px;background:white;border-top:1px solid var(--gray-100);box-shadow:0 -4px 20px rgba(0,0,0,0.08)}
.sticky-mobile a{display:block;background:var(--green-600);color:white;text-align:center;padding:14px;border-radius:14px;font-weight:700;font-size:0.95rem}
@media(max-width:768px){.sticky-mobile{display:block}}
</style>
