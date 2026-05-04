import React from "react";
import { Link } from "react-router-dom";
import { Globe, Users, ArrowDown, ArrowRight } from "lucide-react";

function About() {
  const videos = [
    "https://www.youtube.com/embed/3oTLyPPrZE4",
    "https://www.youtube.com/embed/eUBRVWQIF2s"
  ];

  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Behind-the-stage.jpg"
            alt="Background"
            className="h-full w-full object-cover object-[70%_center] md:object-center opacity-90 md:opacity-100"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] md:backdrop-blur-0 md:bg-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 md:px-12 md:py-20">
          <div className="w-full max-w-3xl space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-5">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="h-[2px] w-8 md:w-12 bg-[#b8946a]"></div>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#b8946a] uppercase">
                  Beyond What You See
                </span>
              </div>
              <h1 className="text-[48px] xs:text-[56px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tighter text-[#0f172a] uppercase">
                BEHIND <br /> 
                <span className="block mt-1">THE STAGE</span>
              </h1>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="h-[3px] w-12 md:w-16 bg-[#b8946a]"></div>
              <p className="max-w-[280px] sm:max-w-md text-lg md:text-2xl font-medium leading-tight md:leading-relaxed text-gray-800">
                Budaya dunia terhubung melalui panggung digital yang tak terlihat.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8 pt-2 md:pt-4">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1e293b] text-white shadow-lg transition-transform group-hover:scale-110">
                  <Globe className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <p className="text-[14px] md:text-[16px] font-bold leading-tight text-gray-900">
                  Platform digital menghubungkan budaya lokal ke audiens global.
                </p>
              </div>
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1e293b] text-white shadow-xl transition-transform group-hover:scale-110">
                  <Users className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <p className="text-[14px] md:text-[16px] font-bold leading-tight text-gray-900">
                  Inilah sistem yang membentuk budaya tanpa batas.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 animate-bounce">
            <ArrowDown className="text-[#b8946a] w-6 h-6" />
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT */}
      <section className="relative z-20 bg-white py-20 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="space-y-20">
            
            <p className="mx-auto max-w-4xl text-xl md:text-3xl font-light leading-relaxed text-gray-600 text-justify">
              Budaya yang Anda lihat berasal dari berbagai negara dan latar belakang yang berbeda. 
              Namun, semuanya dapat hadir dalam satu ruang yang sama karena adanya sistem yang bekerja di baliknya.
            </p>

            <div className="flex justify-center items-center gap-4">
               <div className="h-[1px] w-12 bg-gray-200"></div>
               <div className="h-2 w-2 rounded-full bg-[#b8946a]"></div>
               <div className="h-[1px] w-12 bg-gray-200"></div>
            </div>

            <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-10">
               <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#b8946a]">Digitalisasi</h4>
                  <p className="text-gray-500 leading-relaxed text-justify font-light">
                    Sistem tersebut adalah digitalisasi. Melalui platform digital seperti 
                    YouTube dan TikTok, budaya dapat direkam, dibagikan, dan diakses oleh siapa saja.
                  </p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#b8946a]">Dampak Global</h4>
                  <p className="text-gray-500 leading-relaxed text-justify font-light">
                    Hal ini membuat budaya yang sebelumnya bersifat lokal kini dapat dikenal secara global, 
                    menciptakan jembatan pemahaman lintas bangsa yang belum pernah terjadi sebelumnya.
                  </p>
               </div>
            </div>

            <div className="flex flex-col items-center pt-10">
              <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-[#0f172a] text-center leading-none">
                How Digitalization <br className="md:hidden" /> Connects Culture
              </h2>
              
              <div className="mt-6 h-[6px] md:h-[8px] w-32 md:w-48 bg-blue-600"></div>
              
              <p className="mt-8 max-w-2xl text-center text-gray-500 text-lg md:text-xl font-light italic leading-relaxed px-4">
                "Video berikut menunjukkan bagaimana teknologi digital menghubungkan budaya dari berbagai belahan dunia dan mengubah cara kita mengaksesnya"
              </p>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {videos.map((src, index) => (
                  <div key={index} className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100 shadow-2xl">
                    <iframe
                      src={src}
                      title={`YouTube video player ${index}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

           {/* --- PENAMBAHAN BUTTON NAVIGASI KE TENGAH (BOTTOM) --- */}
<div className="flex justify-center pt-12">
  <Link 
    to="/contact" 
    className="group flex flex-col items-center gap-4 transition-all"
  >
    {/* Lingkaran Tombol */}
    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#0f172a] text-white shadow-lg transition-transform group-hover:scale-110 group-hover:bg-[#b8946a]">
      <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
    </div>
  </Link>
</div>
            {/* ---------------------------------------------------- */}
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;