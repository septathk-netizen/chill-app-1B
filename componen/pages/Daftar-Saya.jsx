import '../../style/DaftarSaya.css'
import { useAuth } from './AuthContext.jsx'

import Frame74 from '../../src/assets/Frame 74 (1).png'
import Frame78 from '../../src/assets/Frame 78 (3).png'
import Frame76 from '../../src/assets/Frame 76 (3).png'
import Frame79 from '../../src/assets/Frame 79 (1).png'
import Image228 from '../../src/assets/image 228.png'
import Frame75 from '../../src/assets/Frame 75.png'
import Frame742 from '../../src/assets/Frame 74 (2).png'
import Componen1 from '../../src/assets/Component 1 (2).png'
import Componen13 from '../../src/assets/Component 1 (3).png'
import Frame76a from '../../src/assets/Frame 76 (5).png'
import Componen1a from '../../src/assets/Component 1 (4).png'
import Frame79a from '../../src/assets/Frame 79 (2).png'


function DaftarSaya (){
    const { daftarSaya, hapusDariDaftar } = useAuth();

    return (
        <div className='DaftarSaya'>

        <h2>Daftar Saya</h2>
        <div className='Img1'>

            {daftarSaya.length === 0 && <p>Belum ada film di Daftar Saya.</p>}
            {daftarSaya.map((film) => (
                <div key={film.id} style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={film.img} alt={film.title} />
                    <button
                        onClick={() => hapusDariDaftar(film.id)}
                        style={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            cursor: 'pointer',
                            background: 'rgba(0,0,0,0.6)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            width: 24,
                            height: 24,
                        }}
                        title="Hapus dari Daftar Saya"
                    >
                        ✕
                    </button>
                </div>
            ))}

        </div>
        </div>
    )
}
<style>
    
</style>

export default DaftarSaya