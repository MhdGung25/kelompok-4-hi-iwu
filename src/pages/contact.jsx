import React from "react";

function Contact() {
  const extraImages = [
    "/images/rahma.jpg",
    "/images/teman-rahma.jpg"
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black italic capitalize tracking-tighter text-[#0f172a]">
          Tim Kami
        </h1>
      </div>

      {/* GRID FOTO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {extraImages.map((src, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
          >
            <img
              src={src}
              alt={`Tim Kami ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay tipis saat di-hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {/* TOMBOL KEMBALI */}
      <button 
        onClick={() => window.history.back()}
        className="mt-16 group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#b8946a] hover:text-[#0f172a] transition-colors"
      >
        <span className="transition-transform group-hover:-translate-x-2">←</span> 
        Kembali ke About
      </button>
    </div>
  );
}

export default Contact;