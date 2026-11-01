 import '../../style/ProfilSaya.css';
 import Profil from '../../src/assets/Image.png'
 import Maksimal2mb from '../../src/assets/file-upload-outline.png'
 import Warning from '../../src/assets/Warning.png'

 function ProfilSaya (){
    return(
        <div className="Profilsaya">
<h2>Profil Saya</h2>

<div className='Profil_Card'>

<div className='Profil'>
 <img src={Profil} />
 <div className='Maksimal2mb'>
 <button>Ubah foto</button>
 <img src= {Maksimal2mb}  />
 <a > Maksimal 2MB</a>
 
 </div>
</div>
</div>

<div className='Mulai_Berlangganan'>
    <img src={Warning}  />
    <h2> Saat ini anda belum berlangganan</h2>
    <p>Dapatkan akses tak terbatas ke ribuan film dan series kesukaan kamu</p>
    <button>Mukai Berlangganan</button>

</div>








        </div>
    )
 }
 export default ProfilSaya;