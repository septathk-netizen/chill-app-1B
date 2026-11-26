# Plan: Perbaiki integrasi data layoutfilm tanpa mengubah kode sumber

## Masalah
- Import `getData` dari `./services/api` tidak ada; API mengekspor `getUsers`.
- Path `./services/api` dari `componen/pages/props elemnt/layoutfilm.jsx` tidak resolve ke `src/services/api`.
- `useSelector` membaca `state.apiData`; data awal `[]` dan hanya terisi jika `setDataApi` dipanggil.

## Kebutuhan (tanpa ubah kode)
- Alias/path module yang memetakan `./services/api` ke `src/services/api` (mis. Vite alias) **atau** tambah re-export `getData` di lokasi yang diimpor.
- Re-export `getUsers` sebagai `getData` di `src/services/api` (atau file index) agar nama sesuai spec.
- Pastikan Provider Redux aktif (sudah di main.jsx) dan reducer `apiData` terdaftar (sudah).

## Open question
- Apakah boleh menambah file re-export (bukan mengubah kode existing)? Jika tidak, error tidak dapat dihindari tanpa mengubah kode.
