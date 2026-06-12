import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, PlayCircle } from "lucide-react";

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
      secondaryDescription:
        "Salah satu ciri khas utama Eskista terletak pada teknik gerakan tubuh bagian atas yang intens dan terkoordinasi, terutama pada bahu yang digerakkan secara cepat mengikuti irama musik tradisional. Gerakan ini sering dipadukan dengan langkah kaki dan ekspresi wajah yang energik, menciptakan pertunjukan yang unik dan menarik secara visual. Dari segi kostum, penari biasanya mengenakan pakaian tradisional Ethiopia seperti habesha kemis (gaun putih dengan bordir khas) untuk perempuan, serta pakaian adat sederhana dengan aksen kain tenun untuk laki-laki, yang memperkuat identitas budaya dalam pertunjukan tersebut.",
      videoUrl: "https://www.youtube.com/embed/aaIrEAatWTg",
      culturalPerspective:
        "Dalam perspektif budaya massa dan budaya populer, Eskista Dance pada dasarnya bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan secara luas dalam industri hiburan global. Tarian ini bersifat lokal dan berakar kuat pada tradisi masyarakat tertentu. Namun demikian, perkembangan digitalisasi telah membawa perubahan signifikan dalam cara budaya ini dikenal oleh dunia luar.Melalui platform digital seperti TikTok dan YouTube, Eskista Dance kini mulai muncul dalam bentuk konten visual yang dapat diakses oleh audiens global. Gerakan yang unik dan ekspresif menjadikan tarian ini mudah menarik perhatian dalam format video pendek maupun pertunjukan digital.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu mengangkat budaya lokal ke dalam ruang global. Dalam konteks ini, batas antara budaya tradisional dan budaya populer menjadi semakin cair, di mana praktik budaya seperti Eskista mulai bertransformasi dari tradisi lokal menjadi bagian dari konsumsi budaya global.",
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
      description:
        "Indonesia merupakan negara kepulauan yang memiliki keragaman budaya yang sangat luas, dipengaruhi oleh sejarah panjang interaksi antar-etnis, agama, dan tradisi lokal. Kekayaan budaya ini tercermin dalam berbagai praktik sosial dan ritual yang berkembang di tiap daerah. Salah satu wilayah yang memiliki tradisi budaya khas adalah Sulawesi Tenggara, khususnya dalam bentuk Tari Lulo dan Karia Ceremony, yang merepresentasikan dimensi sosial dan spiritual masyarakat setempat.",
      secondaryDescription:
        "Tari Lulo merupakan salah satu bentuk ekspresi budaya tradisional yang berasal dari masyarakat Tolaki di Sulawesi Tenggara. Sebagai bagian dari kebudayaan agraris, Tari Lulo telah dipraktikkan secara turun-temurun sejak masa lampau, terutama dalam konteks ritual syukuran setelah panen sebagai wujud rasa terima kasih kepada alam. Dalam perkembangannya, fungsi tarian ini mengalami transformasi dari ritual agraris menjadi sarana interaksi sosial yang lebih luas dalam kehidupan masyarakat.Secara etimologis dan filosofis, Tari Lulo mengandung nilai kebersamaan dan kesetaraan, yang tercermin dari pola formasi lingkaran yang digunakan dalam pertunjukannya. Para peserta baik laki-laki maupun perempuan dari berbagai usia dan latar belakang bergabung dalam satu lingkaran dengan saling berpegangan tangan. Formasi ini melambangkan persatuan, solidaritas, serta hubungan harmonis antarindividu dalam komunitas.Gerakan dalam Tari Lulo cenderung sederhana, repetitif, namun ritmis, dengan fokus pada langkah kaki yang bergerak mengikuti irama musik pengiring. Kesederhanaan gerakan ini justru menjadi kekuatan utama, karena memungkinkan siapa saja untuk ikut serta tanpa memerlukan pelatihan khusus. Hal ini menjadikan Tari Lulo sebagai tarian partisipatif, bukan sekadar pertunjukan, melainkan pengalaman kolektif yang melibatkan seluruh peserta. Dari segi musik pengiring, Tari Lulo biasanya diiringi oleh alat musik tradisional maupun modern, seperti gong, gendang, atau bahkan musik elektronik dalam konteks kontemporer. Irama yang dihasilkan bersifat dinamis dan berulang, menciptakan suasana yang hidup dan mendorong keterlibatan aktif dari para peserta.Dalam praktiknya, Tari Lulo sering ditampilkan dalam berbagai acara, seperti perayaan adat, penyambutan tamu, festival budaya, hingga kegiatan sosial masyarakat. Tarian ini juga memiliki fungsi sebagai media komunikasi sosial, di mana interaksi antarindividu terjadi secara alami melalui gerakan dan kebersamaan dalam lingkaran.Dari segi busana, peserta Tari Lulo dapat mengenakan pakaian adat khas Sulawesi Tenggara yang mencerminkan identitas budaya lokal, atau busana sopan dalam konteks acara non-formal. Dalam pertunjukan resmi, penggunaan pakaian adat dengan motif dan warna tertentu menambah nilai estetika serta memperkuat representasi budaya.",
      extraImages: [
        "/images/Tari-lolu2.jpg",
        "/images/Tari-lolu3.jpg",
        "/images/Tari-lolu4.jpg",
      ],
      kariaDescription:
        "Sementara itu, Karia Ceremony merupakan salah satu ritual adat yang berasal dari masyarakat Buton, Sulawesi Tenggara, yang memiliki makna penting dalam struktur sosial dan budaya setempat. Tradisi ini telah ada sejak masa Kesultanan Buton dan diwariskan secara turun-temurun sebagai bagian dari sistem nilai yang mengatur kehidupan masyarakat.Karia Ceremony berfungsi sebagai ritus peralihan (rite of passage) yang menandai proses kedewasaan perempuan. Ritual ini tidak hanya menjadi simbol perubahan status individu, tetapi juga merupakan bentuk pengakuan sosial dari masyarakat terhadap kesiapan seseorang dalam menjalani peran dan tanggung jawab sebagai anggota komunitas yang lebih dewasa.Dalam perspektif budaya massa dan budaya populer, baik Tari Lulo maupun Karia Ceremony bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan dalam industri hiburan global. Keduanya berakar kuat pada konteks lokal, dengan fungsi utama yang bersifat sosial dan spiritual, bukan sebagai komoditas hiburan.Namun demikian, perkembangan digitalisasi telah membuka ruang baru bagi kedua budaya ini untuk dikenal lebih luas. Melalui platform digital seperti TikTok dan YouTube, dokumentasi Tari Lulo yang bersifat interaktif serta Karia Ceremony yang sarat makna simbolik mulai dapat diakses oleh audiens global.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu menghubungkan budaya lokal dengan ruang global. Dalam konteks ini, praktik budaya yang sebelumnya terbatas pada komunitas tertentu kini memiliki potensi untuk menjadi bagian dari konsumsi budaya global, tanpa harus kehilangan nilai dan identitas aslinya.",
      kariaImages: [
        "/images/Tari-lolu5.jpg",
        "/images/Tari-lolu6.jpg",
        "/images/Tari-lolu7.jpg",
      ],
      culturalPerspective:
        "Dalam perspektif budaya massa dan budaya populer, baik Tari Lulo maupun Karia Ceremony bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan dalam industri hiburan global. Keduanya berakar kuat pada konteks lokal, dengan fungsi utama yang bersifat sosial dan spiritual, bukan sebagai komoditas hiburan.Namun demikian, perkembangan digitalisasi telah membuka ruang baru bagi kedua budaya ini untuk dikenal lebih luas. Melalui platform digital seperti TikTok dan YouTube, dokumentasi Tari Lulo yang bersifat interaktif serta Karia Ceremony yang sarat makna simbolik mulai dapat diakses oleh audiens global.Fenomena ini menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu menghubungkan budaya lokal dengan ruang global. Dalam konteks ini, praktik budaya yang sebelumnya terbatas pada komunitas tertentu kini memiliki potensi untuk menjadi bagian dari konsumsi budaya global, tanpa harus kehilangan nilai dan identitas aslinya.",
      mainImage: "/images/Tari-lolu-1.jpg",
      videos: [
        "https://www.youtube.com/embed/Zvnf8o5tajY",
        "https://www.youtube.com/embed/VQHLS_QKs2I",
      ],
    },
    laos: {
      country: "Laos",
      mainTitle: "Baci Ceremony",
      description:
        "Laos merupakan negara yang memiliki beragam kekayaan budaya yang mencerminkan nilai spiritual dan tradisi masyarakatnya. Salah satu budaya yang masih lestari hingga saat ini adalah Baci Ceremony, yaitu ritual tradisional yang bertujuan untuk menjaga keseimbangan jiwa serta memperkuat hubungan antara individu dengan lingkungan sosial dan spiritualnya. Ritual ini memiliki akar yang dalam dalam kepercayaan masyarakat Laos, terutama di kalangan suku-suku yang mendiami wilayah tersebut. Baci Ceremony sering kali dilakukan pada momen-momen penting seperti pernikahan, kelahiran, atau saat seseorang mengalami perubahan besar dalam hidupnya.",
      secondaryDescription:
        "Dalam pelaksanaannya, Baci Ceremony dilaksanakan melalui rangkaian doa bersama yang dipimpin oleh tokoh adat. Dalam prosesi ini, benang putih diikatkan pada pergelangan tangan sebagai simbol perlindungan dan keseimbangan hidup. Praktik ini tidak hanya bersifat spiritual, tetapi juga mencerminkan nilai kebersamaan dalam kehidupan masyarakat Laos.",
      videoUrl: "https://www.youtube.com/embed/ZABBTXMXfAI",
      culturalPerspective:
        " Dalam perspektif budaya massa dan budaya populer, Baci Ceremony pada dasarnya bukan merupakan bagian dari budaya populer karena tidak diproduksi secara massal maupun dikomersialisasikan untuk konsumsi global. Ritual ini bersifat lokal, sakral, dan terbatas pada komunitas tertentu. Namun, melalui perkembangan digitalisasi, praktik budaya seperti Baci Ceremony mulai mengalami transformação menjadi bagian dari budaya massa dalam bentuk representation digital.Melalui platform seperti YouTube dan TikTok, dokumentasi visual dari ritual ini dapat diakses oleh audiens global. Dalam konteks ini, digitalisasi berperan sebagai medium yang mengubah budaya lokal menjadi konten yang dapat dikonsumsi secara luas, meskipun tanpa menghilangkan nilai tradisional yang melekat.Fenomena ini menunjukkan bahwa batas antara budaya tradisional dan budaya populer menjadi semakin kabur. Digitalisasi tidak hanya menyebarkan budaya populer arus utama, tetapi juga membuka ruang bagi budaya lokal yang sebelumnya tidak terekspos untuk masuk ke dalam ekosistem global.",
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
        "Dalam perspektif budaya massa dan budaya populer, Gnawa Music pada dasarnya bukan merupakan budaya populer karena tidak diproduksi secara massal untuk konsumsi global, melainkan memiliki fungsi spiritual dan komunitas yang kuat. Namun, seiring perkembangan digitalisasi, Gnawa mulai mengalami transformasi menjadi bagian dari budaya massa dalam bentuk konten digital dan pertunjukan global.\n\nMelalui platform seperti YouTube dan Spotify, musik Gnawa kini dapat diakses oleh audiens internasional dan bahkan berkolaborasi dengan genre musik modern. Hal ini menunjukkan bahwa digitalisasi berperan sebagai medium yang menghubungkan tradisi lokal dengan pasar global.\n\nFenomena ini memperlihatkan bahwa batas antara budaya tradisional dan budaya populer menjadi semakin dinamis, di mana praktik budaya yang awalnya bersifat lokal and spiritual dapat bertransformasi menjadi bagian dari konsumsi budaya global tanpa sepenuhnya kehilangan identitas aslinya.",
      mainImage: "/images/Morocco.jpg",
      extraImages: [
        "/images/Morocco-1.jpg",
        "/images/Morocco-2.jpg",
        "/images/Morocco-3.jpg",
      ],
    },
 mongolia: {
  country: "Mongolia",
  mainTitle: "Throat Singing (Khoomei)",
  description:
    "Mongolia merupakan negara yang terletak di Asia Timur dan dikenal dengan sejarah panjang kehidupan masyarakat nomaden yang hidup berdampingan dengan alam. Selama berabad-abad, masyarakat Mongolia mengembangkan berbagai tradisi budaya yang mencerminkan hubungan erat antara manusia, lingkungan, dan spiritualitas. Salah satu warisan budaya yang paling unik dan masih lestari hingga saat ini adalah Throat Singing atau Khoomei, yaitu teknik vokal tradisional yang memungkinkan seorang penyanyi menghasilkan dua atau lebih nada secara bersamaan dalam satu waktu.",
  
  secondaryDescription:
    " Khoomei atau Throat Singing merupakan salah satu warisan budaya paling khas dari Mongolia yang telah dipraktikkan selama berabad-abad oleh masyarakat nomaden di wilayah stepa, gurun, dan Pegunungan Altai. Tradisi ini berkembang dari kehidupan masyarakat yang sangat dekat dengan alam. Bagi masyarakat Mongolia, alam bukan sekadar tempat tinggal, melainkan bagian dari kehidupan spiritual yang harus dihormati dan dijaga. Oleh karena itu, berbagai unsur alam seperti suara angin yang berhembus di padang rumput, gemericik sungai pegunungan, kicauan burung, hingga suara hewan ternak menjadi sumber inspirasi utama dalam perkembangan teknik vokal Khoomei.\n\n" +
    "Secara historis, Khoomei telah dikenal sejak masa Kekaisaran Mongolia dan diwariskan secara lisan dari generasi ke generasi. Tradisi ini banyak berkembang di wilayah Mongolia Barat, khususnya Pegunungan Altai, yang dikenal sebagai pusat perkembangan seni vokal tersebut. Dalam kehidupan masyarakat nomaden, Khoomei tidak hanya berfungsi sebagai hiburan, tetapi juga menjadi sarana untuk mengekspresikan rasa syukur, penghormatan terhadap alam, serta identitas budaya komunitas. Oleh karena itu, nyanyian ini sering ditampilkan dalam berbagai kegiatan sosial, festival budaya, perayaan tradisional, hingga upacara adat tertentu.\n\n" +
    "Keunikan utama Khoomei terletak pada kemampuannya menghasilkan dua atau lebih nada secara bersamaan. Teknik ini dilakukan dengan mengontrol pernapasan, posisi lidah, rongga mulut, tenggorokan, dan resonansi suara secara sangat presisi. Saat bernyanyi, seorang penyanyi menghasilkan nada dasar yang rendah dan dalam, kemudian memanipulasi resonansi suara sehingga muncul nada tinggi yang terdengar seperti siulan. Kombinasi kedua nada tersebut menciptakan efek suara yang unik dan sering kali menyerupai suara alam.\n\n " +
    "Dalam perkembangannya, Khoomei memiliki beberapa gaya atau teknik yang berbeda. Salah satunya adalah Sygyt, yang menghasilkan nada tinggi menyerupai siulan burung. Teknik Kargyraa menghasilkan suara yang lebih dalam dan berat, menyerupai gemuruh angin atau suara pegunungan. Sementara itu, teknik Borbangnadyr menciptakan efek suara bergetar yang menyerupai aliran sungai. Setiap teknik memiliki karakteristik tersendiri dan mencerminkan hubungan masyarakat Mongolia dengan lingkungan alam di sekitarnya.\n\n" +
    "Tradisi Khoomei umumnya dipelajari sejak usia muda melalui proses pembelajaran langsung dari anggota keluarga atau guru seni tradisional. Dahulu, teknik ini lebih banyak dibawakan oleh laki-laki karena dianggap memerlukan kekuatan pernapasan yang besar. Namun, seiring perkembangan zaman, semakin banyak perempuan Mongolia yang turut mempelajari dan mempertunjukkan Khoomei, sehingga tradisi ini menjadi lebih inklusif tanpa menghilangkan nilai budayanya.\n\n" +
    "Dalam setiap pertunjukan, Khoomei sering diiringi oleh alat musik tradisional Mongolia yang disebut Morin Khuur atau Horsehead Fiddle. Alat musik gesek ini memiliki dua senar dan kepala berbentuk kuda pada bagian atasnya. Kuda memiliki posisi yang sangat penting dalam kehidupan masyarakat Mongolia karena menjadi simbol kebebasan, kekuatan, dan identitas budaya nomaden. Oleh karena itu, Morin Khuur tidak hanya berfungsi sebagai alat musik pengiring, tetapi juga sebagai simbol hubungan antara manusia, alam, dan tradisi yang diwariskan turun-temurun.\n\n" +
    "Para penampil Khoomei biasanya mengenakan pakaian tradisional Mongolia yang disebut Deel, yaitu jubah panjang yang dirancang untuk menghadapi iklim ekstrem di wilayah Mongolia. Deel umumnya dibuat dari bahan wol, sutra, atau katun tebal dan dilengkapi dengan ikat pinggang berwarna cerah. Warna serta motif yang digunakan sering kali menunjukkan identitas daerah, status sosial, atau acara yang sedang berlangsung. Selain Deel, para penampil juga mengenakan sepatu bot kulit khas Mongolia dan topi tradisional yang menambah kesan autentik dalam pertunjukan budaya tersebut.",
  videoUrl: "https://www.youtube.com/embed/EOpUZ9uAKz0", // Ganti dengan URL embed video Mongolia yang kamu punya
  
  culturalPerspective:
    "Dalam perspektif budaya massa dan budaya populer, Throat Singing bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikembangkan sebagai bagian dari industri hiburan global. Tradisi ini berakar kuat pada komunitas lokal dan diwariskan secara turun-temurun sebagai bagian dari identitas budaya masyarakat Mongolia. Oleh karena itu, eksistensinya lebih dekat dengan budaya tradisional daripada budaya populer yang berorientasi pada pasar.\n\n" +
    "Dengan adanya perkembangan teknologi digital telah membuka peluang baru bagi Throat Singing untuk dikenal oleh masyarakat internasional. Melalui platform digital seperti YouTube, TikTok, dan Spotify, rekaman pertunjukan Khoomei kini dapat diakses oleh audiens dari berbagai negara. Beberapa musisi bahkan menggabungkan teknik Throat Singing dengan musik modern, sehingga menarik perhatian generasi muda dan memperluas jangkauan budaya ini ke tingkat global\n\n" +
    "Fenomena tersebut menunjukkan bahwa digitalisasi berperan sebagai medium yang mampu menghubungkan budaya lokal dengan audiens internasional. Tradisi yang sebelumnya hanya dikenal dalam komunitas tertentu kini dapat dipelajari, diapresiasi, dan didokumentasikan secara lebih luas. Dalam konteks ini, Throat Singing menjadi contoh bagaimana teknologi digital dapat membantu melestarikan sekaligus memperkenalkan warisan budaya tradisional kepada dunia tanpa menghilangkan nilai dan identitas aslinya.",
  
  mainImage: "/images/Mongolia.jpg",
  extraImages: [
    "/images/mongolia-1.jpg", // Pastikan nama file gambar ini sesuai di folder public/images kamu
    "/images/mongolia-2.jpg",
    "/images/mongolia-3.jpg",
  ],
},
   kyrgyzstan: {
  country: "Kyrgyzstan",
  mainTitle: "Eagle Hunting",
  description:
    "Kyrgyzstan merupakan negara yang terletak di Asia Tengah dan dikenal dengan bentang alam pegunungan yang luas serta tradisi nomaden yang masih kuat hingga saat ini. Sejak berabad-abad lalu, masyarakat Kyrgyz hidup berdampingan dengan alam dan mengembangkan berbagai praktik budaya yang membantu mereka bertahan hidup di lingkungan pegunungan yang keras. Salah satu warisan budaya yang paling unik dan masih dilestarikan hingga kini adalah Eagle Hunting atau tradisi berburu menggunakan elang emas (golden eagle).",
  
  secondaryDescription:
    "Tradisi Eagle Hunting diperkirakan telah ada sejak lebih dari seribu tahun yang lalu dan diwariskan secara turun-temurun oleh masyarakat nomaden di Asia Tengah. Dalam budaya Kyrgyz, berburu dengan elang bukan sekadar aktivitas mencari makanan, tetapi juga merupakan simbol keterampilan, keberanian, kesabaran, dan hubungan harmonis antara manusia dengan alam. Tradisi ini menjadi bagian penting dari identitas budaya masyarakat Kyrgyz dan mencerminkan pengetahuan lokal yang diwariskan dari generasi ke generasi.\n\n" +
    "Pelaku tradisi ini dikenal sebagai Bürkütçü, yaitu pemburu yang melatih dan bekerja sama dengan elang emas untuk berburu hewan seperti rubah, kelinci, dan hewan kecil lainnya. Proses melatih seekor elang membutuhkan waktu bertahun-tahun dan didasarkan pada hubungan saling percaya antara pemburu dan burung tersebut. Karena tingkat kesulitannya yang tinggi, keterampilan ini biasanya diwariskan dalam lingkungan keluarga dan komunitas tertentu.\n\n" +
    "Eagle Hunting biasanya ditampilkan dalam festival budaya, kompetisi tradisional, perayaan nasional, serta berbagai acara pelestarian budaya di Kyrgyzstan. Salah satu acara yang paling terkenal adalah festival berburu tradisional yang mempertemukan para pemburu elang dari berbagai wilayah untuk menunjukkan kemampuan mereka dalam mengendalikan dan bekerja sama dengan burung pemangsa tersebut.\n\n" +
    "Dalam pertunjukan maupun kegiatan berburu tradisional, para pemburu mengenakan pakaian khas nomaden Kyrgyz yang dirancang untuk menghadapi cuaca pegunungan yang dingin. Pakaian tersebut biasanya terdiri dari mantel berbahan kulit atau wol, sepatu bot tinggi, serta topi tradisional yang disebut kalpak, yang menjadi simbol identitas nasional Kyrgyzstan. Sementara itu, elang emas yang digunakan sering kali mengenakan penutup mata khusus sebelum dilepaskan untuk berburu.",
  
  videoUrl: "https://www.youtube.com/embed/aA-48GJMAwY",
  
  culturalPerspective:
    "Dalam perspektif budaya massa dan budaya populer, Eagle Hunting bukan merupakan budaya populer karena tidak diproduksi secara massal maupun dikembangkan sebagai bagian dari industri hiburan global. Tradisi ini berakar kuat pada kehidupan masyarakat nomaden dan memiliki fungsi praktis serta simbolik yang jauh melampaui sekadar hiburan. Oleh karena itu, eksistensinya lebih dekat dengan budaya tradisional yang diwariskan secara turun-temurun.\n\n" +
    "Namun demikian, perkembangan digitalisasi telah membawa perubahan besar dalam tingkat visibilitas budaya ini. Melalui dokumentasi foto, film dokumenter, dan konten video yang diunggah ke platform seperti YouTube, TikTok, serta berbagai media digital lainnya, tradisi Eagle Hunting mulai dikenal oleh masyarakat internasional. Visual yang menampilkan pemburu berkuda di pegunungan dengan elang emas di lengannya menjadi daya tarik yang kuat bagi audiens global.\n\n" +
    "Digitalisasi tidak hanya membantu memperkenalkan Eagle Hunting kepada dunia, tetapi juga berkontribusi dalam upaya pelestarian budaya tersebut. Melalui media digital, generasi muda dan masyarakat internasional dapat mempelajari nilai-nilai budaya yang terkandung di dalamnya tanpa harus mengunjungi Kyrgyzstan secara langsung. Dengan demikian, Eagle Hunting menjadi contoh bagaimana teknologi dapat berfungsi sebagai panggung tak kasat mata yang menghubungkan warisan budaya lokal dengan audiens global.",
  
  mainImage: "/images/Kyrgyzstan.jpg",
  extraImages: [
    "/images/kyrgyzstan-1.jpg",
    "/images/kyrgyzstan-2.jpg",
    "/images/kyrgyzstan-3.jpg",
  ],
},
 bhutan: {
  country: "Bhutan",
  mainTitle: "Cham Dance",
  description:
    "Bhutan merupakan sebuah negara kecil yang terletak di kawasan Pegunungan Himalaya, Asia Selatan. Negara ini dikenal karena keberhasilannya menjaga tradisi, budaya, dan nilai-nilai spiritual di tengah arus modernisasi global. Sebagian besar masyarakat Bhutan menganut agama Buddha Vajrayana, yang memiliki pengaruh kuat terhadap kehidupan sosial, budaya, dan sistem pemerintahan negara tersebut. Salah satu warisan budaya yang paling penting dan masih dilestarikan hingga saat ini adalah Cham Dance, yaitu tarian ritual bertopeng yang menjadi bagian dari tradisi keagamaan masyarakat Bhutan.\n\n" +
    "Pertunjukan Cham Dance biasanya ditampilkan dalam festival keagamaan yang dikenal sebagai Tshechu, yaitu perayaan tahunan yang diselenggarakan di berbagai biara dan dzong (benteng-biara) di Bhutan. Festival ini menjadi salah satu acara budaya dan spiritual terbesar di negara tersebut, di mana masyarakat berkumpul untuk berdoa, menerima berkah, dan menyaksikan berbagai pertunjukan ritual. Oleh karena itu, Cham Dance memiliki peran penting dalam menjaga kesinambungan ajaran agama sekaligus memperkuat identitas budaya masyarakat Bhutan.\n\n" +
    "Para penampil Cham Dance umumnya adalah biksu Buddha atau anggota komunitas yang telah mendapatkan pelatihan khusus. Mereka membawakan tarian dengan gerakan yang terstruktur dan simbolis, yang masing-masing memiliki makna tertentu dalam ajaran Buddha. Setiap gerakan, putaran, dan langkah dalam tarian dirancang untuk menggambarkan kisah-kisah spiritual, kemenangan kebaikan atas kejahatan, serta perjalanan manusia menuju pencerahan.",
  
  secondaryDescription:
    "Tarian Cham diperkirakan telah dipraktikkan sejak abad ke-8 dan diperkenalkan oleh Guru Padmasambhava sebagai media untuk membersihkan energi negatif serta menyebarkan ajaran Dharma. Dalam budaya Bhutan, Cham Dance bukan sekadar seni pertunjukan estetis, melainkan bentuk meditasi aktif dan ritual penyembuhan spiritual bagi komunitas. Setiap gerakan penari yang dinamis, berputar, dan menghentak bumi melambangkan penaklukan kekuatan jahat dan pembawa berkah kedamaian bagi para penontonnya.\n\n" +
    "Seni tari sakral ini biasanya ditampilkan selama festival keagamaan tahunan yang disebut Tshechu, yang diadakan di berbagai benteng biara (Dzong) di seluruh penjuru Bhutan. Para penari, yang terdiri dari para biksu maupun masyarakat awam yang telah disucikan, mengenakan kostum sutra brokat yang megah dengan warna-warni cerah. Musik pengiringnya menggunakan instrumen tradisional biara seperti terompet panjang (dungchen), simbal (rom), dan gendang (nga), menciptakan atmosfer ritmis yang mistis.\n\n" +
    "Ciri khas utama dari Cham Dance terletak pada penggunaan topeng kayu berukuran besar yang diukir dengan sangat detail. Topeng-topeng ini merepresentasikan berbagai wujud dewa pelindung, makhluk mitologis, serta manifestasi spiritual yang menakutkan namun penuh kebijaksanaan. Bagi masyarakat Bhutan, menyaksikan tarian topeng ini diyakini sebagai bentuk ibadah yang dapat menghapus dosa-dosa dan memberikan pencerahan batin.",
  
  // Catatan: Gunakan URL embed YouTube resmi untuk video agar berjalan di iframe.
  // Contoh di bawah menggunakan dua video contoh YouTube embed agar sejajar & tidak blank.
  videoUrl: "https://www.youtube.com/embed/O3FNSuMzv0U", 
  
  culturalPerspective:
    "Di tengah perkembangan dunia modern, Cham Dance menghadapi tantangan untuk tetap mempertahankan nilai-nilai tradisionalnya. Generasi muda Bhutan kini hidup di era yang semakin terhubung dengan budaya global, sehingga pelestarian tradisi menjadi isu penting bagi masyarakat setempat. Oleh karena itu, berbagai festival budaya dan kegiatan pendidikan terus dilakukan untuk menjaga keberlangsungan tarian ini sebagai bagian dari identitas nasional Bhutan.\n\n" +
    "Menariknya, kehadiran teknologi digital turut memberikan dimensi baru bagi pelestarian Cham Dance. Dokumentasi visual yang tersebar melalui internet memungkinkan masyarakat internasional mengenal kekayaan budaya Bhutan tanpa harus hadir secara langsung dalam festival keagamaan. Visual topeng yang penuh warna, kostum yang megah, serta suasana sakral dalam pertunjukan menjadikan Cham Dance salah satu representasi budaya Bhutan yang paling mudah dikenali dalam ruang digital.\n\n" +
    "Perkembangan teknologi telah memberikan ruang baru bagi Cham Dance untuk dikenal oleh masyarakat di berbagai belahan dunia. Melalui dokumentasi foto, video, dan berbagai platform digital, tarian yang sarat akan nilai spiritual ini kini dapat dipelajari, diapresiasi, serta menjadi sumber pengetahuan mengenai budaya Bhutan. Tradisi yang dahulu hanya dapat disaksikan secara langsung dalam festival keagamaan dan lingkungan biara kini dapat diakses oleh khalayak yang lebih luas tanpa batas geografis. Kehadiran media digital tidak hanya memperluas jangkauan informasi budaya, tetapi juga mendukung upaya pelestarian warisan tradisional sekaligus meningkatkan kesadaran masyarakat global akan pentingnya menjaga keberagaman budaya di tengah arus modernisasi.",
  
  mainImage: "/images/BhutanDance.jpg",
  extraImages: [
    "/images/bhutan-1.jpg", 
    "/images/bhutan-2.jpg",
    "/images/bhutan-3.jpg",
    "/images/bhutan-4.jpg",
  ],
},
   georgia: {
  country: "Georgia",
  mainTitle: "Polyphonic Singing",
  description:
    "Georgia merupakan negara yang terletak di kawasan Kaukasus, di perbatasan antara Eropa Timur dan Asia Barat. Negara ini memiliki sejarah peradaban yang panjang dan dikenal karena kekayaan budaya, tradisi, serta seni musik yang diwariskan dari generasi ke generasi. Salah satu warisan budaya yang paling khas dan menjadi identitas masyarakat Georgia adalah Polyphonic Singing, yaitu teknik bernyanyi dengan beberapa suara yang dinyanyikan secara bersamaan untuk menciptakan harmoni yang kompleks dan unik.",
  
  secondaryDescription:
    "Tradisi Polyphonic Singing telah berkembang selama berabad-abad dan diperkirakan telah dipraktikkan sejak masa awal pembentukan masyarakat Georgia. Berbeda dengan paduan suara modern, nyanyian polifonik Georgia memiliki struktur vokal yang khas, di mana setiap penyanyi membawakan melodi yang berbeda namun tetap saling melengkapi. Kombinasi berbagai lapisan suara tersebut menghasilkan harmoni yang kuat dan menjadi ciri utama musik tradisional Georgia.\n\n" +
    "Para pelaku Polyphonic Singing berasal dari berbagai kalangan masyarakat, baik laki-laki maupun perempuan. Namun, dalam beberapa wilayah pedesaan Georgia, tradisi ini secara historis lebih banyak dibawakan oleh kelompok laki-laki. Setiap daerah di Georgia memiliki gaya polyphonic yang berbeda, sehingga menciptakan keragaman musikal yang memperkaya identitas budaya nasional mereka.\n\n" +
    "Dalam pertunjukannya, para penyanyi umumnya mengenakan pakaian tradisional Georgia yang disebut Chokha, yaitu pakaian khas berbentuk mantel panjang dengan desain elegan yang telah menjadi simbol identitas nasional Georgia. Pada acara tertentu, penampilan juga diiringi oleh alat musik tradisional seperti panduri dan chonguri yang menambah kekayaan musikal dalam pertunjukan.\n\n" +
    "Keunikan Polyphonic Singing terletak pada kemampuannya menyatukan berbagai suara yang berbeda menjadi satu harmoni yang selaras. Tradisi ini mencerminkan nilai kerja sama, keseimbangan, dan persatuan yang telah menjadi bagian dari kehidupan masyarakat Georgia selama berabad-abad. Karena nilai historis dan budayanya yang tinggi, tradisi ini diakui oleh UNESCO sebagai salah satu warisan budaya takbenda dunia.",
  
  // Menyiapkan 2 video embed YouTube agar sejajar berdampingan di mode laptop
  videoUrl: "https://www.youtube.com/embed/rg8xrdbnH8E", 
  VideoUrl2: "https://www.youtube.com/embed/mBadsrJ_gzo", 
  
  culturalPerspective:
    "Di era digital, Polyphonic Singing mulai memperoleh perhatian yang lebih luas melalui berbagai platform musik dan media sosial. Rekaman pertunjukan, festival budaya, dan kolaborasi dengan musisi modern memungkinkan tradisi ini dikenal oleh audiens internasional yang sebelumnya tidak familiar dengan budaya Georgia. Meskipun masih relatif kurang dikenal di Indonesia, kehadiran konten musik global telah membantu memperkenalkan keunikan harmoni vokal Georgia kepada masyarakat dari berbagai negara.\n\n" +
    "Perkembangan teknologi dan platform musik digital telah membantu memperluas jangkauan Polyphonic Singing hingga ke berbagai belahan dunia. Melalui rekaman pertunjukan, festival budaya, serta konten musik yang dibagikan secara daring, tradisi vokal yang telah diwariskan selama berabad-abad ini kini dapat dinikmati oleh audiens yang jauh lebih luas. Kehadiran media digital tidak hanya memperkenalkan keunikan harmoni khas Georgia kepada masyarakat internasional, tetapi juga menjadi sarana pertukaran budaya yang memungkinkan orang dari berbagai latar belakang untuk mengenal dan mengapresiasi warisan musik tradisional tersebut. Dengan demikian, digitalisasi turut mendukung upaya pelestarian Polyphonic Singing agar tetap dikenal, dipelajari, dan relevan di tengah perkembangan teknologi serta arus globalisasi.",
  
  mainImage: "/images/Georgia%20%E2%80%94%20Polyphonic%20Singing.jpg",
  extraImages: [
    "/images/georgia-1.jpg", // Otomatis sejajar 3 kolom di laptop karena berisi 3 gambar
    "/images/georgia-2.jpg",
    "/images/georgia-3.jpg",
  ],
},
  };

  // Gunakan ID berhuruf kecil agar tidak sensitif huruf besar-kecil
  const data = kontenBudaya[id?.toLowerCase()] ?? kontenBudaya.laos;

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

      {/* 3. GALLERY IMAGES (Otomatis 3 atau 4 Kolom di Laptop) */}
      {data.extraImages?.length > 0 && (
        <div 
          className={`w-full grid grid-cols-1 gap-6 mb-20 ${
            data.extraImages.length === 4 
              ? "md:grid-cols-4" 
              : "md:grid-cols-3"
          }`}
        >
          {data.extraImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={img}
                alt={`${data.country} ${index}`}
                className="w-full aspect-[3/4] object-cover transition-transform duration-750 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}

      {/* 4. DESKRIPSI SEKUNDER */}
      {data.secondaryDescription && (
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-gray-500 leading-relaxed text-justify whitespace-pre-line">
            {data.secondaryDescription}
          </p>
        </div>
      )}

      {/* 5. TAMBAHAN KARIA CEREMONY (GAMBAR & TEKS) */}
      {data.kariaDescription && (
        <div className="w-full max-w-6xl mx-auto mb-20">
          <div
            className={`grid gap-6 mb-10 grid-cols-1 ${
              data.kariaImages?.length === 2
                ? "md:grid-cols-2"
                : data.kariaImages?.length >= 3
                ? "md:grid-cols-3"
                : ""
            }`}
          >
            {data.kariaImages?.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src={img}
                  alt="Ceremony"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Karia Ceremony
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed text-justify whitespace-pre-line">
              {data.kariaDescription}
            </p>
          </div>
        </div>
      )}

      {/* 6. VIDEO DOKUMENTASI (Otomatis Sejajar / Responsive) */}
      {(data.videos || data.videoUrl || data.VideoUrl2) && (
        <div className="w-full mb-20">
          <div className="flex items-center justify-center mb-10">
            <PlayCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-900">
              Dokumentasi Visual
            </h3>
          </div>

          {/* Logika Grid: Jika total video terkumpul >= 2, buat menjadi 2 kolom di laptop */}
          {(() => {
            // Gabungkan semua potensi video ke dalam satu array bersih
            const allVideos = [
              ...(Array.isArray(data.videos) ? data.videos : []),
              data.videoUrl,
              data.VideoUrl2
            ].filter(Boolean);

            return (
              <div
                className={`grid gap-8 w-full grid-cols-1 ${
                  allVideos.length >= 2 ? "md:grid-cols-2" : "max-w-3xl mx-auto"
                }`}
              >
                {allVideos.map((url, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video shadow-2xl rounded-xl overflow-hidden bg-black"
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={url}
                      title={`Video ${idx + 1}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            );
          })()}
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