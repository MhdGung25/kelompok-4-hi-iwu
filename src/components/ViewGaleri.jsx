import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, PlayCircle } from "lucide-react"; // Tambah icon PlayCircle

function ViewGaleri() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const kontenBudaya = {
    ethiopia: {
      country: "Ethiopia",
      mainTitle: "Warisan Tari Gurage",
      description:
        "Ethiopia memiliki kekayaan tradisi tari yang sangat energik, mencerminkan semangat komunitas dan sejarah panjang di wilayah Tanduk Afrika.",
      secondaryDescription: "",
      mainImage: "/images/layanan1.jpg",
      extraImages: [],
    },
    indonesia: {
      country: "Indonesia",
      mainTitle: "Seni Wayang Kulit",
      description:
        "Wayang Kulit adalah seni pertunjukan tradisional Indonesia yang memadukan narasi mitologi dengan keahlian tata pahat dan bayangan yang imersif.",
      secondaryDescription: "",
      mainImage: "/images/layanan2.jpg",
      extraImages: [],
    },
    laos: {
      country: "Laos",
      mainTitle: "Baci Ceremony",
      description:
        "Laos merupakan negara yang memiliki beragam kekayaan budaya yang mencerminkan nilai spiritual dan tradisi masyarakatnya. Salah satu budaya yang masih lestari hingga saat ini adalah Baci Ceremony, yaitu ritual tradisional yang bertujuan untuk menjaga keseimbangan jiwa serta memperkuat hubungan antara individu dengan lingkungan sosial dan spiritualnya. Ritual ini memiliki akar yang dalam dalam kepercayaan masyarakat Laos, terutama di kalangan suku-suku yang mendiami wilayah tersebut. Baci Ceremony sering kali dilakukan pada momen-momen penting seperti pernikahan, kelahiran, atau saat seseorang mengalami perubahan besar dalam hidupnya.",
      secondaryDescription:
        "Dalam pelaksanaannya, Baci Ceremony dilaksanakan melalui rangkaian doa bersama yang dipimpin oleh tokoh adat. Dalam prosesi ini, benang putih diikatkan pada pergelangan tangan sebagai simbol perlindungan dan keseimbangan hidup. Praktik ini tidak hanya bersifat spiritual, tetapi juga mencerminkan nilai kebersamaan dalam kehidupan masyarakat Laos.",
       videoUrl: "https://www.youtube.com/embed/ZABBTXMXfAI", // Format embed agar bisa tampil
      culturalPerspective:
        " Dalam perspektif budaya massa dan budaya populer, Baci Ceremony pada dasarnya bukan merupakan bagian dari budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan untuk konsumsi global. Ritual ini bersifat lokal, sakral, dan terbatas pada komunitas tertentu. Namun, melalui perkembangan digitalisasi, praktik budaya seperti Baci Ceremony mulai mengalami transformasi menjadi bagian dari budaya massa dalam bentuk representasi digital.Melalui platform seperti YouTube dan TikTok, dokumentasi visual dari ritual ini dapat diakses oleh audiens global. Dalam konteks ini, digitalisasi berperan sebagai medium yang mengubah budaya lokal menjadi konten yang dapat dikonsumsi secara luas, meskipun tanpa menghilangkan nilai tradisional yang melekat.Fenomena ini menunjukkan bahwa batas antara budaya tradisional dan budaya populer menjadi semakin kabur. Digitalisasi tidak hanya menyebarkan budaya populer arus utama, tetapi juga membuka ruang bagi budaya lokal yang sebelumnya tidak terekspos untuk masuk ke dalam ekosistem global.",
      mainImage: "/images/layanan5.jpg",
      extraImages: [
        "/images/laos-ritual-1.jpg",
        "/images/laos-ritual-2.jpg",
      ],
    },
    morocco: {
      country: "Morocco",
      mainTitle: "Ritme Musik Gnawa",
      description:
        "Musik Gnawa dari Maroko menggabungkan ritual spiritual dengan ritme Afrika sub-Sahara...",
      secondaryDescription: "",
      mainImage: "/images/layanan4.jpg",
      extraImages: [],
    },
  };

  const data = kontenBudaya[id] ?? kontenBudaya.laos;

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 border-b border-gray-100 flex justify-between items-center">
        <button
          onClick={() => navigate("/layanan")}
          className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Layanan
        </button>

        <div className="flex items-center text-gray-400">
          <MapPin className="w-3 h-3 mr-1.5 text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            {data.country}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden bg-gray-900">
        <img
          src={data.mainImage}
          alt={data.country}
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h1 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-none drop-shadow-2xl select-none">
            {data.country}
          </h1>
        </div>
      </section>

      {/* Content Container */}
      <section className="max-w-5xl mx-auto py-24 px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            {data.mainTitle}
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl text-center mb-24">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            "{data.description}"
          </p>
        </div>

        {/* Gallery Images */}
        {data.extraImages?.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {data.extraImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-100 rounded-sm shadow-2xl">
                <img
                  src={img}
                  alt="detail"
                  className="w-full aspect-square md:aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

              {/* Secondary Description */}
        {data.secondaryDescription && (
          <div className="max-w-3xl mb-24 px-4 md:px-0"> 
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed text-justify">
              {data.secondaryDescription}
            </p>
          </div>
        )}

        {/* --- BAGIAN BARU: Cultural Perspective --- */}
        {data.culturalPerspective && (
          <div className="max-w-3xl bg-gray-50 p-10 border-l-4 border-blue-600 mb-24">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4">
              Perspektif Budaya & Digitalisasi
            </h4>
            <p className="text-gray-700 leading-relaxed italic">
              {data.culturalPerspective}
            </p>
          </div>
        )}

        {/* --- BAGIAN BARU: Video Embed --- */}
        {data.videoUrl && (
          <div className="w-full max-w-4xl mb-24">
            <div className="flex items-center justify-center mb-8">
                <PlayCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-sm font-bold uppercase tracking-[0.3em]">Dokumentasi Visual</h3>
            </div>
            <div className="relative aspect-video w-full shadow-2xl rounded-sm overflow-hidden bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={data.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Footer Decoration */}
        <div className="mt-12 pt-12 border-t border-gray-100 w-full text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] mb-4">
            Digital Heritage Experience
          </p>
          <div className="flex justify-center space-x-4">
            <div className="h-1 w-1 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-1 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewGaleri;