<template>
  <div class="admin-page">
    <div class="admin-header">
      <div class="admin-header-inner">
        <div class="admin-brand">
          <span class="admin-brand-icon">🌱</span>
          <div>
            <h1>Portfolio Manager</h1>
            <p>Teman Tumbuh — Kelola data portfolio Anda</p>
          </div>
        </div>
        <div class="admin-actions">
          <button class="btn-admin-secondary" @click="showGuide = !showGuide">
            📖 Cara Update
          </button>
          <button class="btn-admin-primary" @click="openAdd">
            + Tambah Project
          </button>
        </div>
      </div>
    </div>

    <!-- Guide Banner -->
    <div class="guide-banner" v-if="showGuide">
      <div class="admin-container">
        <div class="guide-inner">
          <h3>📁 Cara Update Portfolio</h3>
          <div class="guide-steps">
            <div class="guide-step">
              <div class="gs-num">1</div>
              <div><strong>Buka file</strong> <code>data/portfolio.json</code> di project Anda</div>
            </div>
            <div class="guide-step">
              <div class="gs-num">2</div>
              <div><strong>Copy format</strong> salah satu entry yang sudah ada sebagai template</div>
            </div>
            <div class="guide-step">
              <div class="gs-num">3</div>
              <div><strong>Isi data</strong> project baru: nama klien, masalah, solusi, hasil, testimonial</div>
            </div>
            <div class="guide-step">
              <div class="gs-num">4</div>
              <div><strong>Push ke GitHub</strong> → Vercel/Netlify otomatis deploy ulang dalam 1–2 menit</div>
            </div>
          </div>
          <div class="guide-tip">
            💡 <strong>Tips:</strong> Gunakan form di bawah untuk generate JSON snippet yang siap copy-paste ke file portfolio.json
          </div>
        </div>
      </div>
    </div>

    <div class="admin-container">
      <!-- Stats Row -->
      <div class="admin-stats">
        <div class="stat-card">
          <div class="stat-num">{{ portfolio.length }}</div>
          <div class="stat-label">Total Project</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">{{ portfolio.filter(p => p.featured).length }}</div>
          <div class="stat-label">Project Featured</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">{{ uniqueCategories.length }}</div>
          <div class="stat-label">Kategori Sistem</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">{{ latestYear }}</div>
          <div class="stat-label">Project Terbaru</div>
        </div>
      </div>

      <!-- Filter + Search -->
      <div class="admin-toolbar">
        <input v-model="search" class="admin-search" placeholder="🔍 Cari nama klien atau industri..." />
        <select v-model="filterCat" class="admin-select">
          <option value="">Semua Kategori</option>
          <option v-for="cat in uniqueCategories" :key="cat">{{ cat }}</option>
        </select>
        <select v-model="filterYear" class="admin-select">
          <option value="">Semua Tahun</option>
          <option v-for="y in uniqueYears" :key="y">{{ y }}</option>
        </select>
      </div>

      <!-- Portfolio Table -->
      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Klien & Industri</th>
              <th>Sistem</th>
              <th>Hasil Utama</th>
              <th>Featured</th>
              <th>Tahun</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredPortfolio" :key="item.id" class="table-row">
              <td>
                <div class="client-cell">
                  <div class="client-dot" :style="{ background: item.color }"></div>
                  <div>
                    <strong>{{ item.title }}</strong>
                    <span>{{ item.location }}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="cat-badge">{{ item.category }}</span>
              </td>
              <td>
                <span class="result-text">{{ item.result_headline }}</span>
              </td>
              <td>
                <span class="feat-badge" :class="item.featured ? 'yes' : 'no'">
                  {{ item.featured ? '⭐ Yes' : '— No' }}
                </span>
              </td>
              <td><span class="year-badge">{{ item.year }}</span></td>
              <td>
                <div class="action-btns">
                  <button class="action-btn view" @click="viewItem(item)" title="Lihat detail">👁️</button>
                  <button class="action-btn edit" @click="editItem(item)" title="Edit">✏️</button>
                  <button class="action-btn delete" @click="deleteItem(item)" title="Hapus">🗑️</button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredPortfolio.length === 0">
              <td colspan="6" class="empty-state">Tidak ada project ditemukan</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- JSON Preview Section -->
      <div class="json-section">
        <div class="json-header">
          <h3>📄 Preview JSON — <code>data/portfolio.json</code></h3>
          <div class="json-header-actions">
            <button class="btn-admin-secondary" @click="copyJson">{{ copied ? '✅ Copied!' : '📋 Copy JSON' }}</button>
            <a :href="jsonDownloadUrl" download="portfolio.json" class="btn-admin-secondary">⬇️ Download JSON</a>
          </div>
        </div>
        <p class="json-hint">Salin isi JSON ini, paste ke file <code>data/portfolio.json</code> di project Anda, lalu push ke GitHub. Website akan otomatis terupdate.</p>
        <pre class="json-preview">{{ jsonOutput }}</pre>
      </div>
    </div>

    <!-- Modal: Add / Edit -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal">
        <div class="modal-header">
          <h2>{{ editMode ? '✏️ Edit Project' : '+ Tambah Project Baru' }}</h2>
          <button class="modal-close" @click="closeModal">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-grid">
            <div class="form-group span-2">
              <label>Nama Klien / Bisnis *</label>
              <input v-model="form.title" placeholder="Contoh: Batik Nusantara" />
            </div>
            <div class="form-group">
              <label>Kategori Sistem *</label>
              <select v-model="form.category">
                <option>Starter Growth System</option>
                <option>Visibility System</option>
                <option>Conversion System</option>
                <option>Growth Support</option>
              </select>
            </div>
            <div class="form-group">
              <label>Industri *</label>
              <input v-model="form.industry" placeholder="Contoh: Fashion & Kerajinan" />
            </div>
            <div class="form-group">
              <label>Lokasi</label>
              <input v-model="form.location" placeholder="Contoh: Pekalongan, Jawa Tengah" />
            </div>
            <div class="form-group">
              <label>Tahun</label>
              <input v-model.number="form.year" type="number" placeholder="2025" />
            </div>
            <div class="form-group span-2">
              <label>Tagline (1 kalimat ringkasan)</label>
              <input v-model="form.tagline" placeholder="Contoh: Dari pengrajin lokal ke brand yang dipercaya pelanggan luar kota" />
            </div>
            <div class="form-group span-2">
              <label>Masalah Klien (sebelum) *</label>
              <textarea v-model="form.problem" rows="2" placeholder="Jelaskan masalah utama yang dihadapi sebelum punya website..."></textarea>
            </div>
            <div class="form-group span-2">
              <label>Solusi yang Diberikan *</label>
              <textarea v-model="form.solution" rows="2" placeholder="Contoh: Website katalog produk + WhatsApp funnel + Google Maps"></textarea>
            </div>
            <div class="form-group span-2">
              <label>Headline Hasil Utama *</label>
              <input v-model="form.result_headline" placeholder="Contoh: +23 inquiry bulan pertama" />
            </div>

            <!-- Results -->
            <div class="form-group span-2">
              <label>Hasil Terukur (maks. 3 metrik)</label>
              <div class="results-editor">
                <div v-for="(r, i) in form.results" :key="i" class="result-row">
                  <input v-model="r.metric" placeholder="Angka (e.g. +23)" />
                  <input v-model="r.unit" placeholder="Satuan (e.g. inquiry/bulan)" />
                  <input v-model="r.label" placeholder="Keterangan (e.g. Bulan pertama)" />
                  <button @click="removeResult(i)" class="result-remove">✕</button>
                </div>
                <button @click="addResult" class="add-result-btn" v-if="form.results.length < 3">+ Tambah Metrik</button>
              </div>
            </div>

            <div class="form-group span-2">
              <label>Testimoni *</label>
              <textarea v-model="form.testimonial" rows="3" placeholder="Kutipan langsung dari klien tentang hasil yang dirasakan..."></textarea>
            </div>
            <div class="form-group">
              <label>Nama & Jabatan Pemberi Testimoni</label>
              <input v-model="form.testimonial_author" placeholder="Contoh: Dewi Kartika, Owner" />
            </div>
            <div class="form-group">
              <label>Featured Project?</label>
              <select v-model="form.featured">
                <option :value="true">Ya — Tampilkan di urutan atas</option>
                <option :value="false">Tidak</option>
              </select>
            </div>
            <div class="form-group">
              <label>Warna Utama (hex)</label>
              <div class="color-input-row">
                <input type="color" v-model="form.color" />
                <input v-model="form.color" placeholder="#2d9b50" />
              </div>
            </div>
            <div class="form-group">
              <label>Warna Aksen (hex)</label>
              <div class="color-input-row">
                <input type="color" v-model="form.accent" />
                <input v-model="form.accent" placeholder="#f59520" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-admin-secondary" @click="closeModal">Batal</button>
          <button class="btn-admin-primary" @click="saveItem">{{ editMode ? 'Simpan Perubahan' : 'Tambah ke Portfolio' }}</button>
        </div>
      </div>
    </div>

    <!-- Modal: View Detail -->
    <div class="modal-overlay" v-if="viewModal" @click.self="viewModal = false">
      <div class="modal modal-view">
        <div class="modal-header">
          <h2>{{ viewData?.title }}</h2>
          <button class="modal-close" @click="viewModal = false">✕</button>
        </div>
        <div class="modal-body" v-if="viewData">
          <div class="view-grid">
            <div class="view-item"><label>Kategori</label><span>{{ viewData.category }}</span></div>
            <div class="view-item"><label>Industri</label><span>{{ viewData.industry }}</span></div>
            <div class="view-item"><label>Lokasi</label><span>{{ viewData.location }}</span></div>
            <div class="view-item"><label>Tahun</label><span>{{ viewData.year }}</span></div>
            <div class="view-item span-2"><label>Tagline</label><span>{{ viewData.tagline }}</span></div>
            <div class="view-item span-2"><label>Masalah</label><span>{{ viewData.problem }}</span></div>
            <div class="view-item span-2"><label>Solusi</label><span>{{ viewData.solution }}</span></div>
            <div class="view-item span-2"><label>Hasil Utama</label><strong class="result-headline">{{ viewData.result_headline }}</strong></div>
            <div class="view-item span-2">
              <label>Metrik Hasil</label>
              <div class="view-results">
                <div v-for="r in viewData.results" :key="r.label" class="view-result">
                  <strong>{{ r.metric }}</strong> {{ r.unit }}<br><small>{{ r.label }}</small>
                </div>
              </div>
            </div>
            <div class="view-item span-2">
              <label>Testimoni</label>
              <blockquote>"{{ viewData.testimonial }}" <cite>— {{ viewData.testimonial_author }}</cite></blockquote>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-admin-secondary" @click="viewModal = false">Tutup</button>
          <button class="btn-admin-primary" @click="editFromView">Edit Project Ini</button>
        </div>
      </div>
    </div>

    <!-- Delete Confirm -->
    <div class="modal-overlay" v-if="deleteConfirm" @click.self="deleteConfirm = false">
      <div class="modal modal-sm">
        <div class="modal-header">
          <h2>🗑️ Hapus Project?</h2>
          <button class="modal-close" @click="deleteConfirm = false">✕</button>
        </div>
        <div class="modal-body">
          <p>Anda yakin ingin menghapus <strong>"{{ deleteTarget?.title }}"</strong>?</p>
          <p class="delete-note">Perubahan ini hanya pada tampilan admin. Untuk apply permanen, copy JSON dan update file <code>portfolio.json</code>.</p>
        </div>
        <div class="modal-footer">
          <button class="btn-admin-secondary" @click="deleteConfirm = false">Batal</button>
          <button class="btn-delete" @click="confirmDelete">Ya, Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import portfolioData from '~/data/portfolio.json'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Admin Portfolio — Teman Tumbuh' })

const portfolio = ref(JSON.parse(JSON.stringify(portfolioData)))
const search = ref('')
const filterCat = ref('')
const filterYear = ref('')
const showGuide = ref(false)
const showModal = ref(false)
const editMode = ref(false)
const viewModal = ref(false)
const viewData = ref(null)
const deleteConfirm = ref(false)
const deleteTarget = ref(null)
const copied = ref(false)

const emptyForm = () => ({
  id: Date.now(),
  title: '', slug: '', category: 'Starter Growth System', industry: '',
  location: '', tagline: '', problem: '', solution: '',
  result_headline: '', results: [{ metric: '', unit: '', label: '' }],
  testimonial: '', testimonial_author: '',
  color: '#2d9b50', accent: '#f59520', featured: false, year: new Date().getFullYear()
})
const form = ref(emptyForm())

const uniqueCategories = computed(() => [...new Set(portfolio.value.map(p => p.category))])
const uniqueYears = computed(() => [...new Set(portfolio.value.map(p => p.year))].sort((a,b) => b-a))
const latestYear = computed(() => Math.max(...portfolio.value.map(p => p.year)))

const filteredPortfolio = computed(() => {
  return portfolio.value.filter(p => {
    const matchSearch = !search.value || p.title.toLowerCase().includes(search.value.toLowerCase()) || p.industry.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = !filterCat.value || p.category === filterCat.value
    const matchYear = !filterYear.value || p.year == filterYear.value
    return matchSearch && matchCat && matchYear
  })
})

