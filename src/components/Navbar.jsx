import React, { useState } from 'react'

function Navbar() {
  // State untuk mengontrol menu HP (buka/tutup)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Sisi Kiri: Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-black tracking-widest text-blue-600">LOGO</span>
          </div>

          {/* Sisi Kanan: Menu Laptop (Desktop) - Tersembunyi di HP */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
         <a href="/" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Beranda</a>
          <a href="/layanan" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Layanan</a>
          <a href="#" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Tentang Kami</a>
          <a href="#" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Kontak</a>
            </div>
          </div>

          {/* Tombol Hamburger: Muncul cuma di HP */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon saat menu tutup (Tiga garis) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                /* Icon saat menu buka (Tanda X) */
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile: Muncul saat isOpen true dan hanya di layar kecil */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
       <a href="/" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Beranda</a>
          <a href="/layanan" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Layanan</a>
          <a href="#" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Tentang Kami</a>
          <a href="#" className="block px-3 py-3 rounded-md text-base font-bold hover:bg-white/10">Kontak</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar