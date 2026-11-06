import '../../../style/CardPaket.css'
import Ceklis from '../../../src/assets/check.png'




function CardPaket (){
    return (
        <div className="Card">
          <div className='Individual'>
            <h2>Individual</h2>
            <h3>Mulai Rp49.990/bulan 1 Akun</h3>


            <div className='Ceklis0'>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>Tidak ada iklan</p>
              </div>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>Kualitas 720p</p>
              </div>
              <div className='Ceklis1'>
                <img src= { Ceklis} />
                <p>Download Konten Pilihan</p>
              </div>
            </div>

            <div className='Syarat'>
            <button>
              <h3>Langganan</h3>
            </button>

            <p>Syarat dan Ketentuan Berlaku</p>
            </div>

          </div>
        </div>
    )
}
export default CardPaket;