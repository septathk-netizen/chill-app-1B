// Halaman "Ringkasan Pembayaran".
// Data paket yang dipilih dikirim dari card lewat navigate(..., { state: {...} })
// dan dibaca di sini dengan useLocation.
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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

          {/* d. Tombol bayar */}
          <button type="button" className="TombolBayar">Bayar</button>
        </div>
      </div>
    </div>
  )
}

export default Pembayaran