const jsonOutput = computed(() => JSON.stringify(portfolio.value, null, 2))
const jsonDownloadUrl = computed(() => {
  const blob = new Blob([jsonOutput.value], { type: 'application/json' })
  return URL.createObjectURL(blob)
})

function openAdd() { form.value = emptyForm(); editMode.value = false; showModal.value = true }
function editItem(item) { form.value = JSON.parse(JSON.stringify(item)); editMode.value = true; showModal.value = true }
function closeModal() { showModal.value = false }

function viewItem(item) { viewData.value = item; viewModal.value = true }
function editFromView() { editItem(viewData.value); viewModal.value = false }

function deleteItem(item) { deleteTarget.value = item; deleteConfirm.value = true }
function confirmDelete() {
  portfolio.value = portfolio.value.filter(p => p.id !== deleteTarget.value.id)
  deleteConfirm.value = false
  deleteTarget.value = null
}

function addResult() { if (form.value.results.length < 3) form.value.results.push({ metric: '', unit: '', label: '' }) }
function removeResult(i) { form.value.results.splice(i, 1) }

function saveItem() {
  if (!form.value.title || !form.value.category) return alert('Nama klien dan kategori wajib diisi.')
  form.value.slug = form.value.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  form.value.results = form.value.results.filter(r => r.metric)
  if (editMode.value) {
    const idx = portfolio.value.findIndex(p => p.id === form.value.id)
    if (idx !== -1) portfolio.value[idx] = { ...form.value }
  } else {
    portfolio.value.unshift({ ...form.value })
  }
  closeModal()
}

