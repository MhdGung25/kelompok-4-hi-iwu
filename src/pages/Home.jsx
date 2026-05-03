import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/layanan");
  };

  return (
    <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl text-center flex flex-col items-center">
        
        {/* Judul Utama */}
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 uppercase">
          THE INVISIBLE STAGE
        </h1>
        
        {/* Deskripsi */}
        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl px-4 md:px-0 mb-10">
           Menghadirkan Budaya Tersembunyi Melalui Panggung Digital Tanpa Batas
        </p>

        {/* Tombol Navigasi */}
        <button
          onClick={handleNavigate}
          className="bg-[#93c5fd] hover:bg-blue-400 text-white font-black py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 text-lg md:text-xl border-4 border-white"
        >
          Main Stage
        </button>
        
      </div>
    </main>
  );
}

export default Home;