import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ViewGaleri from "./components/ViewGaleri";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Tentang from "./pages/about";
// import Kontak from "./pages/Kontak";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
        
        {/* Navbar */}
        <Navbar />

        <div className="flex-grow flex flex-col">
          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Layanan */}
            <Route path="/layanan" element={<Layanan />} />

            {/* Detail Galeri */}
            <Route path="/view-galeri/:id" element={<ViewGaleri />} />

            {/* Tentang */}
            { <Route path="/about" element={<Tentang />} /> }

            {/* Kontak */}
            {/* <Route path="/kontak" element={<Kontak />} /> */}

            {/* Fallback */}
            <Route path="*" element={<Home />} />

          </Routes>
        </div>

        {/* Footer */}
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