async function copyJson() {
  await navigator.clipboard.writeText(jsonOutput.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2500)
}
</script>

<style scoped>
.admin-page { min-height:100vh;background:var(--gray-50);padding-bottom:80px;padding-top:0;font-family:var(--font-body) }
.admin-header { background:white;border-bottom:1px solid var(--gray-100);padding:1.25rem 5vw;position:sticky;top:0;z-index:50 }
.admin-header-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap }
.admin-brand { display:flex;align-items:center;gap:14px }
.admin-brand-icon { font-size:2rem }
.admin-brand h1 { font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--gray-900);margin-bottom:1px }
.admin-brand p { font-size:0.78rem;color:var(--gray-400) }
.admin-actions { display:flex;gap:0.75rem }
.btn-admin-primary { background:var(--green-600);color:white;border:none;padding:10px 20px;border-radius:10px;font-weight:700;font-size:0.875rem;cursor:pointer;transition:all 0.2s;font-family:var(--font-body) }
.btn-admin-primary:hover { background:var(--green-700) }
.btn-admin-secondary { background:white;color:var(--gray-700);border:1.5px solid var(--gray-200);padding:9px 18px;border-radius:10px;font-weight:600;font-size:0.875rem;cursor:pointer;transition:all 0.2s;font-family:var(--font-body) }
.btn-admin-secondary:hover { border-color:var(--gray-400);background:var(--gray-50) }

/* Guide */
.guide-banner { background:var(--green-50);border-bottom:1px solid var(--green-100);padding:1.5rem 5vw }
.guide-inner { max-width:1200px;margin:0 auto }
.guide-inner h3 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--green-800);margin-bottom:1rem }
.guide-steps { display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:1rem }
.guide-step { display:flex;align-items:flex-start;gap:10px;font-size:0.82rem;color:var(--green-700);flex:1;min-width:200px }
.gs-num { width:24px;height:24px;background:var(--green-600);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.75rem;flex-shrink:0 }
.guide-tip { font-size:0.82rem;color:var(--green-700);background:white;border:1px solid var(--green-200);border-radius:10px;padding:0.875rem 1rem }
code { background:var(--gray-100);padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.85em }

