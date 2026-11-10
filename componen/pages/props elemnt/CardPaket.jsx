import '../../../style/CardPaket.css'
import Ceklis from '../../../src/assets/check.png'




function CardPaket ({title,harga,kualitas}){
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