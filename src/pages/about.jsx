import React from "react";
import { Globe, Users } from "lucide-react";

function About() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* Background Image - Dioptimalkan untuk Mobile & Desktop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Behind-the-stage.jpg" // Pastikan file ini sesuai dengan WhatsApp Image 2026-05-03 at 20.30.22.jpg
          alt="Background"
          className="h-full w-full object-cover object-[70%_center] md:object-center opacity-90 md:opacity-100"
        />
        {/* Overlay Responsif: Gelap/Blur di HP agar teks terbaca, Gradient di Laptop */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] md:backdrop-blur-0 md:bg-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent"></div>
      </div>

      {/* Konten Utama */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 md:px-12 md:py-20">
        <div className="w-full max-w-3xl space-y-8 md:space-y-12">
          
          {/* Label Atas */}
          <div className="space-y-3 md:space-y-5">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-[2px] w-8 md:w-12 bg-[#b8946a]"></div>
              <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#b8946a] uppercase">
                Beyond What You See
              </span>
            </div>

            {/* Judul Utama - Skala font adaptif untuk HP & Laptop */}
            <h1 className="text-[48px] xs:text-[56px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tighter text-[#0f172a] uppercase">
              BEHIND <br /> 
              <span className="block mt-1">THE STAGE</span>
            </h1>
          </div>

          {/* Deskripsi & Garis Dekorasi */}
          <div className="space-y-4 md:space-y-6">
            <div className="h-[3px] w-12 md:w-16 bg-[#b8946a]"></div>
            <p className="max-w-[280px] sm:max-w-md text-lg md:text-2xl font-medium leading-tight md:leading-relaxed text-gray-800">
              Budaya dunia terhubung melalui panggung digital yang tak terlihat.
            </p>
          </div>

          {/* List Fitur - Stack vertikal di HP, tetap rapi di Laptop */}
          <div className="space-y-6 md:space-y-8 pt-2 md:pt-4">
            
            {/* Fitur 1 */}
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1e293b] text-white shadow-lg transition-transform group-hover:scale-110">
                <Globe className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <div className="space-y-1">
                <p className="text-[14px] md:text-[16px] font-bold leading-tight text-gray-900">
                  Platform digital menghubungkan budaya lokal ke audiens global.
                </p>
              </div>
            </div>

            {/* Fitur 2 */}
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#1e293b] text-white shadow-xl transition-transform group-hover:scale-110">
                <Users className="h-5 w-5 md:h-7 md:w-7" />
              </div>
              <div className="space-y-1">
                <p className="text-[14px] md:text-[16px] font-bold leading-tight text-gray-900">
                  Inilah sistem yang membentuk budaya tanpa batas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default About;