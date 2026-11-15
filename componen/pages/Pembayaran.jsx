// Halaman "Ringkasan Pembayaran".
// Data paket yang dipilih dikirim dari card lewat navigate(..., { state: {...} })
// dan dibaca di sini dengan useLocation.
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../style/Pembayaran.css'
import CardPaket from './props elemnt/CardPaket.jsx'

// Fungsi kecil untuk menampilkan angka dalam format Rupiah, contoh: Rp49.990
function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID')
}

function Pembayaran() {
  const location = useLocation()
  const navigate = useNavigate()

  // Ambil data paket dari state. Jika dibuka langsung tanpa data, jadikan null.
  const paket = location.state || null

  // State untuk metode pembayaran & voucher
  const [metode, setMetode] = useState('kartu')
  const [voucher, setVoucher] = useState('')

  // State untuk menampilkan/tutup panel pembayaran setelah tombol Bayar diklik
  const [tampilBayar, setTampilBayar] = useState(false)

  // Sisa waktu (detik), mulai 15 menit = 900 detik
  const [sisaWaktu, setSisaWaktu] = useState(15 * 60)

  // Timer mundur: hanya berjalan saat panel pembayaran terbuka
  useEffect(() => {
    if (!tampilBayar) return // jangan jalankan timer kalau panel belum muncul

    const timer = setInterval(() => {
      setSisaWaktu((waktu) => {
        if (waktu <= 1) {
          clearInterval(timer)
          return 0
        }
        return waktu - 1
      })
    }, 1000)

    // Bersihkan timer saat panel ditutup / komponen unmount
    return () => clearInterval(timer)
  }, [tampilBayar])

  // Format sisa waktu jadi "mm:ss"
  const menit = Math.floor(sisaWaktu / 60)
  const detik = sisaWaktu % 60
  const waktuTampil = `${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`

  // Biaya admin tetap
  const biayaAdmin = 3000

  // Jika halaman dibuka tanpa data paket, arahkan balik ke /premium
  // supaya tidak error karena data kosong.
  if (!paket) {
    navigate('/premium')
    return null
  }

  const total = paket.hargaAngka + biayaAdmin

  return (
    <div className="Pembayaran">
      {/* Banner waktu mundur di paling atas: muncul setelah tombol Bayar diklik */}
      {tampilBayar && (
        <div className="BannerWaktu">
          <p className="BannerWaktuJudul">
            {sisaWaktu > 0 ? 'Lakukan Pembayaran Sebelum' : 'Waktu Pembayaran Habis!'}
          </p>
          <div className="BannerWaktuBox">
            <span className="KotakWaktu">{String(Math.floor(sisaWaktu / 3600)).padStart(2, '0')} Jam</span>
            <span className="TitikDua">:</span>
            <span className="KotakWaktu">{String(Math.floor((sisaWaktu % 3600) / 60)).padStart(2, '0')} Menit</span>
            <span className="TitikDua">:</span>
            <span className="KotakWaktu">{String(sisaWaktu % 60).padStart(2, '0')} Detik</span>
          </div>
        </div>
      )}

      <h2>Ringkasan Pembayaran</h2>
      <div className="Isi">
        {/* Bagian kiri: card paket yang dipilih, pakai komponen CardPaket yang sama */}
        <div className="PaketDipilih">
          <CardPaket
            title={paket.title}
            harga={paket.harga}
            kualitas={paket.kualitas}
            hargaAngka={paket.hargaAngka}
          />
        </div>

        {/* Bagian kanan: form pembayaran */}
        <div className="FormPembayaran">
          {/* a. Metode pembayaran (radio) */}
          <div className="Bagian">
            <h3>Metode Pembayaran</h3>
            <label className="Pilihan">
              <input
                type="radio"
                name="metode"
                value="kartu"
                checked={metode === 'kartu'}
                onChange={() => setMetode('kartu')}
              />
              <span>Kartu Debit/Kredit</span>
            </label>
            <label className="Pilihan">
              <input
                type="radio"
                name="metode"
                value="bca"
                checked={metode === 'bca'}
                onChange={() => setMetode('bca')}
              />
              <span>BCA Virtual Account</span>
            </label>
          </div>

          {/* b. Kode voucher */}
          <div className="Bagian">
            <h3>Kode Voucher</h3>
            <div className="Voucher">
              <input
                type="text"
                placeholder="Masukkan kode voucher"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
              />
              <button type="button">Gunakan</button>
            </div>
          </div>

          {/* c. Ringkasan transaksi (dinamis sesuai paket) */}
          <div className="Bagian">
            <h3>Ringkasan Transaksi</h3>
            <div className="Baris">
              <span>Paket Premium {paket.title}</span>
              <span>{formatRupiah(paket.hargaAngka)}</span>
            </div>
            <div className="Baris">
              <span>Biaya Admin</span>
              <span>{formatRupiah(biayaAdmin)}</span>
            </div>
            <div className="Baris Total">
              <span>Total Pembayaran</span>
              <span>{formatRupiah(total)}</span>
            </div>
          </div>

          {/* d. Tombol bayar: klik untuk membuka panel pembayaran */}
          <button type="button" className="TombolBayar" onClick={() => setTampilBayar(true)}>
            Bayar
          </button>

          {/* e. Panel pembayaran: muncul setelah tombol Bayar diklik,
              berisi countdown 15 menit dan tata cara bayar sesuai metode */}
          {tampilBayar && (
            <div className="PanelBayar">
              <div className="PanelBayarHeader">
                <h3>Selesaikan Pembayaran</h3>
              </div>

              {metode === 'bca' ? (
                <ol className="CaraBayar">
                  <li>Buka aplikasi BCA Mobile Banking atau akses BCA Internet Banking.</li>
                  <li>Login ke akun Anda.</li>
                  <li>Pilih menu "Transfer" atau "Pembayaran"..</li>
                  <li>Pilih opsi "Virtual Account" atau "Virtual Account Number".</li>
                  <li>Masukkan nomor virtual account dan jumlah pembayaran, lalu konfirmasikan pembayaran.</li>
                </ol>
              ) : (
                <ol className="CaraBayar">
                  <li>Siapkan kartu debit/kredit Anda.</li>
                  <li>Anda akan diarahkan ke halaman pembayaran kartu yang aman.</li>
                  <li>Masukkan nomor kartu, tanggal kedaluwarsa, dan CVV.</li>
                  <li>Ikuti instruksi verifikasi (misalnya OTP) dari bank Anda.</li>
                  <li>Setelah berhasil, langganan Premium Anda langsung aktif.</li>
                </ol>
              )}

              <div className="PanelBayarFooter">
                <span>Total: <strong>{formatRupiah(total)}</strong></span>
                <button
                  type="button"
                  className="TombolTutup"
                  onClick={() => setTampilBayar(false)}
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pembayaran
