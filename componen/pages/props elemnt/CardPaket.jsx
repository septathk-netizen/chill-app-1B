import { useNavigate } from 'react-router-dom'
import '../../../style/CardPaket.css'
import Ceklis from '../../../src/assets/check.png'

// Komponen card paket langganan. Semua data dibawa lewat props,
// termasuk hargaAngka (harga dalam angka) untuk hitung total di halaman pembayaran.
function CardPaket({ title, harga, kualitas, hargaAngka }) {
  const navigate = useNavigate()

  // Saat tombol Langganan diklik, pindah ke /pembayaran sambil membawa data card ini
  const handleLangganan = () => {
    navigate('/pembayaran', {
      state: { title, harga, kualitas, hargaAngka }
    })
  }
return (
        <div className="Card">
          <div className='Individual'>
            <h2>{title}</h2>
            <h3>{harga}</h3>


            <div className='Ceklis0'>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>Tidak ada iklan</p>
              </div>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>{kualitas}</p>
              </div>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>Download Konten Pilihan</p>
              </div>
            </div>

 <div className='Syarat'>
        {/* onClick dipasang di <button>, bukan di <h3> di dalamnya */}
        <button onClick={handleLangganan}>
          <h3>Langganan</h3>
        </button>
            <p>Syarat dan Ketentuan Berlaku</p>
            </div>

          </div>
        </div>
    )
}
export default CardPaket;