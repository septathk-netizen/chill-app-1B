 import '../../style/UbahPRemium.css'
 import Gambar1 from '../../src/assets/download.png'
 import Gambar2 from '../../src/assets/advertisements-off.png'
 import Gambar3 from '../../src/assets/movie-roll.png'
 import Gambar4 from '../../src/assets/video-4k-box.png'
 import Gambar5 from '../../src/assets/tablet-cellphone.png'
 import Gambar6 from '../../src/assets/message-reply-text.png'
 import CardPaket from './props elemnt/CardPaket.jsx'

 function UbahPremium (){
    return(
<>
<div className="Berlangganan">
    <h2> Kenapa Harus Berlangganan </h2>
   <div className='Parent'>

    <div className='Div'>
    <img src={Gambar1}  />
    <p>Download Knnten Pilihan</p>
    </div>
    <div className='Div'>
    <img src={Gambar2}  />
    <p>Tiak Ada Ikalan</p>
    </div>
    <div className='Div'>
    <img src={Gambar3}  />
    <p>Tonton semua Konten</p>
    </div>
    <div className='Div'>
    <img src={Gambar4}  />
    <p>Kualitas Maksimal Sampai Dengan 4K </p>
    </div>
    <div className='Div'>
    <img src={Gambar5}  />
    <p>Tonton di TV,Tablet,Mobile,dan Laptop</p>
    </div>
    <div className='Div'>
    <img src={Gambar6}  />
    <p>Subtitile Untuk Konten Pilihan</p>
    </div>
    </div> 

        </div>
        <div className='PilihPaket'>
  <div className='Text'>
    <h2>Pilih Paket</h2>
    <p>Temukan paket sesuai kebutuhanmu</p>
  </div>

  <div className='CardPaketmu'>
    <CardPaket
       title="Individu"    
       harga="Mulai Rp49.990/bulan 1 Akun"
       kualitas="Kualitas 720p"
    />
    <CardPaket
       title="Berdua"    
       harga="Mulai Rp79.990/bulan 2 Akun"
       kualitas="Kualitas 1080p"
    />
    <CardPaket
       title="Kluasrga"    
       harga="Mulai Rp159.990/bulan 5-7 Akun"
       kualitas="Kualitas 4k"
    />
  </div>
</div>
    




</>

    )
 }
 export default UbahPremium;