import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Sesuai gambar: Navbar dan ViewGaleri ada di folder components
import Navbar from './components/Navbar.jsx';
import ViewGaleri from './components/ViewGaleri.jsx'; 

// Sesuai gambar: Home dan Layanan ada di folder pages
import Home from './pages/Home.jsx';
import Layanan from './pages/Layanan.jsx';

// Import CSS global jika diperlukan
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
        {/* Navbar dari folder components */}
        <Navbar />
        
        <div className="flex-grow flex flex-col">
          <Routes>
            {/* Route ke halaman utama (Home.jsx) */}
            <Route path="/" element={<Home />} />
            
            {/* Route ke halaman daftar budaya (Layanan.jsx) */}
            <Route path="/layanan" element={<Layanan />} />
            
            {/* Dynamic Route ke detail galeri (ViewGaleri.jsx) */}
            <Route path="/view-galeri/:id" element={<ViewGaleri />} />
            
            {/* Catch-all route kembali ke Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer sesuai desain kelompok 4 */}
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