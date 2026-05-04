import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate jika ingin tombol berfungsi
import { ArrowRight } from "lucide-react"; // Opsional: untuk ikon panah

function Layanan() {
  const navigate = useNavigate();

 const daftarLayanan = [
  // Baris Pertama
  { id: "laos", title: "Laos", image: "/images/layanan3.jpg" },
  { id: "morocco", title: "Morocco", image: "/images/layanan4.jpg" },
  { id: "ethiopia", title: "Ethiopia", image: "/images/layanan1.jpg" },
  { id: "indonesia", title: "Indonesia", image: "/images/Tari-lolu1.jpg" },
  
  // Baris Kedua (Tambahan sesuai permintaan Anda)
 { title: "Mongolia", image: "/images/Mongolia.jpg" },
 { title: "Kyrgyzstan ", image: "/images/Kyrgyzstan.jpg" },
 { title: "Bhutan", image: "/images/Bhutan — Cham Dance.jpg" },   
 { title: "Georgia", image: "/images/Georgia — Polyphonic Singing.jpg" }, 
];

  return (
    <main className="flex-grow bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 uppercase">
            EXPLORE CULTURES
          </h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Menjelajahi keberagaman tradisi dan seni melalui pengalaman digital yang imersif.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-20">
          {daftarLayanan.map((item) => (
            <Link
              to={`/view-galeri/${item.id}`}
              key={item.id}
              className="flex flex-col items-start group relative"
            >
              <div className="relative w-full overflow-hidden bg-gray-100 rounded-xl shadow-md border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full aspect-video object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="mt-5 w-full">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 transition-all duration-500 group-hover:w-20"></div>
                <div className="mt-4 flex items-center overflow-hidden">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em]">
                    View Gallery
                  </span>
                  <span className="ml-2 text-blue-600 transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- BAGIAN BARU: GO BEHIND THE STAGE --- */}
        <div className="w-full flex flex-col items-center pt-10 border-t border-gray-100">
          <p className="text-gray-500 text-sm md:text-base mb-8 text-center italic max-w-2xl">
            "These cultures may appear different, but they are all connected through the same digital stage"
          </p>
          
          <button 
  onClick={() => {
    navigate("/about");
    // Gunakan setTimeout sedikit agar navigasi selesai baru scroll dijalankan
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }}
  className="group relative px-8 py-4 bg-[#2D3344] text-white rounded-full font-bold text-lg shadow-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
>
  <span className="relative z-10 flex items-center">
    Go Behind the Stage
  </span>
</button>
        </div>
        {/* --------------------------------------- */}

      </div>
    </main>
  );
}

export default Layanan;