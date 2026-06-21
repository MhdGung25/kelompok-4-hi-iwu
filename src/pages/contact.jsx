import React from "react";
import { Link } from "react-router-dom";

function Contact() {
 

  // Helper untuk styling card gambar agar konsisten
  const ImageCard = ({ src, index }) => (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] w-full bg-gray-200">
      <img
        src={src}
        alt={`Tim Kami ${index + 1}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-20 px-6">
     <div className="text-center mb-16">
  {/* Judul tetap di tengah */}
  <h1 className="text-5xl md:text-6xl font-black italic capitalize tracking-tighter text-[#0f172a]">
    Tim Kami
  </h1>
  
  {/* Teks deskripsi pembungkusnya di tengah (mx-auto), tetapi isi teksnya rata kanan-kiri (text-justify) */}
  <p className="mt-4 text-gray-500 italic text-lg max-w-3xl mx-auto text-justify whitespace-pre-line px-4">
    "Behind every culture presented on this platform is a team committed to connecting local traditions with a global audience through digitalization"
  </p>
</div>

{/* CONTAINER UTAMA GRID (Sesuai Sketsa Desain Tim Kami) */}
<div className="max-w-5xl w-full flex flex-col gap-12 mt-12 mx-auto items-center">
  
  {/* Data Anggota Tim Berdasarkan Coretan Sketsa */}
  {(() => {
    const listTim = [
      { nama: "Abdurrahman Jundi Alfath", src: "/images/tim-Abdurrahman-Jundi-Alfath.jpg" }, // Anggota 1
      { nama: "Septiana Sutarman", src: "/images/tim-Septiana-Sutarman.jpg" }, // Anggota 2
      { nama: "Rahmawati Lamabalawa", src: "/images/tim-Rahmawati-Lamabalawa.jpg" },     // Anggota 3
      { nama: "PUTRI CANTIKA WIDYA HERMAWAN", src: "/images/tim-PUTRI-CANTIKA-WIDYA-HERMAWAN.jpg" },   // Anggota 4
      { nama: "Tilawati Fakaubun", src: "/images/tim-Tilawati-Fakaubun.jpg" },       // Anggota 5
      { nama: "Monica Balqish Sari-Banon", src: "/images/tim-Monica-Balqish-Sari-Banon.jpg" },           // Anggota 6
      { nama: "Nurma Amelia Misbah", src: "/images/tim-Nurma-Amelia-Misbah.jpg" }              // Anggota 7
    ];

   return (
  <>
    {/* BARIS 1: 2 FOTO ANGGOTA (Abdulrohman & Sopiana Sutarman) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-6">
      {listTim.slice(0, 2).map((anggota, idx) => (
        <div key={idx} className="flex flex-col items-center group">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-gray-100">
            <img 
              src={anggota.src} 
              alt={anggota.nama} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-black text-gray-800 tracking-wide uppercase text-sm">
              {anggota.nama}
            </p>
            <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase mt-1">
              Anggota
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* BARIS 2: 3 FOTO ANGGOTA (Iramawati, Putri Cika, & Tia Wati) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
      {listTim.slice(2, 5).map((anggota, idx) => (
        <div key={idx + 2} className="flex flex-col items-center group">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-gray-100">
            <img 
              src={anggota.src} 
              alt={anggota.nama} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-black text-gray-800 tracking-wide uppercase text-sm">
              {anggota.nama}
            </p>
            <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase mt-1">
              Anggota
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* BARIS 3: 2 FOTO ANGGOTA (Monica & Nurma) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl px-6">
      {listTim.slice(5, 7).map((anggota, idx) => (
        <div key={idx + 5} className="flex flex-col items-center group">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-gray-100">
            <img 
              src={anggota.src} 
              alt={anggota.nama} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-black text-gray-800 tracking-wide uppercase text-sm">
              {anggota.nama}
            </p>
            <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase mt-1">
              Anggota
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
);
  })()}

</div>

      {/* TOMBOL KEMBALI */}
      <div className="flex justify-center">
        <Link 
          to="/" 
          className="mt-20 group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#b8946a] hover:text-[#0f172a] transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-2 text-lg">
            ←
          </span> 
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default Contact;