<template>
  <section class="reposition section" id="solusi">
    <div class="container">
      <div class="reposition-inner">
        <div class="reposition-left reveal">
          <div class="label">Perspektif Baru</div>
          <h2 class="section-title">Website Bukan <br>Sekadar <em>Pajangan Digital</em></h2>
          <p class="section-desc" style="margin-bottom:2rem">Website yang tepat adalah <strong>sistem pertumbuhan</strong> untuk bisnis Anda. Setiap elemen dirancang untuk satu tujuan — menghasilkan kepercayaan, visibilitas, dan pelanggan.</p>
          <div class="flow-diagram">
            <div class="flow-step" v-for="(step, i) in flow" :key="i">
              <div class="flow-icon" :style="{ background: step.bg }">{{ step.icon }}</div>
              <div class="flow-content">
                <strong>{{ step.title }}</strong>
                <span>{{ step.desc }}</span>
              </div>
              <div class="flow-arrow" v-if="i < flow.length - 1">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" stroke-width="2" width="20" height="20"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="reposition-right reveal reveal-d2">
          <div class="pillars-grid">
            <div class="pillar-card" v-for="p in pillars" :key="p.title" :class="p.accent">
              <div class="pillar-icon">{{ p.icon }}</div>
              <h4>{{ p.title }}</h4>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const flow = [
  { icon:'👁️', title:'Ditemukan', desc:'Muncul di Google saat pelanggan search', bg:'var(--green-50)' },
  { icon:'✅', title:'Dipercaya', desc:'Tampil profesional, bukan seadanya', bg:'var(--orange-50)' },
  { icon:'💬', title:'Menghubungi', desc:'Langsung chat WhatsApp, mudah closing', bg:'var(--green-50)' },
  { icon:'📈', title:'Bertumbuh', desc:'Lebih banyak pelanggan setiap bulan', bg:'var(--orange-50)' },
]
const pillars = [
  { icon:'🤝', title:'Trust', desc:'Pelanggan menilai bisnis Anda dalam detik pertama.', accent:'pillar-green' },
  { icon:'🔍', title:'Visibility', desc:'Jika tidak muncul di Google, pelanggan pergi ke kompetitor.', accent:'pillar-orange' },
  { icon:'💰', title:'Conversion', desc:'Website harus menghasilkan inquiry, bukan sekadar ada.', accent:'pillar-green' },
  { icon:'🏠', title:'Ownership', desc:'Instagram bukan aset. Website adalah rumah digital Anda.', accent:'pillar-orange' },
]
</script>
<style scoped>
.reposition { background:var(--white) }
.reposition-inner { display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center }
.section-title em { font-style:italic;color:var(--green-600) }
.flow-diagram { display:flex;flex-direction:column;gap:1rem }
.flow-step { display:flex;align-items:center;gap:1rem }
.flow-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0 }
.flow-content { flex:1 }
.flow-content strong { display:block;font-size:0.9rem;font-weight:700;color:var(--gray-900) }
.flow-content span { font-size:0.8rem;color:var(--gray-400) }
.flow-arrow { flex-shrink:0;transform:rotate(90deg) }
.pillars-grid { display:grid;grid-template-columns:1fr 1fr;gap:1rem }
.pillar-card { border-radius:20px;padding:1.75rem;transition:all 0.3s }
.pillar-card:hover { transform:translateY(-3px);box-shadow:var(--shadow-md) }
.pillar-green { background:var(--green-50);border:1px solid var(--green-100) }
.pillar-orange { background:var(--orange-50);border:1px solid var(--orange-100) }
.pillar-icon { font-size:1.75rem;margin-bottom:0.75rem }
.pillar-card h4 { font-family:var(--font-display);font-size:1.05rem;font-weight:700;color:var(--gray-900);margin-bottom:0.4rem }
.pillar-card p { font-size:0.82rem;color:var(--gray-500);line-height:1.6 }
@media(max-width:1024px) { .reposition-inner { grid-template-columns:1fr } }
</style>
