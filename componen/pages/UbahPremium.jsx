 import '../../style/UbahPRemium.css'
 import Download from '../../src/assets/download.png'

 function UbahPremium (){
    return(
<>
<div className="Berlangganan">
    <h2> Kenapa Harus Berlangganan </h2>
   <div className='Parent'>

    <div className='Div'>
    <img src={Download}  />
    <p>Download Knnten Pilihan</p>
    </div>
    <div className='Div'>
    <img src={Download}  />
    <p>Tiak Ada Ikalan</p>
    </div>
    <div className='Div'>
    <img src={Download}  />
    <p>Tonton semua Konten</p>
    </div>
    <div className='Div'>
    <img src={Download}  />
    <p>Kualitas Maksimal Sampai Dengan 4K </p>
    </div>
    <div className='Div'>
    <img src={Download}  />
    <p>Tonton di TV,Tablet,Mobile,dan Laptop</p>
    </div>
    <div className='Div'>
    <img src={Download}  />
    <p>Subtitile Untuk Konten Pilihan</p>
    </div>
    </div> 


    <div className='PilihPaket'>
        <div className='Text '>
        <h2>Pilih Paket</h2>
        <p>Temukan paket sesuai kebutuhanmu </p>

        </div>

    </div>

    
    
</div>



</>

    )
 }
 export default UbahPremium;