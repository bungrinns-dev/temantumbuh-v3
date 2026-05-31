# 🌱 Teman Tumbuh — Nuxt 3 Website

**Digital Growth Partner untuk UMKM Indonesia**

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## 📁 Struktur Project

```
teman-tumbuh/
├── data/
│   └── portfolio.json        ← ⭐ UPDATE INI untuk tambah project
├── pages/
│   ├── index.vue              ← Halaman utama
│   └── admin.vue              ← Dashboard kelola portfolio
├── components/
│   ├── AppNav.vue
│   ├── AppFooter.vue
│   ├── SectionHero.vue
│   ├── SectionPortfolio.vue  ← Membaca dari portfolio.json
│   └── ...
└── assets/css/main.css
```

## ✏️ Cara Update Portfolio

### Cara 1 — Edit JSON Langsung (Recommended)

1. Buka `data/portfolio.json`
2. Copy salah satu entry sebagai template
3. Isi data project baru
4. Save → Push ke GitHub → Auto deploy

### Cara 2 — Via Admin Dashboard

1. Buka `/admin` di browser
2. Klik **+ Tambah Project**
3. Isi form lengkap
4. Klik **Copy JSON** → Paste ke `data/portfolio.json`
5. Push ke GitHub

## 📋 Format Portfolio JSON

```json
{
  "id": 7,
  "title": "Nama Bisnis Klien",
  "slug": "nama-bisnis-klien",
  "category": "Visibility System",
  "industry": "Kuliner & F&B",
  "location": "Jakarta Selatan",
  "tagline": "Satu kalimat ringkasan transformasi klien",
  "problem": "Masalah yang dihadapi sebelum punya website...",
  "solution": "Website X + fitur Y + integrasi Z",
  "result_headline": "+30 inquiry bulan pertama",
  "results": [
    { "metric": "30", "unit": "inquiry/bulan", "label": "Bulan pertama setelah launch" },
    { "metric": "4.9★", "unit": "Google", "label": "Rating Google Business" },
    { "metric": "2×", "unit": "omzet", "label": "Naik dalam 60 hari" }
  ],
  "testimonial": "Kutipan langsung dari klien...",
  "testimonial_author": "Nama Klien, Jabatan",
  "color": "#2d9b50",
  "accent": "#f59520",
  "featured": true,
  "year": 2025
}
```

### Pilihan Category:
- `Starter Growth System`
- `Visibility System`
- `Conversion System`
- `Growth Support`

## 🌐 Deploy ke Netlify

```bash
npm run generate
```

Atau connect GitHub repo ke Netlify — otomatis deploy setiap push.

**Build command:** `npm run generate`  
**Publish directory:** `.output/public`

## 🔧 Update Kontak WhatsApp

Cari dan ganti nomor ini di seluruh project:
```
6281234567890
```
Ganti dengan nomor WhatsApp bisnis Anda (format: 628XXXXXXXXXX).
