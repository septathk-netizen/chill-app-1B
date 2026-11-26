# Plan: Opsi A — Redux sebagai pusat data LayoutFilm

## Tujuan
Data yang sebelumnya dikirim sebagai prop `items` ke `LayoutFilm` sekarang disimpan dan dibaca dari Redux store (`state.apiData`), dengan `items` prop tetap sebagai fallback.

## Keputusan yang sudah disetujui
| Aspek | Keputusan |
|-------|-----------|
| Bentuk state `apiData` | Object `{ film: [{kategori, items}], series: [{kategori, items}] }` |
| `layoutfilm.jsx` baca data | Dari Redux sebagai utama, `items` prop sebagai fallback |
| Lokasi dispatch `setDataApi` | Di `film.jsx` dan `series.jsx` pada `useEffect` saat mount |
| SuperAdmin setelah save | Juga `dispatch(setDataApi(...))` ke Redux selain simpan ke localStorage |
| `DataContext.jsx` | Dihapus; `<DataProvider>` di `App.jsx` dilepas |
| Prop tambahan `layoutfilm.jsx` | Tambah `halaman` ("film" \| "series") untuk menentukan kunci Redux |

## Berkas yang terlibat
- `src/store/redux/apiSlice.js` — ubah initial state menjadi object
- `src/store/redux/store.js` — tidak perlu ubah (sudah terdaftar)
- `componen/pages/props elemnt/layoutfilm.jsx` — baca Redux, tambah `useDispatch`, tambah prop `halaman`
- `componen/pages/film.jsx` — dispatch `setDataApi` pada mount
- `componen/pages/series.jsx` — dispatch `setDataApi` pada mount
- `componen/pages/SuperAdmin.jsx` — dispatch setelah `simpan()`
- `src/App.jsx` — hapus `<DataProvider>` dan impor `DataContext`
- `componen/pages/DataContext.jsx` — dihapus

## Detail implementasi per berkas

### 1. `src/store/redux/apiSlice.js`
- Ubah `initialState` dari `[]` menjadi `{ film: [], series: [] }`.
- Reducer `setDataApi` tetap menerima payload yang menggantikan seluruh state.

### 2. `componen/pages/props elemnt/layoutfilm.jsx`
- Hapus impor `useSelector` yang membaca `state.apiData` sebagai array flat.
- Tambah impor `useSelector`, `useDispatch` dari `react-redux`, dan `setDataApi` dari store.
- Tambah prop `halaman` (string "film" atau "series").
- Baca data: `const pageData = useSelector((state) => state.apiData[halaman] || [])`.
- Cari section yang cocok: `const section = pageData.find((s) => s.kategori === title)`.
- Render: `(section?.items?.length ? section.items : (items && items.length ? items : []))`.
- Pastikan `items` prop tetap bekerja sebagai fallback ketika Redux kosong.

### 3. `componen/pages/film.jsx`
- Impor `useDispatch`, `setDataApi` dari Redux.
- Pada `useEffect` mount: ambil `data.sections` (dari `dataFilm.js` atau override `localStorage` `dataKonten`), lalu `dispatch(setDataApi({ film: data.sections, series: [] }))` atau gabungkan dengan state series yang ada.
- Perlu perhatian: dispatch hanya untuk kunci `film`, jangan menimpa `series`. Gunakan payload gabungan atau baca state lama dulu.

### 4. `componen/pages/series.jsx`
- Sama seperti `film.jsx`, tapi kunci `series`.

### 5. `componen/pages/SuperAdmin.jsx`
- Setelah `localStorage.setItem("dataKonten", ...)` di fungsi `simpan()`, tambah `dispatch(setDataApi({ film: data.film, series: data.series }))`.
- Impor `useDispatch`, `setDataApi` dari Redux.

### 6. `src/App.jsx`
- Hapus baris `import { DataProvider } from "../componen/pages/DataContext.jsx";`.
- Hapus wrapper `<DataProvider>...</DataProvider>` di sekitar `<BrowserRouter>`.

### 7. `componen/pages/DataContext.jsx`
- Hapus berkas sepenuhnya (tidak ada pemakai `useData` di luar berkas ini sendiri).

## Risiko & mitigasi
- **Kategori duplikat di kedua halaman** ("Melanjutkan Tonton Series", "Rilis Baru" ada di film dan series): mitigasi dengan prop `halaman` untuk memilih kunci Redux yang benar.
- **Redux kosong sebelum mount selesai**: mitigasi dengan fallback ke `items` prop, sehingga render tidak rusak.
- **State ganda (Redux vs localStorage)**: SuperAdmin menulis ke keduanya; pages baca dari Redux (yang diisi dari localStorage saat mount). Konsisten selama `simpan()` dipanggil di SuperAdmin.

## Validasi
- `npm run lint` bersih pada semua berkas yang diubah.
- `npm run build` berhasil tanpa error.
- Manual: buka halaman Film dan Series, verifikasi poster masih muncul (data dari Redux atau fallback items).
- Manual: buka SuperAdmin, ubah data, klik Simpan, lalu buka Film/Series — perubahan harus terlihat.

## Rollback
Jika terjadi masalah, kembalikan `layoutfilm.jsx` ke membaca `items` prop saja dan hapus penggunaan Redux di component itu; `apiSlice` tetap bisa dikembalikan ke initial state `[]`.