/* Container */
.admin-container { max-width:1200px;margin:0 auto;padding:2rem 5vw }

/* Stats */
.admin-stats { display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:1.5rem }
.stat-card { background:white;border:1px solid var(--gray-100);border-radius:14px;padding:1.25rem;text-align:center }
.stat-num { font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--green-700);line-height:1 }
.stat-label { font-size:0.75rem;color:var(--gray-400);margin-top:4px;font-weight:500 }

/* Toolbar */
.admin-toolbar { display:flex;gap:0.75rem;margin-bottom:1.25rem;flex-wrap:wrap }
.admin-search { flex:1;min-width:200px;padding:10px 16px;border:1.5px solid var(--gray-200);border-radius:10px;font-size:0.875rem;font-family:var(--font-body);outline:none;background:white }
.admin-search:focus { border-color:var(--green-400) }
.admin-select { padding:10px 14px;border:1.5px solid var(--gray-200);border-radius:10px;font-size:0.875rem;font-family:var(--font-body);background:white;outline:none;cursor:pointer }
.admin-select:focus { border-color:var(--green-400) }

/* Table */
.admin-table-wrap { background:white;border:1px solid var(--gray-100);border-radius:16px;overflow:hidden;margin-bottom:2rem }
.admin-table { width:100%;border-collapse:collapse }
.admin-table thead tr { background:var(--gray-50);border-bottom:1px solid var(--gray-100) }
.admin-table th { padding:12px 16px;text-align:left;font-size:0.75rem;font-weight:700;color:var(--gray-400);letter-spacing:0.06em;text-transform:uppercase }
.admin-table td { padding:14px 16px;border-bottom:1px solid var(--gray-50);vertical-align:middle }
.table-row:hover td { background:var(--gray-50) }
.table-row:last-child td { border-bottom:none }
.client-cell { display:flex;align-items:center;gap:10px }
.client-dot { width:10px;height:10px;border-radius:50%;flex-shrink:0 }
.client-cell strong { display:block;font-size:0.875rem;font-weight:700;color:var(--gray-900) }
.client-cell span { font-size:0.75rem;color:var(--gray-400) }
.cat-badge { background:var(--green-50);color:var(--green-700);font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:50px }
.result-text { font-size:0.82rem;color:var(--gray-600);font-weight:600 }
.feat-badge { font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:50px }
.feat-badge.yes { background:var(--orange-50);color:var(--orange-600) }
.feat-badge.no { background:var(--gray-100);color:var(--gray-400) }
.year-badge { font-size:0.78rem;font-weight:600;color:var(--gray-500) }
.action-btns { display:flex;gap:4px }
.action-btn { width:30px;height:30px;border:none;background:var(--gray-50);border-radius:8px;cursor:pointer;font-size:0.85rem;transition:all 0.2s;display:flex;align-items:center;justify-content:center }
.action-btn:hover { background:var(--gray-100) }
.action-btn.delete:hover { background:#fff0f0 }
.empty-state { text-align:center;color:var(--gray-400);padding:3rem;font-size:0.9rem }

/* JSON section */
.json-section { background:white;border:1px solid var(--gray-100);border-radius:16px;overflow:hidden }
.json-header { padding:1.25rem 1.5rem;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem }
.json-header h3 { font-family:var(--font-display);font-size:1rem;font-weight:700;color:var(--gray-900) }
.json-header-actions { display:flex;gap:0.5rem }
.json-hint { padding:0.875rem 1.5rem;font-size:0.82rem;color:var(--gray-500);background:var(--gray-50);border-bottom:1px solid var(--gray-100) }
.json-preview { padding:1.5rem;font-family:monospace;font-size:0.78rem;color:var(--gray-600);background:var(--gray-900);color:#a8e8ba;overflow-x:auto;max-height:400px;overflow-y:auto;line-height:1.7;margin:0 }

/* Modal */
.modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:500;display:flex;align-items:center;justify-content:center;padding:1.5rem;backdrop-filter:blur(4px) }
.modal { background:white;border-radius:20px;width:100%;max-width:720px;max-height:90vh;display:flex;flex-direction:column;box-shadow:var(--shadow-xl) }
.modal-sm { max-width:440px }
.modal-view { max-width:600px }
.modal-header { padding:1.5rem 1.75rem;border-bottom:1px solid var(--gray-100);display:flex;align-items:center;justify-content:space-between }
.modal-header h2 { font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--gray-900) }
.modal-close { background:none;border:none;font-size:1.1rem;cursor:pointer;color:var(--gray-400);width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.2s }
.modal-close:hover { background:var(--gray-100);color:var(--gray-700) }
.modal-body { padding:1.75rem;overflow-y:auto;flex:1 }
.modal-footer { padding:1.25rem 1.75rem;border-top:1px solid var(--gray-100);display:flex;justify-content:flex-end;gap:0.75rem }

