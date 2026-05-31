<template>
  <section class="portfolio-section section" id="portfolio" style="background:var(--gray-50)">
    <div class="container">
      <div class="text-center">
        <div class="label label-center">Portfolio</div>
        <h2 class="section-title">Hasil Nyata dari UMKM<br>yang Sudah <em>Bertumbuh</em></h2>
        <p class="section-desc section-desc-center" style="margin-bottom:2rem">Bukan klaim — ini cerita nyata dan angka nyata dari klien yang sudah merasakan perbedaannya.</p>
      </div>

      <!-- Filter tabs -->
      <div class="portfolio-filters">
        <button
          v-for="cat in categories" :key="cat"
          class="filter-btn"
          :class="{ active: activeFilter === cat }"
          @click="setFilter(cat)"
        >{{ cat }}</button>
      </div>

      <div class="portfolio-grid" :class="{ animating: isAnimating }">
        <div
          v-for="(item, i) in filteredPortfolio"
          :key="item.id"
          class="portfolio-card"
          :style="{ animationDelay: `${(i % 3) * 0.1}s` }"
        >
          <!-- Visual header -->
          <div class="pc-header" :style="{ background: `linear-gradient(135deg, ${item.color}, ${item.accent})` }">
            <div class="pc-browser">
              <div class="pcb-bar">
                <div class="pcb-dots"><span></span><span></span><span></span></div>
                <div class="pcb-url">{{ item.title.toLowerCase().replace(/\s+/g,'-') }}.com</div>
              </div>
              <div class="pcb-body">
                <div class="pcb-line xl"></div>
                <div class="pcb-line lg"></div>
                <div class="pcb-line md" style="opacity:0.6"></div>
                <div class="pcb-cta"></div>
              </div>
            </div>
            <div class="pc-result-badge">
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              {{ item.result_headline }}
            </div>
          </div>

          <div class="pc-body">
            <div class="pc-meta">
              <span class="pc-category">{{ item.category }}</span>
              <span class="pc-industry">{{ item.industry }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p class="pc-tagline">{{ item.tagline }}</p>

            <!-- Before/After -->
            <div class="pc-ba">
              <div class="ba-col">
                <div class="ba-label before">❌ Sebelum</div>
                <p>{{ item.problem }}</p>
              </div>
              <div class="ba-col">
                <div class="ba-label after">✅ Sesudah</div>
                <p>{{ item.solution }}</p>
              </div>
            </div>

            <!-- Results -->
            <div class="pc-results">
              <div v-for="r in item.results" :key="r.label" class="pc-result-item">
                <div class="pc-result-num">{{ r.metric }}</div>
                <div class="pc-result-unit">{{ r.unit }}</div>
                <div class="pc-result-label">{{ r.label }}</div>
              </div>
            </div>

            <!-- Testimonial -->
            <blockquote class="pc-quote">
              <p>"{{ item.testimonial }}"</p>
              <cite>— {{ item.testimonial_author }}</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div class="portfolio-cta text-center reveal">
        <p>Bisnis Anda bisa jadi cerita sukses berikutnya.</p>
        <a href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20untuk%20website%20bisnis%20saya" class="btn btn-primary btn-lg">
          Mulai Konsultasi Gratis
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolioData from '~/data/portfolio.json'

const portfolio = portfolioData
const activeFilter = ref('Semua')
const isAnimating = ref(false)

const categories = computed(() => ['Semua', ...new Set(portfolio.map(p => p.category))])
const filteredPortfolio = computed(() =>
  activeFilter.value === 'Semua' ? portfolio : portfolio.filter(p => p.category === activeFilter.value)
)

function setFilter(cat) {
  if (cat === activeFilter.value) return
  isAnimating.value = true
  setTimeout(() => {
    activeFilter.value = cat
    isAnimating.value = false
  }, 150)
}
</script>

<style scoped>
.section-title em { font-style:italic;color:var(--green-600) }
.portfolio-filters { display:flex;gap:0.6rem;flex-wrap:wrap;justify-content:center;margin-bottom:2.5rem }
.filter-btn { background:white;border:1.5px solid var(--gray-200);color:var(--gray-600);padding:8px 18px;border-radius:50px;font-size:0.82rem;font-weight:600;cursor:pointer;transition:all 0.2s;font-family:var(--font-body) }
.filter-btn:hover,.filter-btn.active { background:var(--green-600);border-color:var(--green-600);color:white }
.portfolio-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:1.5rem;margin-bottom:3rem;transition:opacity 0.15s ease }
.portfolio-grid.animating { opacity:0 }
@keyframes fadeUp {
  from { opacity:0;transform:translateY(20px) }
  to { opacity:1;transform:translateY(0) }
}
.portfolio-card { background:white;border-radius:22px;overflow:hidden;border:1px solid var(--gray-100);transition:box-shadow 0.3s,transform 0.3s;animation:fadeUp 0.4s ease both }
.portfolio-card:hover { box-shadow:var(--shadow-lg);transform:translateY(-4px) }
/* Header */
.pc-header { padding:1.75rem;position:relative;display:flex;align-items:center;justify-content:center }
.pc-browser { background:white;border-radius:12px;width:100%;box-shadow:0 8px 24px rgba(0,0,0,0.2);overflow:hidden }
.pcb-bar { background:#f5f5f5;padding:8px 12px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #eee }
.pcb-dots { display:flex;gap:4px }
.pcb-dots span { width:8px;height:8px;border-radius:50%;background:#ccc }
.pcb-dots span:nth-child(1){background:#ff6058}.pcb-dots span:nth-child(2){background:#febc2e}.pcb-dots span:nth-child(3){background:#28c840}
.pcb-url { background:white;border-radius:50px;padding:3px 10px;font-size:0.65rem;color:#999;flex:1;text-align:center;border:1px solid #eee }
.pcb-body { padding:1rem;display:flex;flex-direction:column;gap:5px }
.pcb-line { height:6px;background:#e8e8e8;border-radius:3px }
.pcb-line.xl{width:90%;background:rgba(31,122,58,0.2)}.pcb-line.lg{width:70%;background:rgba(31,122,58,0.15)}.pcb-line.md{width:55%}
.pcb-cta { margin-top:4px;height:18px;width:80px;background:rgba(31,122,58,0.6);border-radius:50px }
.pc-result-badge { position:absolute;bottom:-12px;right:16px;background:var(--gray-900);color:white;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:50px;display:flex;align-items:center;gap:6px;white-space:nowrap }
/* Body */
.pc-body { padding:2rem 1.75rem 1.75rem }
.pc-meta { display:flex;gap:8px;margin-bottom:0.75rem }
.pc-category { background:var(--green-50);color:var(--green-700);font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:50px }
.pc-industry { background:var(--orange-50);color:var(--orange-600);font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:50px }
.pc-body h3 { font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--gray-900);margin-bottom:0.35rem }
.pc-tagline { font-size:0.82rem;color:var(--gray-400);line-height:1.5;margin-bottom:1.25rem }
/* Before/After */
.pc-ba { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem }
.ba-col { background:var(--gray-50);border-radius:10px;padding:0.875rem }
.ba-label { font-size:0.7rem;font-weight:800;margin-bottom:0.5rem;letter-spacing:0.04em }
.ba-label.before { color:var(--orange-500) }
.ba-label.after { color:var(--green-600) }
.ba-col p { font-size:0.75rem;color:var(--gray-500);line-height:1.55 }
/* Results */
.pc-results { display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin-bottom:1.25rem }
.pc-result-item { text-align:center;background:var(--green-50);border-radius:10px;padding:0.75rem 0.5rem }
.pc-result-num { font-family:var(--font-display);font-size:1.25rem;font-weight:700;color:var(--green-700);line-height:1 }
.pc-result-unit { font-size:0.65rem;color:var(--green-500);font-weight:600;margin-bottom:2px }
.pc-result-label { font-size:0.62rem;color:var(--gray-400);line-height:1.4 }
/* Quote */
.pc-quote { background:var(--gray-50);border-left:3px solid var(--green-400);border-radius:0 10px 10px 0;padding:0.875rem 1rem }
.pc-quote p { font-size:0.82rem;color:var(--gray-600);line-height:1.65;font-style:italic;margin-bottom:0.4rem }
.pc-quote cite { font-size:0.72rem;color:var(--green-600);font-weight:700;font-style:normal }
.portfolio-cta { padding:3rem 0 0 }
.portfolio-cta p { font-size:1.05rem;color:var(--gray-500);margin-bottom:1.25rem;font-style:italic }
</style>
