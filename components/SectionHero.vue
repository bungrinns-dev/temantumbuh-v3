<template>
  <section class="hero" id="home">
    <div class="hero-bg-orb orb-1"></div>
    <div class="hero-bg-orb orb-2"></div>
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          Partner Transformasi Digital & AI · UMKM Indonesia
        </div>
        <h1>
          Dari Bisnis Manual<br>
          Menuju Bisnis Modern<br>
          <em>Berbasis Sistem & AI</em>
        </h1>
        <p class="hero-sub">Teman Tumbuh membantu UMKM membangun kepercayaan, visibilitas, dan sistem digital yang membuat bisnis lebih siap bertumbuh di era AI — tanpa ribet, tanpa harus paham teknologi.</p>
        <div class="hero-actions">
          <a href="https://wa.me/6281234567890?text=Halo%20Teman%20Tumbuh%2C%20saya%20ingin%20konsultasi%20gratis" class="btn btn-primary btn-lg">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.105 1.524 5.828L.055 23.09a.75.75 0 00.91.91l5.272-1.468A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.697-.497-5.248-1.365l-.376-.21-3.896 1.085 1.086-3.884-.22-.385A9.972 9.972 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Mulai Konsultasi Gratis
          </a>
          <a href="#portfolio" class="btn btn-secondary btn-lg">
            Lihat Hasil Transformasi
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="hero-trust">
          <div class="trust-pill">✅ 100+ UMKM Ditransformasi</div>
          <div class="trust-pill">⚡ Sistem Siap 7–14 Hari</div>
          <div class="trust-pill">🤖 AI-Ready System</div>
          <div class="trust-pill">🛡️ Garansi Revisi</div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card main-card">
          <div class="card-bar">
            <div class="card-dots"><span></span><span></span><span></span></div>
            <div class="card-url">www.bisnis-anda.com</div>
          </div>
          <div class="card-mock-hero">
            <div class="mock-nav-row">
              <div class="mock-logo-block"></div>
              <div class="mock-menu">
                <div class="mock-line s"></div>
                <div class="mock-line s"></div>
                <div class="mock-line s"></div>
              </div>
            </div>
            <div class="mock-headline">
              <div class="mock-line xl"></div>
              <div class="mock-line lg"></div>
            </div>
            <div class="mock-body">
              <div class="mock-line md"></div>
              <div class="mock-line sm"></div>
            </div>
            <div class="mock-cta-row">
              <div class="mock-cta-btn green"></div>
              <div class="mock-cta-btn ghost"></div>
            </div>
          </div>
          <div class="card-mock-products">
            <div class="mock-prod-card" v-for="i in 3" :key="i">
              <div class="mock-prod-img"></div>
              <div class="mock-prod-text">
                <div class="mock-line sm"></div>
                <div class="mock-line xs"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="floating-card card-inquiry">
          <div class="fc-icon green">
            <svg viewBox="0 0 24 24" fill="var(--green-600)" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div>
            <strong>+23 Inquiry</strong>
            <span>Bulan pertama setelah live</span>
          </div>
        </div>
        <div class="floating-card card-ai">
          <div class="fc-icon orange">
            <svg viewBox="0 0 24 24" fill="var(--orange-500)" width="20" height="20"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M9 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
          </div>
          <div>
            <strong>AI-Ready System</strong>
            <span>Siap untuk era bisnis modern</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero { min-height:100vh;display:flex;align-items:center;padding:100px 0 60px;position:relative;overflow:hidden;background:var(--white) }
