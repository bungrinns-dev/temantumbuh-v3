<template>
  <a href="https://wa.me/6281234567890?text=Halo%20Teman%20Tumbuh%2C%20saya%20ingin%20konsultasi%20gratis" class="wa-float" target="_blank" rel="noopener">
    <span class="wa-tooltip">Chat konsultasi gratis</span>
    <div class="wa-btn">
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.105 1.524 5.828L.055 23.09a.75.75 0 00.91.91l5.272-1.468A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.697-.497-5.248-1.365l-.376-.21-3.896 1.085 1.086-3.884-.22-.385A9.972 9.972 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
    </div>
  </a>
</template>
<style scoped>
.wa-float{position:fixed;bottom:28px;right:28px;z-index:200;display:flex;align-items:center}
.wa-btn{width:56px;height:56px;background:#25d366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(37,211,102,0.4);transition:all 0.3s;flex-shrink:0}
.wa-btn:hover{transform:scale(1.1);box-shadow:0 8px 30px rgba(37,211,102,0.5)}
.wa-tooltip{background:var(--gray-900);color:white;font-size:0.78rem;font-weight:600;padding:8px 14px;border-radius:10px;margin-right:10px;white-space:nowrap;opacity:0;transform:translateX(10px);transition:all 0.3s;pointer-events:none}
.wa-float:hover .wa-tooltip{opacity:1;transform:translateX(0)}
@media(max-width:768px){.wa-float{bottom:80px}}
</style>
