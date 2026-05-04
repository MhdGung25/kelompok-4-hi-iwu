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
        "Ethiopia merupakan salah satu negara di kawasan Afrika Timur yang dikenal memiliki warisan budaya yang sangat kaya dan beragam, mencerminkan nilai historis, spiritual, serta identitas etnis yang kuat. Berbagai tradisi seperti musik, tarian, dan ritual sosial berkembang dalam kehidupan masyarakatnya. Salah satu bentuk ekspresi budaya yang masih lestari hingga saat ini adalah Eskista Dance, yaitu tarian tradisional khas Ethiopia yang menonjolkan gerakan bahu, leher, dan dada secara cepat dan ritmis.Eskista telah berkembang sejak berabad-abad lalu sebagai bagian dari kehidupan sosial masyarakat Ethiopia, terutama dalam komunitas Amhara dan Tigray. Tarian ini biasanya ditampilkan dalam berbagai acara seperti perayaan adat, festival budaya, upacara pernikahan, serta pertemuan sosial lainnya. Eskista dapat dilakukan oleh laki-laki maupun perempuan, baik secara individu maupun berkelompok, sebagai bentuk ekspresi kegembiraan, identitas budaya, dan solidaritas sosial.",
        secondaryDescription:"Salah satu ciri khas utama Eskista terletak pada teknik gerakan tubuh bagian atas yang intens dan terkoordinasi, terutama pada bahu yang digerakkan secara cepat mengikuti irama musik tradisional. Gerakan ini sering dipadukan dengan langkah kaki dan ekspresi wajah yang energik, menciptakan pertunjukan yang unik dan menarik secara visual. Dari segi kostum, penari biasanya mengenakan pakaian tradisional Ethiopia seperti habesha kemis (gaun putih dengan bordir khas) untuk perempuan, serta pakaian adat sederhana dengan aksen kain tenun untuk laki-laki, yang memperkuat identitas budaya dalam pertunjukan tersebut.",
         videoUrl: "https://www.youtube.com/embed/aaIrEAatWTg", // Format embed agar bisa tampil
      culturalPerspective:"Dalam perspektif budaya massa dan budaya populer, Eskista Dance pada dasarnya bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan secara luas dalam industri hiburan global. Tarian ini bersifat lokal dan berakar kuat pada tradisi masyarakat tertentu. Namun demikian, perkembangan digitalisasi telah membawa perubahan signifikan dalam cara budaya ini dikenal oleh dunia luar.Melalui platform digital seperti TikTok dan YouTube, Eskista Dance kini mulai muncul dalam bentuk konten visual yang dapat diakses oleh audiens global. Gerakan yang unik dan ekspresif menjadikan tarian ini mudah menarik perhatian dalam format video pendek maupun pertunjukan digital.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu mengangkat budaya lokal ke dalam ruang global. Dalam konteks ini, batas antara budaya tradisional dan budaya populer menjadi semakin cair, di mana praktik budaya seperti Eskista mulai bertransformasi dari tradisi lokal menjadi bagian dari konsumsi budaya global.",
      mainImage: "/images/Ethiopia.jpg",
      extraImages: [
        "/images/ethiopia-1.jpg",
        "/images/ethiopia-2.jpg",
        "/images/ethiopia-3.jpg",
      ],
    },
    indonesia: {
  country: "Indonesia",
  mainTitle: "TARI LULO DAN KARIA CEREMONY",
  description: "Indonesia merupakan negara kepulauan yang memiliki keragaman budaya yang sangat luas, dipengaruhi oleh sejarah panjang interaksi antar-etnis, agama, dan tradisi lokal. Kekayaan budaya ini tercermin dalam berbagai praktik sosial dan ritual yang berkembang di tiap daerah. Salah satu wilayah yang memiliki tradisi budaya khas adalah Sulawesi Tenggara, khususnya dalam bentuk Tari Lulo dan Karia Ceremony, yang merepresentasikan dimensi sosial dan spiritual masyarakat setempat.",
  
  // Deskripsi Tari Lulo
  secondaryDescription: "Tari Lulo merupakan salah satu bentuk ekspresi budaya tradisional yang berasal dari masyarakat Tolaki di Sulawesi Tenggara. Sebagai bagian dari kebudayaan agraris, Tari Lulo telah dipraktikkan secara turun-temurun sejak masa lampau, terutama dalam konteks ritual syukuran setelah panen sebagai wujud rasa terima kasih kepada alam. Dalam perkembangannya, fungsi tarian ini mengalami transformasi dari ritual agraris menjadi sarana interaksi sosial yang lebih luas dalam kehidupan masyarakat.Secara etimologis dan filosofis, Tari Lulo mengandung nilai kebersamaan dan kesetaraan, yang tercermin dari pola formasi lingkaran yang digunakan dalam pertunjukannya. Para peserta baik laki-laki maupun perempuan dari berbagai usia dan latar belakang bergabung dalam satu lingkaran dengan saling berpegangan tangan. Formasi ini melambangkan persatuan, solidaritas, serta hubungan harmonis antarindividu dalam komunitas.Gerakan dalam Tari Lulo cenderung sederhana, repetitif, namun ritmis, dengan fokus pada langkah kaki yang bergerak mengikuti irama musik pengiring. Kesederhanaan gerakan ini justru menjadi kekuatan utama, karena memungkinkan siapa saja untuk ikut serta tanpa memerlukan pelatihan khusus. Hal ini menjadikan Tari Lulo sebagai tarian partisipatif, bukan sekadar pertunjukan, melainkan pengalaman kolektif yang melibatkan seluruh peserta. Dari segi musik pengiring, Tari Lulo biasanya diiringi oleh alat musik tradisional maupun modern, seperti gong, gendang, atau bahkan musik elektronik dalam konteks kontemporer. Irama yang dihasilkan bersifat dinamis dan berulang, menciptakan suasana yang hidup dan mendorong keterlibatan aktif dari para peserta.Dalam praktiknya, Tari Lulo sering ditampilkan dalam berbagai acara, seperti perayaan adat, penyambutan tamu, festival budaya, hingga kegiatan sosial masyarakat. Tarian ini juga memiliki fungsi sebagai media komunikasi sosial, di mana interaksi antarindividu terjadi secara alami melalui gerakan dan kebersamaan dalam lingkaran.Dari segi busana, peserta Tari Lulo dapat mengenakan pakaian adat khas Sulawesi Tenggara yang mencerminkan identitas budaya lokal, atau busana sopan dalam konteks acara non-formal. Dalam pertunjukan resmi, penggunaan pakaian adat dengan motif dan warna tertentu menambah nilai estetika serta memperkuat representasi budaya.",
  
  // FOTO UNTUK TARI LULO (Akan muncul setelah teks Lulo)
  extraImages: [
    "/images/Tari-lolu2.jpg",
    "/images/Tari-lolu3.jpg",
    "/images/Tari-lolu4.jpg",
  ],

  // --- TAMBAHAN UNTUK MENGISI BAGIAN PANAH MERAH ---
  kariaDescription: "Sementara itu, Karia Ceremony merupakan salah satu ritual adat yang berasal dari masyarakat Buton, Sulawesi Tenggara, yang memiliki makna penting dalam struktur sosial dan budaya setempat. Tradisi ini telah ada sejak masa Kesultanan Buton dan diwariskan secara turun-temurun sebagai bagian dari sistem nilai yang mengatur kehidupan masyarakat.Karia Ceremony berfungsi sebagai ritus peralihan (rite of passage) yang menandai proses kedewasaan perempuan. Ritual ini tidak hanya menjadi simbol perubahan status individu, tetapi juga merupakan bentuk pengakuan sosial dari masyarakat terhadap kesiapan seseorang dalam menjalani peran dan tanggung jawab sebagai anggota komunitas yang lebih dewasa.Dalam perspektif budaya massa dan budaya populer, baik Tari Lulo maupun Karia Ceremony bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan dalam industri hiburan global. Keduanya berakar kuat pada konteks lokal, dengan fungsi utama yang bersifat sosial dan spiritual, bukan sebagai komoditas hiburan.Namun demikian, perkembangan digitalisasi telah membuka ruang baru bagi kedua budaya ini untuk dikenal lebih luas. Melalui platform digital seperti TikTok dan YouTube, dokumentasi Tari Lulo yang bersifat interaktif serta Karia Ceremony yang sarat makna simbolik mulai dapat diakses oleh audiens global.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu menghubungkan budaya lokal dengan ruang global. Dalam konteks ini, praktik budaya yang sebelumnya terbatas pada komunitas tertentu kini memiliki potensi untuk menjadi bagian dari konsumsi budaya global, tanpa harus kehilangan nilai dan identitas aslinya.",
  
  kariaImages: [
    "/images/Tari-lolu5.jpg",
    "/images/Tari-lolu6.jpg",
    "/images/Tari-lolu7.jpg",
  ],
  // ------------------------------------------------

  culturalPerspective: "Dalam perspektif budaya massa dan budaya populer, baik Tari Lulo maupun Karia Ceremony bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan dalam industri hiburan global. Keduanya berakar kuat pada konteks lokal, dengan fungsi utama yang bersifat sosial dan spiritual, bukan sebagai komoditas hiburan.Namun demikian, perkembangan digitalisasi telah membuka ruang baru bagi kedua budaya ini untuk dikenal lebih luas. Melalui platform digital seperti TikTok dan YouTube, dokumentasi Tari Lulo yang bersifat interaktif serta Karia Ceremony yang sarat makna simbolik mulai dapat diakses oleh audiens global.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu menghubungkan budaya lokal dengan ruang global. Dalam konteks ini, praktik budaya yang sebelumnya terbatas pada komunitas tertentu kini memiliki potensi untuk menjadi bagian dari konsumsi budaya global, tanpa harus kehilangan nilai dan identitas aslinya.",
  mainImage: "/images/Tari-lolu-1.jpg",
  videos: [
    "https://www.youtube.com/embed/Zvnf8o5tajY",
    "https://www.youtube.com/embed/VQHLS_QKs2I"
  ]
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
        "/images/laos-ritual-3.jpg",
      ],
    },
    morocco: {
    country: "Morocco",
    mainTitle: "Ritme Musik Gnawa",
    description:
      "Morocco merupakan negara di kawasan Afrika Utara yang dikenal dengan kekayaan budaya hasil pertemuan berbagai peradaban, seperti Arab, Berber (Amazigh), dan Afrika Sub-Sahara. Keberagaman ini tercermin dalam berbagai bentuk ekspresi budaya, mulai dari arsitektur, kuliner, hingga musik tradisional. Salah satu warisan budaya yang masih lestari hingga saat ini adalah Gnawa Music.\n\nGnawa Music merupakan tradisi musik spiritual yang berkembang sejak sekitar abad ke-16, berakar dari komunitas keturunan Afrika Sub-Sahara yang dibawa ke wilayah Morocco. Musik ini awalnya digunakan sebagai bagian dari praktik spiritual dan ritual penyembuhan, yang kemudian berkembang menjadi identitas budaya komunitas Gnawa.",
    secondaryDescription: 
      "Secara umum, Gnawa Music dimainkan oleh para musisi yang disebut “Maâlem” (pemimpin musik) bersama kelompoknya. Mereka menggunakan instrumen tradisional seperti guembri (alat musik petik) dan qraqeb (alat musik perkusi logam) yang menghasilkan ritme repetitif khas. Musik ini biasanya ditampilkan dalam upacara spiritual yang dikenal sebagai “lila”, yaitu ritual malam hari yang bertujuan untuk penyembuhan, refleksi spiritual, dan menjaga keseimbangan batin.\n\nDalam pertunjukannya, para pemain Gnawa mengenakan pakaian tradisional yang khas, seperti jellaba atau gandoura (jubah panjang) yang dihiasi dengan warna-warna cerah dan simbol-simbol tertentu. Selain itu, mereka sering menggunakan topi khas yang dilengkapi dengan hiasan rumbai atau tassel yang bergerak mengikuti irama musik, menciptakan kesan visual yang dinamis. Pakaian ini tidak hanya berfungsi sebagai identitas budaya, tetapi juga memiliki makna simbolik yang berkaitan dengan spiritualitas dan tradisi komunitas Gnawa.",
    videoUrl: "https://www.youtube.com/embed/9wfdX2N1RA0",
    culturalPerspective:
      "Dalam perspektif budaya massa dan budaya populer, Gnawa Music pada dasarnya bukan merupakan budaya populer karena tidak diproduksi secara massal untuk konsumsi global, melainkan memiliki fungsi spiritual dan komunitas yang kuat. Namun, seiring perkembangan digitalisasi, Gnawa mulai mengalami transformasi menjadi bagian dari budaya massa dalam bentuk konten digital dan pertunjukan global.\n\nMelalui platform seperti YouTube dan Spotify, musik Gnawa kini dapat diakses oleh audiens internasional dan bahkan berkolaborasi dengan genre musik modern. Hal ini menunjukkan bahwa digitalisasi berperan sebagai medium yang menghubungkan tradisi lokal dengan pasar global.\n\nFenomena ini memperlihatkan bahwa batas antara budaya tradisional dan budaya populer menjadi semakin dinamis, di mana praktik budaya yang awalnya bersifat lokal dan spiritual dapat bertransformasi menjadi bagian dari konsumsi budaya global tanpa sepenuhnya kehilangan identitas aslinya.",
    mainImage: "/images/Morocco.jpg",
    extraImages: [
      "/images/Morocco-1.jpg",
      "/images/Morocco-2.jpg",
      "/images/Morocco-3.jpg",
    ],
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

      {/* 1. HERO SECTION */}
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

      {/* 2. CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto py-24 px-8 flex flex-col items-center">
        
        {/* Judul Utama */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-gray-900 italic">
            {data.mainTitle}
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto"></div>
        </div>

        {/* Deskripsi Intro */}
        <div className="max-w-4xl text-center mb-20 space-y-6">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* 3. GALLERY IMAGES (Tari Lulo) */}
        {data.extraImages?.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {data.extraImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={img}
                  alt={`${data.country} ${index}`}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-750 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

        {/* 4. DESKRIPSI SEKUNDER (Tari Lulo) */}
        {data.secondaryDescription && (
          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg text-gray-500 leading-relaxed text-justify whitespace-pre-line">
              {data.secondaryDescription}
            </p>
          </div>
        )}

        {/* --- 5. TAMBAHAN KARIA CEREMONY (GAMBAR & TEKS) --- */}
{data.kariaDescription && (
  <div className="w-full max-w-6xl mx-auto mb-20">
    {/* Gambar Otomatis: Jika 1 foto (full), jika 2 foto (setengah), jika 3 (sepertiga) */}
    <div className={`grid gap-6 mb-10 grid-cols-1 ${
      data.kariaImages?.length === 2 ? 'md:grid-cols-2' : 
      data.kariaImages?.length >= 3 ? 'md:grid-cols-3' : ''
    }`}>
      {data.kariaImages?.map((img, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
          <img 
            src={img} 
            alt="Ceremony" 
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      ))}
    </div>

    {/* Teks Deskripsi */}
    <div className="max-w-4xl mx-auto border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-gray-800">Karia Ceremony</h3>
      <p className="text-lg text-gray-600 leading-relaxed text-justify whitespace-pre-line">
        {data.kariaDescription}
      </p>
    </div>
  </div>
)}

{/* 6. VIDEO DOKUMENTASI (DINAMIS) */}
{(data.videos || data.videoUrl) && (
  <div className="w-full mb-20">
    <div className="flex items-center justify-center mb-10">
      <PlayCircle className="w-8 h-8 text-blue-600 mr-3" />
      <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-900">Dokumentasi Visual</h3>
    </div>
    
    {/* Grid Video Otomatis: Jika cuma 1 video, dia akan di tengah (centered) */}
    <div className={`grid gap-8 w-full grid-cols-1 ${
      (data.videos?.length || [data.videoUrl, data.videoUrl2].filter(Boolean).length) >= 2 
      ? 'md:grid-cols-2' 
      : 'max-w-3xl mx-auto' 
    }`}>
      {(data.videos || [data.videoUrl, data.videoUrl2]).filter(Boolean).map((url, idx) => (
        <div key={idx} className="relative aspect-video shadow-2xl rounded-xl overflow-hidden bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={url}
            title={`Video ${idx + 1}`}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
)}

        {/* 7. PERSPEKTIF BUDAYA */}
        {data.culturalPerspective && (
          <div className="max-w-4xl mx-auto bg-gray-50 p-10 border-l-8 border-blue-600 mb-20 shadow-inner rounded-r-xl">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6">
              Perspektif Budaya & Digitalisasi
            </h4>
            <p className="text-gray-700 leading-relaxed italic text-justify whitespace-pre-line">
              {data.culturalPerspective}
            </p>
          </div>
        )}

        {/* 8. FOOTER DECORATION */}
        <div className="mt-12 pt-12 border-t border-gray-100 w-full text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] mb-6">
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