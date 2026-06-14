import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/layanan");
  };

  return (
   <main 
  className="flex-grow flex items-center justify-center px-6 py-24 md:py-20 bg-cover bg-center bg-no-repeat relative min-h-[80vh]"
  // Memanggil gambar background
  style={{ backgroundImage: "url('/images/beranda-background.jpg')" }} 
>
  {/* Perbaikan Overlay: Menghilangkan blur dan mengubah ke hitam transparan agar gambar tajam & teks putih kontras */}
  <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

  {/* Konten Utama */}
  <div className="max-w-4xl text-center flex flex-col items-center relative z-10">
    
    {/* Judul Utama (Diubah ke text-white agar kontras dengan overlay gelap baru) */}
    <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase drop-shadow-md">
      THE INVISIBLE STAGE
    </h1>
    
    {/* Deskripsi */}
    <p className="text-base md:text-xl text-zinc-200 leading-relaxed max-w-2xl px-4 md:px-0 mb-10 drop-shadow">
      Menghadirkan Budaya Tersembunyi Melalui Panggung Digital Tanpa Batas
    </p>

  {/* Tombol Navigasi */}
    <button
      onClick={handleNavigate}
      // bg-[#004e89] atau bg-[#0a4f8f] disesuaikan dengan warna biru navy gelap di gambar Anda
      className="bg-[#024982] hover:bg-[#023866] text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-base md:text-lg border-4 border-white"
    >
      Main Stage
    </button>
    
  </div>
</main>
  );
}

export default Home;