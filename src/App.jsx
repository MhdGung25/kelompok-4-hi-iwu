import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import ViewGaleri from './components/ViewGaleri';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
        {/* Navbar tetap muncul di semua halaman */}
        <Navbar />
        
        {/* Konten Utama */}
        <div className="flex-grow flex flex-col">
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<Home />} />
            
            {/* Halaman Daftar Layanan/Budaya */}
            <Route path="/layanan" element={<Layanan />} />

            {/* Halaman Detail Galeri (Halaman baru yang kita buat) */}
            <Route path="/view-galeri/:id" element={<ViewGaleri />} />
            
            {/* Route cadangan jika path tidak ditemukan (Optional) */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer Tetap */}
        <footer className="bg-zinc-900 text-white py-10 border-t border-zinc-800">
          <div className="container mx-auto text-center px-4">
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mb-2">
              Explore Cultures Digital Experience
            </p>
            <p className="text-xs md:text-sm text-zinc-400 tracking-wide">
              © 2026 Kelompok 4 - HI IWU 2023
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;