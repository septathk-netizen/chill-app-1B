# Plan: Hero (Iklan Atas) Data dari Redux/API

## Goal
Buat Hero/Iklan Atas mengambil data dari Redux (yang diisi via API) agar konsisten dengan LayoutFilm & arsitektur STEP 3/4.

## Current State
- `IklanAtas.jsx` terima props statis dari `dataFilm.js`/`dataSeries.js`
- `LayoutFilm.jsx` baca dari Redux via `useSelector` → `state.apiData`
- MockAPI hanya punya `sections` (type: film/series), tidak ada `hero`

## Design Decisions

### 1. Struktur Data API
Tambah field `hero` di tiap record section? **Tidak** — hero independen per halaman (film vs series).

**Solusi:** Simpan hero sebagai record terpisah di MockAPI:
```json
{ "id": "hero-film", "type": "hero", "page": "film", "img": "...", "title": "...", "description": "..." }
{ "id": "hero-series", "type": "hero", "page": "series", "img": "...", "title": "...", "description": "..." }
```

### 2. Redux State
`apiSlice.js` initialState sudah array `[]`. Hero akan masuk array sama seperti sections.

Reducer `setDataApi` sudah replace entire array — OK.

### 3. API Service
Tambah fungsi `getHero(page)` atau filter di client? **Filter di client** — `getContent()` sudah ambil semua, tinggal filter `type === 'hero' && page === halaman`.

### 4. Komponen IklanAtas.jsx
- Hapus props `img`, `title`, `description`
- Pakai `useSelector` baca hero dari Redux
- Terima prop `halaman` ("film" | "series") seperti LayoutFilm

### 5. Seed Script
Update seed untuk create 2 hero records.

## Tasks

| # | Task | File |
|---|------|------|
| 1 | Update `contentApi.js` - no change needed (getContent sudah ambil semua) | - |
| 2 | Update `seed.js` - tambah 2 hero records | seed.js |
| 3 | Update `IklanAtas.jsx` - baca dari Redux via `useSelector`, terima prop `halaman` | `componen/pages/props elemnt/IklanAtas.jsx` |
| 4 | Update `film.jsx` - pass `halaman="film"` ke Hero, hapus import `dataFilm` untuk hero | `componen/pages/film.jsx` |
| 5 | Update `series.jsx` - pass `halaman="series"` ke Hero, hapus import `dataSeries` untuk hero | `componen/pages/series.jsx` |
| 6 | Run seed, verify Hero muncul dari Redux | - |

## Validation
- Build success
- Hero di Film & Series muncul data dari API (bukan local)
- SuperAdmin nanti bisa edit hero via UI (out of scope, tapi ready)

## Open Questions
- [ ] Apakah hero perlu field `items` seperti section? (Tidak, beda struktur)
- [ ] Apakah SuperAdmin butuh edit hero sekarang? (Nanti, bisa pakai record id `hero-film`/`hero-series`)