.hero-bg-orb { position:absolute;border-radius:50%;pointer-events:none }
.orb-1 { top:-150px;right:-150px;width:600px;height:600px;background:radial-gradient(circle,rgba(76,175,111,0.07) 0%,transparent 70%) }
.orb-2 { bottom:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(245,149,32,0.06) 0%,transparent 70%) }
.hero-inner { display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;position:relative;z-index:1 }
.hero-badge { display:inline-flex;align-items:center;gap:8px;background:var(--green-50);border:1px solid var(--green-100);color:var(--green-700);padding:7px 16px;border-radius:50px;font-size:0.78rem;font-weight:700;margin-bottom:1.75rem;letter-spacing:0.03em }
.hero-content h1 { font-size:clamp(2.4rem,4.2vw,3.8rem);font-weight:700;margin-bottom:1.5rem;line-height:1.1;color:var(--gray-900) }
.hero-content h1 em { font-style:italic;color:var(--green-600) }
.hero-sub { font-size:1.05rem;color:var(--gray-500);line-height:1.8;margin-bottom:2.5rem;max-width:500px }
.hero-actions { display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem }
.hero-trust { display:flex;flex-wrap:wrap;gap:0.6rem }
.trust-pill { background:var(--gray-50);border:1px solid var(--gray-100);padding:7px 14px;border-radius:50px;font-size:0.78rem;font-weight:600;color:var(--gray-600) }
.hero-visual { position:relative }
.main-card { background:white;border-radius:20px;box-shadow:var(--shadow-lg),0 0 0 1px var(--gray-100);overflow:hidden;animation:float 6s ease-in-out infinite }
.card-bar { background:var(--gray-50);padding:10px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--gray-100) }
.card-dots { display:flex;gap:5px }
.card-dots span { width:9px;height:9px;border-radius:50% }
.card-dots span:nth-child(1){background:#ff6058}.card-dots span:nth-child(2){background:#febc2e}.card-dots span:nth-child(3){background:#28c840}
.card-url { background:white;border-radius:50px;padding:5px 12px;font-size:0.72rem;color:var(--gray-400);flex:1;text-align:center;border:1px solid var(--gray-100) }
.card-mock-hero { background:linear-gradient(135deg,var(--green-700),var(--green-500));padding:1.5rem }
.mock-nav-row { display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem }
.mock-logo-block { width:80px;height:12px;background:rgba(255,255,255,0.4);border-radius:6px }
.mock-menu { display:flex;gap:8px }
.mock-line { background:rgba(255,255,255,0.35);border-radius:4px;height:6px }
.mock-line.s{width:30px}.mock-line.xs{width:40px}.mock-line.sm{width:60px}.mock-line.md{width:80px}.mock-line.lg{width:110px}.mock-line.xl{width:130px}
.mock-headline { margin-bottom:0.75rem;display:flex;flex-direction:column;gap:6px }
.mock-body { display:flex;flex-direction:column;gap:5px;margin-bottom:1rem;opacity:0.7 }
.mock-cta-row { display:flex;gap:8px }
.mock-cta-btn { height:26px;border-radius:50px }
.mock-cta-btn.green{width:100px;background:white}.mock-cta-btn.ghost{width:80px;background:transparent;border:1px solid rgba(255,255,255,0.5)}
.card-mock-products { padding:1rem;background:var(--gray-50);display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px }
.mock-prod-card { background:white;border-radius:8px;overflow:hidden }
.mock-prod-img { height:50px;background:var(--gray-100) }
.mock-prod-text { padding:6px 8px;display:flex;flex-direction:column;gap:4px }
.floating-card { position:absolute;background:white;border-radius:14px;padding:12px 16px;box-shadow:var(--shadow-lg);border:1px solid var(--gray-100);display:flex;align-items:center;gap:10px }
.card-inquiry { bottom:-20px;left:-30px;animation:floatSlow 5s ease-in-out infinite }
.card-ai { top:20px;right:-20px;animation:floatSlow 5s ease-in-out 1.8s infinite }
.floating-card strong { display:block;font-size:0.82rem;font-weight:700;color:var(--gray-900);line-height:1.2 }
.floating-card span { font-size:0.72rem;color:var(--gray-400) }
.fc-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0 }
.fc-icon.green{background:var(--green-50)}.fc-icon.orange{background:var(--orange-50)}
@media(max-width:1024px) {
  .hero-inner { grid-template-columns:1fr;text-align:center }
  .hero-sub { margin-left:auto;margin-right:auto }
  .hero-actions { justify-content:center }
  .hero-trust { justify-content:center }
  .hero-visual { max-width:480px;margin:0 auto }
}
@media(max-width:480px) {
  .hero { padding:90px 0 50px }
  .hero-actions { flex-direction:column }
  .btn-lg { width:100%;justify-content:center }
}
</style>
