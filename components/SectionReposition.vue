<template>
  <section class="reposition section" id="solusi">
    <div class="container">
      <div class="reposition-inner">
        <div class="reposition-left reveal">
          <div class="label">Ubah Cara Pandang</div>
          <h2 class="section-title">Sistem Digital yang<br><em>Benar-Benar Bekerja</em><br>untuk Bisnis Anda</h2>
          <p class="section-desc" style="margin-bottom:2rem">Website bukan tujuan — <strong>sistem pertumbuhan</strong> adalah tujuannya. Setiap elemen dirancang agar bisnis Anda lebih dipercaya, lebih terstruktur, dan lebih siap bertumbuh di era AI.</p>
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
          <div class="ai-callout">
            <div class="ai-callout-icon">🤖</div>
            <div>
              <strong>Dibangun untuk Era AI</strong>
              <p>Sistem digital Anda dirancang agar siap diintegrasikan dengan AI — dari chatbot otomatis hingga personalisasi konten — saat bisnis Anda siap naik level.</p>
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
  { icon:'✅', title:'Dipercaya', desc:'Tampil profesional, berkesan premium', bg:'var(--orange-50)' },
  { icon:'💬', title:'Menghubungi', desc:'Langsung WhatsApp, proses closing mudah', bg:'var(--green-50)' },
  { icon:'📈', title:'Bertumbuh', desc:'Lebih banyak pelanggan, lebih terstruktur', bg:'var(--orange-50)' },
  { icon:'🤖', title:'Terautomasi', desc:'Sistem bekerja bahkan saat Anda tidur', bg:'var(--green-50)' },
]
const pillars = [
  { icon:'🤝', title:'Trust', desc:'Pelanggan menilai bisnis Anda dalam detik pertama. Tampil profesional adalah non-negotiable.', accent:'pillar-green' },
  { icon:'🔍', title:'Visibility', desc:'Jika tidak muncul di Google, pelanggan pergi ke kompetitor. Setiap hari tanpa visibilitas adalah peluang hilang.', accent:'pillar-orange' },
  { icon:'💰', title:'Conversion', desc:'Sistem digital harus menghasilkan inquiry, bukan sekadar ada. Setiap elemen diarahkan untuk closing.', accent:'pillar-green' },
  { icon:'⚡', title:'Scalability', desc:'Dibangun agar mudah berkembang — dari satu produk ke ratusan, dari manual ke otomatis.', accent:'pillar-orange' },
]
</script>
<style scoped>
.reposition { background:var(--white) }
.reposition-inner { display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:start }
.section-title em { font-style:italic;color:var(--green-600) }
.flow-diagram { display:flex;flex-direction:column;gap:1rem }
.flow-step { display:flex;align-items:center;gap:1rem }
.flow-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0 }
.flow-content { flex:1 }
.flow-content strong { display:block;font-size:0.9rem;font-weight:700;color:var(--gray-900) }
.flow-content span { font-size:0.8rem;color:var(--gray-400) }
.flow-arrow { flex-shrink:0;transform:rotate(90deg) }
.pillars-grid { display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem }
.pillar-card { border-radius:20px;padding:1.5rem;transition:all 0.3s }
.pillar-card:hover { transform:translateY(-3px);box-shadow:var(--shadow-md) }
.pillar-green { background:var(--green-50);border:1px solid var(--green-100) }
.pillar-orange { background:var(--orange-50);border:1px solid var(--orange-100) }
.pillar-icon { font-size:1.5rem;margin-bottom:0.6rem }
.pillar-card h4 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--gray-900);margin-bottom:0.35rem }
.pillar-card p { font-size:0.8rem;color:var(--gray-500);line-height:1.6 }
.ai-callout { display:flex;gap:1rem;align-items:flex-start;background:linear-gradient(135deg,var(--green-800),var(--green-700));border-radius:18px;padding:1.5rem }
.ai-callout-icon { font-size:1.75rem;flex-shrink:0;margin-top:2px }
.ai-callout strong { display:block;color:white;font-size:0.95rem;font-weight:700;margin-bottom:0.4rem;font-family:var(--font-display) }
.ai-callout p { font-size:0.82rem;color:rgba(255,255,255,0.65);line-height:1.65;margin:0 }
@media(max-width:1024px) { .reposition-inner { grid-template-columns:1fr } }
</style>