/* Form */
.form-grid { display:grid;grid-template-columns:1fr 1fr;gap:1rem }
.form-group { display:flex;flex-direction:column;gap:6px }
.span-2 { grid-column:1/-1 }
.form-group label { font-size:0.78rem;font-weight:700;color:var(--gray-600);text-transform:uppercase;letter-spacing:0.05em }
.form-group input,.form-group textarea,.form-group select { padding:10px 14px;border:1.5px solid var(--gray-200);border-radius:10px;font-size:0.875rem;font-family:var(--font-body);outline:none;background:white;transition:border-color 0.2s }
.form-group input:focus,.form-group textarea:focus,.form-group select:focus { border-color:var(--green-400) }
.form-group textarea { resize:vertical }
.color-input-row { display:flex;gap:8px;align-items:center }
.color-input-row input[type="color"] { width:44px;height:44px;padding:2px;border-radius:8px;border:1.5px solid var(--gray-200);cursor:pointer }
.color-input-row input[type="text"] { flex:1 }
.results-editor { display:flex;flex-direction:column;gap:8px }
.result-row { display:grid;grid-template-columns:1fr 1fr 2fr auto;gap:8px;align-items:center }
.result-remove { background:var(--gray-100);border:none;border-radius:8px;width:32px;height:38px;cursor:pointer;font-size:0.875rem;transition:all 0.2s }
.result-remove:hover { background:#fff0f0 }
.add-result-btn { background:var(--green-50);border:1.5px dashed var(--green-300);color:var(--green-700);padding:8px;border-radius:10px;font-size:0.82rem;font-weight:600;cursor:pointer;transition:all 0.2s;font-family:var(--font-body) }
.add-result-btn:hover { background:var(--green-100) }

/* View modal */
.view-grid { display:grid;grid-template-columns:1fr 1fr;gap:1rem }
.view-item { display:flex;flex-direction:column;gap:4px }
.view-item label { font-size:0.72rem;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.06em }
.view-item span,.view-item strong,.view-item blockquote { font-size:0.875rem;color:var(--gray-700);line-height:1.6 }
.result-headline { color:var(--green-700);font-size:1.1rem }
.view-results { display:flex;gap:0.75rem;flex-wrap:wrap }
.view-result { background:var(--green-50);border-radius:10px;padding:0.75rem;font-size:0.82rem;color:var(--green-800);line-height:1.5;text-align:center }
.view-result strong { font-family:var(--font-display);font-size:1.2rem;display:block }
.view-result small { font-size:0.7rem;color:var(--green-500) }
.view-item blockquote { font-style:italic;border-left:3px solid var(--green-300);padding-left:0.875rem }
.view-item blockquote cite { font-style:normal;font-weight:700;color:var(--green-600);font-size:0.78rem }

/* Delete */
.delete-note { font-size:0.8rem;color:var(--gray-400);margin-top:0.5rem;line-height:1.6 }
.btn-delete { background:#dc2626;color:white;border:none;padding:10px 20px;border-radius:10px;font-weight:700;font-size:0.875rem;cursor:pointer;font-family:var(--font-body) }
.btn-delete:hover { background:#b91c1c }

@media(max-width:640px) {
  .admin-stats { grid-template-columns:1fr 1fr }
  .form-grid { grid-template-columns:1fr }
  .result-row { grid-template-columns:1fr 1fr;grid-template-rows:auto auto }
  .view-grid { grid-template-columns:1fr }
}
</style>
