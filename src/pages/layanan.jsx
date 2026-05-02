import React from "react";
import { Link } from "react-router-dom";

function Layanan() {
  const daftarLayanan = [
    {
      id: "ethiopia",
      title: "Ethiopia",
      image: "/images/layanan1.jpg",
    },
    {
      id: "indonesia",
      title: "Indonesia",
      image: "/images/layanan2.jpg",
    },
    {
      id: "laos",
      title: "Laos",
      image: "/images/layanan3.jpg",
    },
    {
      id: "morocco",
      title: "Morocco",
      image: "/images/layanan4.jpg",
    },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {daftarLayanan.map((item) => (
            <Link
              to={`/view-galeri/${item.id}`}
              key={item.id}
              className="flex flex-col items-start group relative"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 shadow-sm border border-gray-100 rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Text */}
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
      </div>
    </main>
  );
}

export default Layanan;