import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fungsi ini akan memaksa browser ke koordinat 0,0 (paling atas)
    window.scrollTo(0, 0);
  }, [pathname]); // Akan berjalan setiap kali path/halaman berubah

  return null;
};

export default ScrollToTop;