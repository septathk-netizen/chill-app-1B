import '../../style/ProfilSaya.css';
import DaftarSaya from './Daftar-Saya';
import Profil from '../../src/assets/Image.png'
import Maksimal2mb from '../../src/assets/file-upload-outline.png'
import Warning from '../../src/assets/Warning.png'

function ProfilSaya (){
    return(
        <>
        <div className="Profilsaya">

    <h2>Profil Saya</h2>

    <div className="Profil_Card">

        {/* BAGIAN KIRI */}
        <div className="Profil_Kiri">

            {/* Foto Profil */}
            <div className="Profil">

                <img
                    src={Profil}
                    alt="Foto Profil"
                    className="Profil_Foto"
                />

                <div className="Maksimal2mb">

                    <button type="button">Ubah Foto</button>

                    <div className="Info_Upload">
                        <img src={Maksimal2mb} alt="Upload" />
                        <a>Maksimal 2MB</a>
                    </div>

                </div>

            </div>

            {/* Form Profil */}
            <form
                className="From"
                onSubmit={(e) => e.preventDefault()}
            >

                <div className="Form_Group">
                    <label htmlFor="nama">Nama Pengguna</label>
                    <input
                        type="text"
                        id="nama"
                        placeholder="Ketik nama kamu di sini"
                    />
                </div>

                <div className="Form_Group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ketik username kamu di sini"
                    />
                </div>

                <div className="Form_Group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ketik email kamu di sini"
                    />
                </div>

                <button type="submit" className="Btn_Simpan">
                    Simpan
                </button>

            </form>

        </div>


        {/* BAGIAN KANAN */}
        <div className="Mulai_Berlangganan">

            <div className="Langganan_Content">

                <img src={Warning} alt="Warning" />

                <div className="Langganan_Text">

                    <h2>Saat ini anda belum berlangganan</h2>

                    <p>
                        Dapatkan akses tak terbatas ke ribuan film
                        dan series kesukaan kamu
                    </p>

                </div>

            </div>

            <button>Mulai Berlangganan</button>

        </div>

    </div>


    {/* DAFTAR SAYA */}
    <DaftarSaya />

</div>
        </>
    )
}
export default ProfilSaya;
