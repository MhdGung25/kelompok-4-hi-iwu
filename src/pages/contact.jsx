import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  const extraImages = [
      "/images/temen-rahma-2.jpg",
     "/images/temen-rahma-3.jpg",
    "/images/rahma.jpg",
    "/images/temen-rahma.jpg",
    "/images/temen-rahma-1.jpg",
   "/images/temen-rahma-5.jpg",
    "/images/temen-rahma-4.jpg",
     "/images/rahma.jpg",
    "/images/temen-rahma.jpg",
    "/images/temen-rahma-5.jpg",
  ];

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
        <h1 className="text-5xl md:text-6xl font-black italic capitalize tracking-tighter text-[#0f172a]">
          Tim Kami
        </h1>
        <p className="mt-4 text-gray-500 italic text-lg">
          "Halaman ini sedang dalam pengembangan."
        </p>
      </div>

      {/* CONTAINER UTAMA GRID (Mengikuti desain coretan) */}
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* BARIS 1: 2 FOTO (Laptop: 2 kolom, HP: 1 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 md:px-32">
          {extraImages.slice(0, 2).map((src, index) => (
            <ImageCard key={index} src={src} index={index} />
          ))}
        </div>

        {/* BARIS 2: 3 FOTO (Laptop: 3 kolom, HP: 1 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraImages.slice(2, 5).map((src, index) => (
            <ImageCard key={index + 2} src={src} index={index + 2} />
          ))}
        </div>

        {/* BARIS 3: 2 FOTO (Laptop: 2 kolom, HP: 1 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 md:px-32">
          {extraImages.slice(5, 7).map((src, index) => (
            <ImageCard key={index + 5} src={src} index={index + 5} />
          ))}
        </div>

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