import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ViewGaleri from "./components/ViewGaleri";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Tentang from "./pages/about";
import Kontak from "./pages/contact";

// CSS
import "./App.css";

// Komponen Wrapper untuk mengatur tampilan Navbar secara kondisional
function AppContent() {
  const location = useLocation();

  // Memeriksa apakah URL saat ini dimulai dengan '/view-galeri/'
  const isViewGaleri = location.pathname.startsWith("/view-galeri");

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      
      {/* Navbar hanya akan muncul jika halaman saat ini BUKAN View Galeri */}
      {!isViewGaleri && <Navbar />}

      {/* Konten Utama */}
      <main className="flex-grow flex flex-col">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Layanan */}
          <Route path="/layanan" element={<Layanan />} />

          {/* Detail Galeri */}
          <Route path="/view-galeri/:id" element={<ViewGaleri />} />

          {/* Tentang */}
          <Route path="/about" element={<Tentang />} />

          {/* Kontak */}
          <Route path="/contact" element={<Kontak />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer otomatis terdorong dan mengunci di bagian paling bawah layar */}
      <footer className="bg-zinc-900 text-white py-8 md:py-10 border-t border-zinc-800 w-full">
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
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;