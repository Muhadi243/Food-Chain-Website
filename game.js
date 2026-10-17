/* ============================
   DATA GAME — 10 LEVEL
   ============================ */
const LEVELS = [
  /* ── LEVEL 1: Hutan Tropis ── */
  {
    id: 1, name: "Hutan Tropis", ecosystem: "Hutan", icon: "🌳", difficulty: "Mudah",
    desc: "Di hutan tropis Indonesia, setiap makhluk memiliki perannya. Susun rantai makanan yang benar dari produsen hingga predator puncak.",
    organisms: [
      { id: "daun",  emoji: "🍃", name: "Daun & Rumput",  role: "producer",  order: 0, eats: "Energi matahari & mineral tanah", desc: "Tumbuhan hijau mengubah sinar matahari menjadi energi melalui fotosintesis. Dasar dari seluruh rantai makanan." },
      { id: "ulat",  emoji: "🐛", name: "Ulat",           role: "consumer1", order: 1, eats: "Daun & Rumput",    desc: "Ulat memakan daun secara besar-besaran. Meskipun kecil, populasinya sangat besar dan penting bagi ekosistem." },
      { id: "katak", emoji: "🐸", name: "Katak",          role: "consumer2", order: 2, eats: "Ulat & serangga", desc: "Katak adalah predator serangga yang efisien. Kulitnya yang lembap membutuhkan lingkungan yang basah dan hijau." },
      { id: "elang", emoji: "🦅", name: "Elang",          role: "apex",      order: 3, eats: "Katak & ular",    desc: "Elang adalah predator puncak yang mengendalikan populasi hewan di bawahnya. Penglihatan tajamnya bisa melihat mangsa dari ratusan meter." },
      { id: "jamur", emoji: "🍄", name: "Jamur",          role: "decomposer",order: -1, eats: "Bahan organik mati", desc: "Jamur adalah pengurai yang memecah bahan organik mati. Bukan bagian dari rantai utama produsen-konsumen." },
      { id: "rusa",  emoji: "🦌", name: "Rusa",           role: "consumer1", order: -1, eats: "Rumput & dedaunan", desc: "Rusa adalah herbivora, bukan bagian dari rantai ini. Tapi ia memang memakan produsen!" },
    ],
    chain: ["daun", "ulat", "katak", "elang"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Seekor elang jawa (Nisaetus bartelsi) bisa terbang sejauh 100 km mencari mangsa. Kini mereka terancam punah akibat deforestasi.",
    stars: 0,
  },

  /* ── LEVEL 2: Laut Dangkal ── */
  {
    id: 2, name: "Laut Dangkal", ecosystem: "Laut", icon: "🌊", difficulty: "Mudah",
    desc: "Laut biru menyimpan jaringan kehidupan yang kompleks. Dari fitoplankton mikroskopis hingga hiu yang mendominasi, susun rantai makanan laut yang benar.",
    organisms: [
      { id: "fitoplankton", emoji: "🦠", name: "Fitoplankton", role: "producer",  order: 0, eats: "Sinar matahari & nutrisi laut", desc: "Organisme mikroskopis penghasil oksigen terbesar di bumi. 70% oksigen bumi dihasilkan oleh fitoplankton di lautan." },
      { id: "zooplankton",  emoji: "🦐", name: "Zooplankton",  role: "consumer1", order: 1, eats: "Fitoplankton",      desc: "Hewan renik yang mengapung di lautan dan memakan fitoplankton. Makanan utama bagi ikan-ikan kecil." },
      { id: "ikanKecil",    emoji: "🐟", name: "Ikan Kecil",   role: "consumer2", order: 2, eats: "Zooplankton",       desc: "Ikan-ikan kecil seperti sarden berenang dalam kelompok besar untuk melindungi diri dari predator." },
      { id: "hiu",          emoji: "🦈", name: "Hiu",          role: "apex",      order: 3, eats: "Ikan & mamalia laut", desc: "Hiu telah ada sejak 450 juta tahun lalu. Sebagai predator puncak, hiu menjaga kesehatan ekosistem laut." },
      { id: "bintangLaut",  emoji: "⭐", name: "Bintang Laut", role: "consumer2", order: -1, eats: "Kerang & moluska", desc: "Bintang laut bukan bagian dari rantai ini. Ia adalah predator kerang dan moluska, bukan ikan kecil." },
      { id: "paus",         emoji: "🐋", name: "Paus Biru",    role: "apex",      order: -1, eats: "Krill/Zooplankton", desc: "Paus biru memakan krill secara langsung, melewati rantai ini. Hewan terbesar yang pernah ada di bumi!" },
    ],
    chain: ["fitoplankton", "zooplankton", "ikanKecil", "hiu"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Hiu memakan sekitar 11 kg makanan per minggu — jauh lebih sedikit dari yang dibayangkan. Mereka lebih takut pada manusia daripada sebaliknya.",
    stars: 0,
  },

  /* ── LEVEL 3: Padang Sabana ── */
  {
    id: 3, name: "Padang Sabana", ecosystem: "Padang", icon: "🏜️", difficulty: "Mudah",
    desc: "Sabana Afrika terkenal dengan drama predasi yang epik. Dari rumput kering hingga singa yang berkuasa, bangun rantai makanan sabana.",
    organisms: [
      { id: "rumput",  emoji: "🌾", name: "Rumput Sabana", role: "producer",  order: 0, eats: "Sinar matahari & air hujan",      desc: "Rumput sabana tumbuh cepat dan menjadi sumber makanan utama bagi jutaan herbivora Afrika." },
      { id: "zebra",   emoji: "🦓", name: "Zebra",         role: "consumer1", order: 1, eats: "Rumput & semak",                  desc: "Zebra memiliki pola garis unik seperti sidik jari manusia. Mereka bermigrasi ribuan kilometer mengikuti hujan dan rumput." },
      { id: "cheetah", emoji: "🐆", name: "Cheetah",       role: "consumer2", order: 2, eats: "Zebra & antelop",                 desc: "Cheetah adalah hewan darat tercepat, bisa berlari 112 km/jam. Tapi mereka sering kehilangan mangsanya ke predator yang lebih besar." },
      { id: "singa",   emoji: "🦁", name: "Singa",         role: "apex",      order: 3, eats: "Zebra, cheetah & wildebeest",     desc: "Singa hidup berkelompok (pride) dan berburu secara kooperatif. Betina singa adalah pemburu utama kawanan." },
      { id: "jerapah", emoji: "🦒", name: "Jerapah",       role: "consumer1", order: -1, eats: "Daun akasia",                   desc: "Jerapah makan daun dari pohon akasia tinggi, bukan rumput sabana. Bukan bagian dari rantai ini." },
      { id: "hyena",   emoji: "🐺", name: "Hyena",         role: "apex",      order: -1, eats: "Bangkai & hewan hidup",          desc: "Hyena adalah pemulung dan predator sekaligus. Dalam ekosistem ini, singa yang mendominasi sebagai apex predator." },
    ],
    chain: ["rumput", "zebra", "cheetah", "singa"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Singa adalah satu-satunya kucing yang hidup berkelompok. Auman singa dapat terdengar dari jarak 8 kilometer dan berfungsi untuk menandai wilayah.",
    stars: 0,
  },

  /* ── LEVEL 4: Rawa Gambut ── */
  {
    id: 4, name: "Rawa Gambut", ecosystem: "Rawa", icon: "🌿", difficulty: "Sedang",
    desc: "Ekosistem rawa gambut Indonesia adalah hutan tersembunyi yang kaya. Susun rantai makanan di balik permukaan air cokelat yang gelap.",
    organisms: [
      { id: "ganggang",    emoji: "🌱", name: "Ganggang Air",    role: "producer",  order: 0, eats: "Sinar matahari & mineral air", desc: "Ganggang dan tumbuhan air mengapung di permukaan, menghasilkan oksigen dan menjadi dasar ekosistem rawa." },
      { id: "udang",       emoji: "🦀", name: "Udang Air Tawar", role: "consumer1", order: 1, eats: "Ganggang & detritus",          desc: "Udang air tawar berperan ganda: memakan produsen dan juga membersihkan bahan organik yang membusuk." },
      { id: "ikanGabus",   emoji: "🐡", name: "Ikan Gabus",      role: "consumer2", order: 2, eats: "Udang & ikan kecil",           desc: "Ikan gabus adalah predator rakus di rawa. Di Indonesia, ikan ini juga diolah menjadi berbagai produk makanan bernilai tinggi." },
      { id: "buaya",       emoji: "🐊", name: "Buaya Muara",     role: "apex",      order: 3, eats: "Ikan besar & mamalia",         desc: "Buaya muara adalah reptil terbesar dan paling berbahaya di dunia. Predator puncak rawa yang telah ada sejak zaman dinosaurus." },
      { id: "bangau",      emoji: "🦢", name: "Bangau",          role: "consumer2", order: -1, eats: "Ikan & katak",               desc: "Bangau adalah predator ikan yang datang dari luar rawa. Dalam rantai ini, ikan gabus yang menjadi konsumen ikan kecil." },
      { id: "ecengGondok", emoji: "🌺", name: "Eceng Gondok",    role: "producer",  order: -1, eats: "Nutrisi air & sinar matahari", desc: "Eceng gondok adalah tumbuhan invasif yang bisa merusak ekosistem rawa jika terlalu banyak. Bukan bagian dari rantai utama ini." },
    ],
    chain: ["ganggang", "udang", "ikanGabus", "buaya"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Buaya muara Indonesia (Crocodylus porosus) bisa mencapai panjang 7 meter dan hidup lebih dari 70 tahun. Mereka memiliki gigitan terkuat di antara semua hewan.",
    stars: 0,
  },

  /* ── LEVEL 5: Pegunungan ── */
  {
    id: 5, name: "Pegunungan", ecosystem: "Gunung", icon: "⛰️", difficulty: "Sedang",
    desc: "Di puncak pegunungan yang dingin dan berangin, kehidupan liar bertahan dengan cara yang menakjubkan. Temukan rantai makanannya!",
    organisms: [
      { id: "lumut",    emoji: "🌿", name: "Lumut & Pakis",   role: "producer",  order: 0, eats: "Sinar matahari & embun kabut", desc: "Lumut dan pakis gunung mampu tumbuh di batuan curam dengan mengandalkan embun dan curah hujan tinggi." },
      { id: "kelinci",  emoji: "🐰", name: "Kelinci Gunung",  role: "consumer1", order: 1, eats: "Lumut, rumput & umbi",         desc: "Kelinci gunung memiliki bulu tebal untuk bertahan di suhu dingin. Mereka aktif saat fajar dan senja untuk menghindari predator." },
      { id: "ular",     emoji: "🐍", name: "Ular Gunung",     role: "consumer2", order: 2, eats: "Kelinci & tikus",              desc: "Ular gunung bergerak lambat karena suhu dingin, namun memiliki racun kuat untuk melumpuhkan mangsa sebelum menelannya." },
      { id: "rajawali", emoji: "🦅", name: "Rajawali",        role: "apex",      order: 3, eats: "Ular & mamalia kecil",         desc: "Rajawali emas adalah simbol kekuatan di banyak budaya. Dengan lebar sayap 2 meter, ia menguasai langit pegunungan." },
      { id: "tikusGun", emoji: "🐭", name: "Tikus Gunung",    role: "consumer1", order: -1, eats: "Biji & akar",                desc: "Tikus gunung adalah herbivora yang sering jadi mangsa ular, namun bukan bagian dari rantai utama level ini." },
      { id: "beruang",  emoji: "🐻", name: "Beruang Madu",    role: "apex",      order: -1, eats: "Madu, buah & ikan",          desc: "Beruang madu adalah omnivora, bukan predator spesialis dalam rantai ini. Ia ada di ekosistem yang sama namun jalur berbeda." },
    ],
    chain: ["lumut", "kelinci", "ular", "rajawali"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Rajawali emas bisa menyelam dengan kecepatan 320 km/jam saat menangkap mangsa — lebih cepat dari mobil balap Formula 1!",
    stars: 0,
  },

  /* ── LEVEL 6: Sungai ── */
  {
    id: 6, name: "Sungai Kalimantan", ecosystem: "Sungai", icon: "🏞️", difficulty: "Sedang",
    desc: "Sungai-sungai di Kalimantan menyimpan keanekaragaman hayati yang luar biasa. Susun rantai makanan di aliran sungai yang jernih ini.",
    organisms: [
      { id: "alga",      emoji: "🟢", name: "Alga Sungai",     role: "producer",  order: 0, eats: "Sinar matahari & mineral air", desc: "Alga menempel pada batu-batu sungai dan menghasilkan oksigen terlarut yang dibutuhkan seluruh makhluk air." },
      { id: "siput",     emoji: "🐌", name: "Siput Air",        role: "consumer1", order: 1, eats: "Alga & detritus",             desc: "Siput air merumput di permukaan batu, memakan lapisan alga tipis. Mereka juga membantu menguraikan bahan organik." },
      { id: "ikanNila",  emoji: "🐠", name: "Ikan Nila",        role: "consumer2", order: 2, eats: "Siput & serangga air",        desc: "Ikan nila adalah pemangsa siput yang efisien. Populasinya yang besar membuat ia menjadi ikan budidaya terpenting Indonesia." },
      { id: "biawak",    emoji: "🦎", name: "Biawak Air",       role: "apex",      order: 3, eats: "Ikan & amfibi",               desc: "Biawak air adalah pemangsa ulung di tepian sungai. Lidah bercabangnya mendeteksi bau mangsa dari jarak jauh." },
      { id: "udangSng",  emoji: "🦐", name: "Udang Sungai",     role: "consumer1", order: -1, eats: "Alga & plankton",            desc: "Udang sungai memakan alga seperti siput, namun bukan bagian dari rantai utama di level ini." },
      { id: "bekantan",  emoji: "🐒", name: "Bekantan",         role: "consumer2", order: -1, eats: "Daun & buah",               desc: "Bekantan adalah primata hidung besar khas Kalimantan. Ia memakan daun dan buah, bukan ikan — salah jalur rantai." },
    ],
    chain: ["alga", "siput", "ikanNila", "biawak"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Biawak air (Varanus salvator) dapat menahan napas hingga 15 menit dan berenang dengan cepat menggunakan ekornya. Mereka juga ahli memanjat pohon!",
    stars: 0,
  },

  /* ── LEVEL 7: Pesisir Mangrove ── */
  {
    id: 7, name: "Mangrove Pesisir", ecosystem: "Pesisir", icon: "🌴", difficulty: "Sulit",
    desc: "Hutan mangrove adalah penjaga garis pantai sekaligus pembibitan ikan laut. Susun rantai makanan di ekosistem yang paling produktif di dunia.",
    organisms: [
      { id: "serasah",    emoji: "🍂", name: "Serasah Daun",   role: "producer",  order: 0, eats: "Nutrisi tanah & sinar matahari", desc: "Daun mangrove yang jatuh terurai menjadi detritus — sumber energi utama seluruh rantai makanan mangrove." },
      { id: "kepiting",   emoji: "🦀", name: "Kepiting Bakau", role: "consumer1", order: 1, eats: "Serasah daun & detritus",        desc: "Kepiting bakau menghancurkan daun-daun yang jatuh menjadi partikel kecil, mempercepat penguraian dan menyuburkan lumpur mangrove." },
      { id: "ikanBandeng",emoji: "🐡", name: "Ikan Bandeng",   role: "consumer2", order: 2, eats: "Kepiting kecil & alga",          desc: "Ikan bandeng dibesarkan di tambak mangrove Indonesia. Mereka memakan organisme kecil dan alga yang kaya nutrisi." },
      { id: "elangLaut",  emoji: "🦅", name: "Elang Laut",     role: "apex",      order: 3, eats: "Ikan & reptil air",              desc: "Elang laut perut putih adalah rajanya langit mangrove. Ia menyelam dari ketinggian untuk menangkap ikan dengan cakarnya." },
      { id: "bekekok",    emoji: "🦆", name: "Bangau Kuntul",  role: "consumer2", order: -1, eats: "Ikan kecil & katak",            desc: "Bangau kuntul berdiri tak bergerak di lumpur menunggu ikan lewat. Ia pemangsa ikan juga, namun bukan konsumen kepiting." },
      { id: "biawakPes",  emoji: "🦎", name: "Biawak Pantai",  role: "apex",      order: -1, eats: "Kepiting & ikan",               desc: "Biawak pantai memang predator di mangrove, namun dalam rantai ini posisi apex dipegang oleh elang laut." },
    ],
    chain: ["serasah", "kepiting", "ikanBandeng", "elangLaut"],
    slotLabels: ["Produsen/Detritus", "Detritivor", "Konsumen II", "Konsumen Puncak"],
    funFact: "Hutan mangrove Indonesia mencakup 23% mangrove dunia dan menyimpan karbon 3-5 kali lebih banyak dari hutan hujan tropis per hektarnya!",
    stars: 0,
  },

  /* ── LEVEL 8: Gurun Pasir ── */
  {
    id: 8, name: "Gurun Sahara", ecosystem: "Gurun", icon: "🌵", difficulty: "Sulit",
    desc: "Di gurun yang terik dan kering, hanya yang paling tangguh yang bisa bertahan. Temukan rantai makanan kehidupan gurun yang tersembunyi!",
    organisms: [
      { id: "kaktus",     emoji: "🌵", name: "Kaktus & Semak", role: "producer",  order: 0, eats: "Sinar matahari & kelembapan tanah", desc: "Kaktus menyimpan air di batangnya yang tebal dan berduri untuk bertahan saat musim kering panjang." },
      { id: "belalang",   emoji: "🦗", name: "Belalang Gurun", role: "consumer1", order: 1, eats: "Kaktus & tanaman gurun",          desc: "Belalang gurun memiliki tubuh yang dapat memantulkan panas matahari. Mereka aktif di pagi dan sore untuk menghindari terik." },
      { id: "kadal",      emoji: "🦎", name: "Kadal Pasir",    role: "consumer2", order: 2, eats: "Belalang & serangga",             desc: "Kadal pasir bergerak cepat melintas permukaan pasir panas. Kakinya yang ringan membuatnya tak terbenam di pasir yang halus." },
      { id: "elangGurun", emoji: "🦅", name: "Elang Gurun",    role: "apex",      order: 3, eats: "Kadal & tikus gurun",             desc: "Elang gurun melayang di udara panas mencari mangsa dengan penglihatannya yang sangat tajam dari ketinggian ratusan meter." },
      { id: "unta",       emoji: "🐪", name: "Unta",           role: "consumer1", order: -1, eats: "Kaktus & semak gurun",           desc: "Unta memang memakan kaktus, tapi tidak masuk dalam rantai utama level ini karena ukurannya terlalu besar untuk dimangsa kadal." },
      { id: "kalajengking",emoji:"🦂", name: "Kalajengking",   role: "consumer2", order: -1, eats: "Serangga & laba-laba",           desc: "Kalajengking adalah predator nokturnal gurun, namun mangsa utamanya bukan belalang siang hari seperti dalam rantai ini." },
    ],
    chain: ["kaktus", "belalang", "kadal", "elangGurun"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"],
    funFact: "Kadal pasir (Lacerta agilis) bisa mengatur suhu tubuhnya dengan mengubah sudut tubuhnya terhadap matahari. Mereka bahkan bisa melepas ekor untuk kabur dari predator!",
    stars: 0,
  },

  /* ── LEVEL 9: Hutan Bambu (5 slot!) ── */
  {
    id: 9, name: "Hutan Bambu", ecosystem: "Asia Timur", icon: "🎋", difficulty: "Sangat Sulit",
    desc: "Hutan bambu di Asia Timur adalah ekosistem yang unik dengan rantai makanan lebih panjang. Susun 5 organisme dengan urutan yang tepat!",
    organisms: [
      { id: "bambu",    emoji: "🎋", name: "Bambu Muda",    role: "producer",  order: 0, eats: "Sinar matahari & air tanah",     desc: "Bambu adalah rumput raksasa yang tumbuh hingga 1 meter per hari. Tunas mudanya menjadi makanan penting bagi banyak hewan." },
      { id: "pandaBam", emoji: "🐼", name: "Panda Raksasa", role: "consumer1", order: 1, eats: "Bambu muda",                    desc: "Panda raksasa memakan 12-38 kg bambu setiap hari. Perut mereka sebenarnya milik karnivora, tapi panda telah beradaptasi memakan bambu." },
      { id: "macan",    emoji: "🐯", name: "Macan Tutul",   role: "consumer2", order: 2, eats: "Panda muda & rusa",             desc: "Macan tutul adalah predator soliter yang kuat. Ia bisa membawa mangsa seberat dirinya ke atas pohon untuk menghindari pemangsa lain." },
      { id: "serigala", emoji: "🐺", name: "Serigala Asia",  role: "consumer3", order: 3, eats: "Macan muda & herbivora",       desc: "Serigala Asia berburu dalam kawanan dan dapat mengalahkan macan yang terluka. Mereka menjaga keseimbangan predator menengah." },
      { id: "harimau",  emoji: "🐅", name: "Harimau Siberia", role: "apex",    order: 4, eats: "Serigala, rusa & beruang",      desc: "Harimau Siberia adalah kucing terbesar di dunia. Satu-satunya predator yang bisa mengalahkan beruang dewasa dalam pertarungan langsung." },
      { id: "rakun",    emoji: "🦝", name: "Rakun",          role: "consumer1", order: -1, eats: "Bambu & buah-buahan",         desc: "Rakun adalah omnivora oportunistis. Di hutan bambu mereka memang ada, tapi bukan bagian dari rantai utama level ini." },
      { id: "babi",     emoji: "🐗", name: "Babi Hutan",     role: "consumer2", order: -1, eats: "Umbi & akar bambu",          desc: "Babi hutan mencari makan di bawah tanah mencari umbi, bukan memakan panda — salah jalur dalam rantai ini." },
    ],
    chain: ["bambu", "pandaBam", "macan", "serigala", "harimau"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen III", "Konsumen Puncak"],
    funFact: "Harimau Siberia (Panthera tigris altaica) dapat mencium bau mangsa dari jarak lebih dari 1 km dan bisa melompat sejauh 10 meter dalam satu lompatan!",
    stars: 0,
  },

  /* ── LEVEL 10: Arktik ── */
  {
    id: 10, name: "Lautan Arktik", ecosystem: "Arktik", icon: "🧊", difficulty: "Sangat Sulit",
    desc: "Di bawah permukaan es Arktik, kehidupan berlangsung dalam dingin yang ekstrem. Susun rantai makanan lautan paling keras di bumi!",
    organisms: [
      { id: "iceAlga",  emoji: "🟦", name: "Alga Es",       role: "producer",  order: 0, eats: "Sinar matahari musim panas & mineral es", desc: "Alga es tumbuh di bawah permukaan es laut Arktik saat musim panas. Mereka adalah fondasi seluruh kehidupan di lautan kutub." },
      { id: "krill",    emoji: "🦐", name: "Krill Kutub",   role: "consumer1", order: 1, eats: "Alga es",                  desc: "Krill adalah krustasea kecil yang hidup dalam jumlah miliaran di Arktik. Mereka adalah makanan terpenting di lautan kutub." },
      { id: "ikanKod",  emoji: "🐟", name: "Ikan Kod Arktik", role: "consumer2", order: 2, eats: "Krill & copepoda",      desc: "Ikan kod arktik memiliki protein antibekunya sendiri untuk bertahan di air suhu -1.8°C tanpa membeku." },
      { id: "anjingLaut",emoji:"🦭", name: "Anjing Laut",   role: "consumer3", order: 3, eats: "Ikan kod & cumi-cumi",    desc: "Anjing laut memiliki lapisan lemak tebal hingga 10 cm untuk bertahan di suhu beku. Mereka juga sangat cepat berenang." },
      { id: "beruangEs", emoji:"🐻‍❄️",name: "Beruang Kutub", role: "apex",     order: 4, eats: "Anjing laut & morse",     desc: "Beruang kutub adalah pemangsa puncak Arktik. Bulunya yang tampak putih sebenarnya transparan dan rongga — untuk menyalurkan panas matahari." },
      { id: "pausBowhead",emoji:"🐋",name: "Paus Bowhead",  role: "apex",      order: -1, eats: "Krill & zooplankton",    desc: "Paus bowhead memang predator puncak, namun ia memakan krill secara langsung, melewati rantai ikan kod dan anjing laut." },
      { id: "camarArk", emoji: "🐦", name: "Camar Kutub",   role: "consumer2", order: -1, eats: "Ikan kecil & krill",     desc: "Camar kutub memang memangsa ikan, tapi bukan dari jalur rantai krill→ikan kod→anjing laut→beruang yang dimaksud di sini." },
    ],
    chain: ["iceAlga", "krill", "ikanKod", "anjingLaut", "beruangEs"],
    slotLabels: ["Produsen", "Konsumen I", "Konsumen II", "Konsumen III", "Konsumen Puncak"],
    funFact: "Beruang kutub dapat berenang lebih dari 320 km tanpa henti di lautan beku. Dengan memanasnya bumi, es laut mereka semakin menyusut setiap tahun.",
    stars: 0,
  },
];

const ROLE_LABELS = {
  producer:   "Produsen",
  consumer1:  "Konsumen I",
  consumer2:  "Konsumen II",
  consumer3:  "Konsumen III",
  apex:       "Konsumen Puncak",
  decomposer: "Pengurai",
};

/* ============================
   MODE EKSPLORASI — DATA PETA
   ============================ */
const EXPLORE_MAP = {
  cols: 20,
  rows: 15,
  // Zona ekosistem di peta (rect: {x,y,w,h})
  zones: [
    {
      id: "hutan",
      name: "Hutan Tropis",
      icon: "🌳",
      color: "rgba(34, 139, 34, 0.35)",
      borderColor: "rgba(127, 225, 182, 0.7)",
      x: 1, y: 1, w: 4, h: 4,
      levelId: 1,
      fact: "Hutan tropis Indonesia menyimpan lebih dari 10% spesies tumbuhan & hewan seluruh dunia!",
      prompt: "Temukan rantai makanan hutan tropis →",
    },
    {
      id: "laut",
      name: "Laut Dangkal",
      icon: "🌊",
      color: "rgba(0, 100, 200, 0.3)",
      borderColor: "rgba(138, 183, 255, 0.7)",
      x: 7, y: 0, w: 5, h: 4,
      levelId: 2,
      fact: "Lautan menutupi 71% permukaan bumi dan menghasilkan 70% oksigen yang kita hirup!",
      prompt: "Jelajahi rantai makanan laut →",
    },
    {
      id: "sabana",
      name: "Padang Sabana",
      icon: "🏜️",
      color: "rgba(200, 150, 0, 0.25)",
      borderColor: "rgba(246, 201, 138, 0.7)",
      x: 14, y: 1, w: 5, h: 4,
      levelId: 3,
      fact: "Sabana Afrika menampung lebih dari 40 spesies herbivora berbeda yang berbagi padang rumput yang sama!",
      prompt: "Taklukkan sabana Afrika →",
    },
    {
      id: "rawa",
      name: "Rawa Gambut",
      icon: "🌿",
      color: "rgba(0, 120, 80, 0.28)",
      borderColor: "rgba(154, 216, 190, 0.65)",
      x: 0, y: 7, w: 4, h: 4,
      levelId: 4,
      fact: "Rawa gambut Kalimantan menyimpan karbon lebih banyak dari semua hutan hujan tropis di dunia!",
      prompt: "Masuki rawa gambut Kalimantan →",
    },
    {
      id: "gunung",
      name: "Pegunungan",
      icon: "⛰️",
      color: "rgba(120, 100, 140, 0.28)",
      borderColor: "rgba(179, 155, 255, 0.65)",
      x: 6, y: 6, w: 4, h: 4,
      levelId: 5,
      fact: "Di ketinggian 4000m, suhu bisa turun hingga -20°C di malam hari meski di daerah tropis!",
      prompt: "Daki puncak pegunungan →",
    },
    {
      id: "sungai",
      name: "Sungai Kalimantan",
      icon: "🏞️",
      color: "rgba(30, 144, 255, 0.22)",
      borderColor: "rgba(100, 180, 255, 0.65)",
      x: 12, y: 6, w: 4, h: 4,
      levelId: 6,
      fact: "Sungai Mahakam di Kalimantan adalah rumah bagi lumba-lumba air tawar Irrawaddy yang sangat langka!",
      prompt: "Seberangi sungai Kalimantan →",
    },
    {
      id: "mangrove",
      name: "Mangrove Pesisir",
      icon: "🌴",
      color: "rgba(60, 180, 100, 0.22)",
      borderColor: "rgba(100, 220, 150, 0.65)",
      x: 1, y: 11, w: 4, h: 3,
      levelId: 7,
      fact: "Satu hektar mangrove dapat menyerap karbon 3–5 kali lebih banyak dari hutan hujan tropis!",
      prompt: "Jelajahi hutan mangrove →",
    },
    {
      id: "gurun",
      name: "Gurun Sahara",
      icon: "🌵",
      color: "rgba(210, 160, 50, 0.25)",
      borderColor: "rgba(240, 200, 100, 0.65)",
      x: 7, y: 11, w: 4, h: 3,
      levelId: 8,
      fact: "Gurun Sahara pernah menjadi padang rumput hijau hanya 10.000 tahun yang lalu — berubah akibat pergeseran iklim!",
      prompt: "Bertahan di gurun Sahara →",
    },
    {
      id: "bambu",
      name: "Hutan Bambu",
      icon: "🎋",
      color: "rgba(60, 160, 60, 0.22)",
      borderColor: "rgba(120, 220, 100, 0.65)",
      x: 13, y: 11, w: 4, h: 3,
      levelId: 9,
      fact: "Bambu adalah tanaman paling cepat tumbuh di bumi — bisa mencapai 91 cm hanya dalam satu hari!",
      prompt: "Tembus hutan bambu →",
    },
    {
      id: "arktik",
      name: "Lautan Arktik",
      icon: "🧊",
      color: "rgba(180, 220, 255, 0.2)",
      borderColor: "rgba(200, 235, 255, 0.7)",
      x: 16, y: 9, w: 4, h: 5,
      levelId: 10,
      fact: "Es laut Arktik menyusut 13% per dekade akibat pemanasan global, mengancam seluruh rantai makanan Arktik!",
      prompt: "Jelajahi lautan Arktik beku →",
    },
  ],
};

// Tembok/obstacle sederhana (koordinat sel yang tidak bisa dilewati)
const MAP_WALLS = new Set([
  "5,3","5,4","5,5","11,3","11,4","11,5",
  "5,9","5,10","11,9","11,10","15,6","15,7","15,8","15,9",
]);

/* ============================
   STATE GLOBAL
   ============================ */
let state = {
  currentLevel: null,
  slots: [],
  score: 0,
  completed: {},
  dragging: null,
  // Eksplorasi
  explore: {
    px: 10, py: 7,   // posisi karakter (grid sel)
    keysDown: new Set(),
    moveTimer: null,
    activeZone: null,
  },
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("foodchain_save") || "{}");
    state.completed = saved.completed || {};
    state.score     = saved.score     || 0;
  } catch {}
}

function saveState() {
  localStorage.setItem("foodchain_save", JSON.stringify({
    completed: state.completed,
    score:     state.score,
  }));
}

/* ============================
   NAVIGASI SCREEN
   ============================ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showMenu()        { stopExplore(); showScreen("screen-menu"); }
function showHowToPlay()   { showScreen("screen-howto"); }
function showLevelSelect() { renderLevelGrid(); showScreen("screen-levels"); }
function showModule()      { switchTab("pengertian"); showScreen("screen-module"); }
function showExplore()     { showScreen("screen-explore"); initExplore(); }

/* ============================
   MODUL — SWITCH TAB
   ============================ */
function switchTab(tabId) {
  document.querySelectorAll(".module-tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".module-tab").forEach(el => el.classList.remove("active"));

  const content = document.getElementById("tab-" + tabId);
  if (content) content.classList.add("active");

  const tabs = document.querySelectorAll(".module-tab");
  const tabOrder = ["pengertian", "tingkatan", "ekosistem", "fakta"];
  const idx = tabOrder.indexOf(tabId);
  if (idx !== -1 && tabs[idx]) tabs[idx].classList.add("active");
}

/* ============================
   LEVEL GRID
   ============================ */
const DIFFICULTY_COLOR = {
  "Mudah":       "#9ad8be",
  "Sedang":      "#f6c98a",
  "Sulit":       "#ef9a9a",
  "Sangat Sulit":"#c9a0ff",
};

function renderLevelGrid() {
  const grid = document.getElementById("level-grid");
  grid.innerHTML = "";

  LEVELS.forEach((level, i) => {
    const isLocked    = i > 0 && !state.completed[LEVELS[i - 1].id];
    const starsEarned = state.completed[level.id] || 0;
    const diffColor   = DIFFICULTY_COLOR[level.difficulty] || "#b6c5d9";

    const card = document.createElement("div");
    card.className = "level-card" + (isLocked ? " locked" : "") + (starsEarned > 0 ? " completed" : "");
    card.innerHTML = `
      <div class="level-icon">${level.icon}</div>
      <div class="level-name">${level.name}</div>
      <div class="level-eco">${level.ecosystem}</div>
      <div class="level-difficulty" style="color:${diffColor}">${level.difficulty}</div>
      <div class="stars">${renderStars(starsEarned)}</div>
      ${isLocked ? '<div class="level-lock">🔒</div>' : ""}
    `;
    if (!isLocked) card.onclick = () => startLevel(level.id);
    grid.appendChild(card);
  });
}

function renderStars(n) {
  return [0, 1, 2].map(i => `<span class="${i < n ? "" : "empty"}">★</span>`).join("");
}

/* ============================
   START LEVEL
   ============================ */
function startLevel(levelId) {
  stopExplore();
  const level = LEVELS.find(l => l.id === levelId);
  state.currentLevel = level;
  state.slots = new Array(level.chain.length).fill(null);

  document.getElementById("hud-level-name").textContent = `${level.icon} ${level.name}`;
  document.getElementById("hud-score").textContent = state.score;
  document.getElementById("level-desc").textContent = level.desc;

  renderOrganismPanel();
  renderChainSlots();

  document.getElementById("info-content").innerHTML = `
    <div class="info-placeholder">
      <span>👆</span>
      <p>Klik organisme untuk melihat informasinya</p>
    </div>`;

  showScreen("screen-game");
}

/* ============================
   PANEL ORGANISME
   ============================ */
function renderOrganismPanel() {
  const level = state.currentLevel;
  const list = document.getElementById("organism-list");
  list.innerHTML = "";

  const shuffled = [...level.organisms].sort(() => Math.random() - 0.5);

  shuffled.forEach(org => {
    const isUsed = state.slots.includes(org.id);
    const item = document.createElement("div");
    item.className = "org-item" + (isUsed ? " used" : "");
    item.dataset.orgId = org.id;
    item.draggable = true;
    item.innerHTML = `<span class="org-emoji">${org.emoji}</span><span class="org-name">${org.name}</span>`;

    item.addEventListener("click", () => showOrgInfo(org));

    item.addEventListener("dragstart", e => {
      if (isUsed) { e.preventDefault(); return; }
      state.dragging = { orgId: org.id, fromSlot: null };
      item.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", org.id);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));

    item.addEventListener("touchstart", e => {
      if (isUsed) return;
      startTouch(e, org.id, null);
    }, { passive: true });

    list.appendChild(item);
  });
}

/* ============================
   CHAIN SLOTS (dinamis berdasarkan level.slotLabels)
   ============================ */
function renderChainSlots() {
  const container = document.getElementById("chain-container");
  container.innerHTML = "";
  const level = state.currentLevel;

  level.chain.forEach((_, i) => {
    if (i > 0) {
      const arrow = document.createElement("div");
      arrow.className = "chain-arrow";
      arrow.textContent = "→";
      container.appendChild(arrow);
    }

    const slotWrap = document.createElement("div");
    slotWrap.className = "chain-slot";

    const label = document.createElement("div");
    label.className = "slot-label";
    label.textContent = (level.slotLabels && level.slotLabels[i]) || `Slot ${i + 1}`;

    const box = document.createElement("div");
    box.className = "slot-box" + (state.slots[i] ? " filled" : "");
    box.dataset.slotIndex = i;

    const orgId = state.slots[i];
    if (orgId) {
      const org = level.organisms.find(o => o.id === orgId);
      box.innerHTML = `
        <span class="slot-emoji">${org.emoji}</span>
        <span class="slot-name">${org.name}</span>
        <button class="slot-remove" onclick="removeFromSlot(${i})" title="Hapus">✕</button>
      `;
      box.addEventListener("click", () => showOrgInfo(org));
    } else {
      box.innerHTML = `<span class="slot-placeholder">+ Letakkan</span>`;
    }

    box.addEventListener("dragover", e => { e.preventDefault(); box.classList.add("drag-over"); });
    box.addEventListener("dragleave", () => box.classList.remove("drag-over"));
    box.addEventListener("drop", e => {
      e.preventDefault();
      box.classList.remove("drag-over");
      const oId = e.dataTransfer.getData("text/plain") || (state.dragging && state.dragging.orgId);
      if (oId) dropOrgToSlot(oId, i, state.dragging && state.dragging.fromSlot);
    });

    box.addEventListener("touchend", e => {
      if (state.dragging) {
        const touch = e.changedTouches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        const slotEl = el && el.closest(".slot-box");
        if (slotEl) {
          const idx = parseInt(slotEl.dataset.slotIndex);
          dropOrgToSlot(state.dragging.orgId, idx, state.dragging.fromSlot);
        }
        endTouch();
      }
    });

    slotWrap.appendChild(label);
    slotWrap.appendChild(box);
    container.appendChild(slotWrap);
  });
}

function dropOrgToSlot(orgId, slotIndex, fromSlot) {
  const existingOrgId = state.slots[slotIndex];
  if (fromSlot !== null && fromSlot !== undefined) {
    state.slots[fromSlot] = existingOrgId;
  } else {
    const existingIdx = state.slots.indexOf(orgId);
    if (existingIdx !== -1) state.slots[existingIdx] = null;
  }
  state.slots[slotIndex] = orgId;
  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

function removeFromSlot(slotIndex) {
  state.slots[slotIndex] = null;
  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

function clearSlotFeedback() {
  document.querySelectorAll(".slot-box").forEach(b => b.classList.remove("correct", "wrong"));
}

/* ============================
   TOUCH DRAG
   ============================ */
let ghost = null;

function startTouch(e, orgId, fromSlot) {
  state.dragging = { orgId, fromSlot };
  ghost = document.getElementById("drag-ghost");
  if (!ghost) {
    ghost = document.createElement("div");
    ghost.id = "drag-ghost";
    document.body.appendChild(ghost);
  }
  const org = state.currentLevel.organisms.find(o => o.id === orgId);
  ghost.textContent = org.emoji;
  ghost.style.display = "block";
  moveTouchGhost(e.touches[0]);

  document.addEventListener("touchmove", onTouchMove, { passive: false });
  document.addEventListener("touchend", onTouchEnd);
}

function onTouchMove(e) { e.preventDefault(); moveTouchGhost(e.touches[0]); }

function moveTouchGhost(touch) {
  if (ghost) {
    ghost.style.left = touch.clientX + "px";
    ghost.style.top  = touch.clientY + "px";
  }
}

function onTouchEnd(e) {
  if (ghost) ghost.style.display = "none";
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const slotEl = el && el.closest(".slot-box");
  if (slotEl && state.dragging) {
    const idx = parseInt(slotEl.dataset.slotIndex);
    dropOrgToSlot(state.dragging.orgId, idx, state.dragging.fromSlot);
  }
  endTouch();
}

function endTouch() {
  document.removeEventListener("touchmove", onTouchMove);
  document.removeEventListener("touchend", onTouchEnd);
  state.dragging = null;
}

/* ============================
   INFO PANEL
   ============================ */
function showOrgInfo(org) {
  const panel = document.getElementById("info-content");
  panel.innerHTML = `
    <div class="org-info-card">
      <div class="org-info-emoji">${org.emoji}</div>
      <div class="org-info-name">${org.name}</div>
      <div class="org-info-role role-${org.role}">${ROLE_LABELS[org.role]}</div>
      <p class="org-info-desc">${org.desc}</p>
      <p class="org-info-eats"><strong>Memakan:</strong> ${org.eats}</p>
    </div>
  `;
}

/* ============================
   CEK JAWABAN
   ============================ */
function checkAnswer() {
  const level = state.currentLevel;

  if (state.slots.some(s => s === null)) {
    showModal("⚠️", "Belum Lengkap", "Isi semua slot rantai makanan terlebih dahulu!", [
      { label: "Lanjut", action: hideModal },
    ]);
    return;
  }

  let correct = 0;
  const boxes = document.querySelectorAll(".slot-box");

  state.slots.forEach((orgId, i) => {
    const isCorrect = orgId === level.chain[i];
    if (isCorrect) correct++;
    boxes[i].classList.remove("correct", "wrong");
    boxes[i].classList.add(isCorrect ? "correct" : "wrong");
  });

  const allCorrect = correct === level.chain.length;
  const stars = allCorrect ? 3 : correct >= Math.ceil(level.chain.length * 0.5) ? 2 : 1;
  const pointsEarned = allCorrect ? 300 + (level.chain.length - 4) * 100 : correct * 50;

  if (allCorrect) {
    state.score += pointsEarned;
    state.completed[level.id] = Math.max(state.completed[level.id] || 0, stars);
    saveState();
    document.getElementById("hud-score").textContent = state.score;
    setTimeout(() => showResult(true, stars, pointsEarned), 600);
  } else {
    showModal("❌", `${correct} dari ${level.chain.length} benar`,
      "Beberapa posisi masih salah. Merah = salah, hijau = benar. Coba lagi!", [
      { label: "Coba Lagi", action: hideModal },
      { label: "Reset", action: () => { hideModal(); resetSlots(); } },
    ]);
  }
}

function resetSlots() {
  state.slots = new Array(state.currentLevel.chain.length).fill(null);
  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

/* ============================
   RESULT SCREEN
   ============================ */
function showResult(win, stars, points) {
  const level = state.currentLevel;
  const nextLevel = LEVELS.find(l => l.id === level.id + 1);

  const reviewHtml = level.chain.map((orgId, i) => {
    const org = level.organisms.find(o => o.id === orgId);
    return `
      ${i > 0 ? '<span class="review-arrow">→</span>' : ""}
      <div class="review-item">
        <div class="review-emoji">${org.emoji}</div>
        <div class="review-name">${org.name}</div>
      </div>
    `;
  }).join("");

  document.getElementById("result-container").innerHTML = `
    <div class="result-icon">${win ? "🎉" : "😔"}</div>
    <h2 class="result-title" style="color: ${win ? "var(--cyan)" : "var(--text)"}">
      ${win ? "Sempurna!" : "Hampir!"}
    </h2>
    <p class="result-subtitle">
      ${win ? `Rantai makanan ${level.name} berhasil kamu susun dengan benar!` : "Coba lagi dan perhatikan urutan lebih baik."}
    </p>
    <div class="result-score-big">+${points} poin</div>
    <div class="result-stars">${renderStars(stars)}</div>

    <div class="result-chain-review">${reviewHtml}</div>

    <div class="result-fact">
      <div class="result-fact-label">💡 Tahukah kamu?</div>
      <p>${level.funFact}</p>
    </div>

    <div class="result-buttons">
      ${nextLevel ? `<button class="btn-primary" onclick="startLevel(${nextLevel.id})">Level Berikutnya →</button>` : '<button class="btn-primary" onclick="showLevelSelect()">🏆 Semua Level Selesai!</button>'}
      <button class="btn-secondary" onclick="startLevel(${level.id})">Ulangi</button>
      <button class="btn-secondary" onclick="showLevelSelect()">Pilih Level</button>
    </div>
  `;

  showScreen("screen-result");
}

/* ============================
   MODAL
   ============================ */
function showModal(icon, title, text, buttons) {
  const box = document.getElementById("modal-box");
  box.innerHTML = `
    <div class="modal-icon">${icon}</div>
    <div class="modal-title">${title}</div>
    <div class="modal-text">${text}</div>
    <div class="modal-buttons">
      ${buttons.map(b => `<button class="btn-${b.primary !== false ? "primary" : "secondary"} modal-btn">${b.label}</button>`).join("")}
    </div>
  `;

  const btns = box.querySelectorAll(".modal-btn");
  buttons.forEach((b, i) => btns[i].addEventListener("click", b.action));

  document.getElementById("feedback-modal").classList.remove("hidden");
}

function hideModal() {
  document.getElementById("feedback-modal").classList.add("hidden");
}

function confirmBack() {
  showModal("🚪", "Keluar Level?", "Progress level ini akan hilang. Yakin ingin kembali?", [
    { label: "Kembali", action: () => { hideModal(); showLevelSelect(); }, primary: false },
    { label: "Tetap Main", action: hideModal },
  ]);
}

function confirmResetProgress() {
  showModal("🗑️", "Reset Semua Progress?",
    "Semua bintang, poin, dan level yang terbuka akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.",
    [
      { label: "Ya, Reset", action: () => { hideModal(); resetAllProgress(); }, primary: false },
      { label: "Batal", action: hideModal },
    ]
  );
}

function resetAllProgress() {
  state.completed = {};
  state.score = 0;
  saveState();
  renderLevelGrid();
  document.getElementById("hud-score").textContent = 0;
}

/* ============================
   MODE EKSPLORASI
   ============================ */
const CELL_SIZE = 48; // px per sel pada canvas

function initExplore() {
  const ex = state.explore;
  ex.activeZone = null;

  // Render peta
  renderExploreMap();

  // Tutup popup jika ada
  document.getElementById("explore-popup").classList.add("hidden");

  // Keyboard
  document.addEventListener("keydown", onExploreKeyDown);
  document.addEventListener("keyup",   onExploreKeyUp);

  // Loop gerakan
  if (ex.moveTimer) clearInterval(ex.moveTimer);
  ex.moveTimer = setInterval(exploreMoveStep, 120);

  // Update posisi awal
  updateExploreChar();
}

function stopExplore() {
  const ex = state.explore;
  document.removeEventListener("keydown", onExploreKeyDown);
  document.removeEventListener("keyup",   onExploreKeyUp);
  if (ex.moveTimer) { clearInterval(ex.moveTimer); ex.moveTimer = null; }
  ex.keysDown.clear();
}

function onExploreKeyDown(e) {
  const keys = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D","Enter"," "];
  if (keys.includes(e.key)) {
    e.preventDefault();
    state.explore.keysDown.add(e.key.toLowerCase());
  }
  if (e.key === "Enter" || e.key === " ") {
    if (state.explore.activeZone) triggerZoneAction(state.explore.activeZone);
  }
}

function onExploreKeyUp(e) {
  state.explore.keysDown.delete(e.key.toLowerCase());
}

function exploreMoveStep() {
  const ex = state.explore;
  const keys = ex.keysDown;

  let dx = 0, dy = 0;
  if (keys.has("arrowup")    || keys.has("w")) dy = -1;
  if (keys.has("arrowdown")  || keys.has("s")) dy = 1;
  if (keys.has("arrowleft")  || keys.has("a")) dx = -1;
  if (keys.has("arrowright") || keys.has("d")) dx = 1;

  if (dx === 0 && dy === 0) return;

  const nx = ex.px + dx;
  const ny = ex.py + dy;

  const map = EXPLORE_MAP;
  if (nx < 0 || nx >= map.cols || ny < 0 || ny >= map.rows) return;
  if (MAP_WALLS.has(`${nx},${ny}`)) return;

  ex.px = nx;
  ex.py = ny;

  updateExploreChar();
  checkZoneProximity();
}

function updateExploreChar() {
  const ex = state.explore;
  const char = document.getElementById("explore-char");
  if (!char) return;

  char.style.left = (ex.px * CELL_SIZE + CELL_SIZE / 2) + "px";
  char.style.top  = (ex.py * CELL_SIZE + CELL_SIZE / 2) + "px";
}

function checkZoneProximity() {
  const ex = state.explore;
  let nearZone = null;

  for (const zone of EXPLORE_MAP.zones) {
    // Cek apakah karakter berada di dalam atau 1 sel di sekitar zona
    const inX = ex.px >= zone.x - 1 && ex.px < zone.x + zone.w + 1;
    const inY = ex.py >= zone.y - 1 && ex.py < zone.y + zone.h + 1;
    if (inX && inY) {
      nearZone = zone;
      break;
    }
  }

  if (nearZone !== ex.activeZone) {
    ex.activeZone = nearZone;
    updateExplorePopup(nearZone);
  }
}

function updateExplorePopup(zone) {
  const popup = document.getElementById("explore-popup");
  const hint  = document.getElementById("explore-hint");

  if (!zone) {
    popup.classList.add("hidden");
    hint.classList.add("hidden");
    return;
  }

  const isCompleted = state.completed[zone.levelId];
  const stars = isCompleted ? renderStars(state.completed[zone.levelId]) : "";

  popup.classList.remove("hidden");
  popup.innerHTML = `
    <div class="exp-popup-icon">${zone.icon}</div>
    <div class="exp-popup-name">${zone.name}</div>
    <div class="exp-popup-stars">${stars}</div>
    <div class="exp-popup-fact">${zone.fact}</div>
    <button class="btn-primary exp-popup-btn" onclick="triggerZoneAction(state.explore.activeZone)">
      ${zone.prompt}
    </button>
  `;

  hint.classList.remove("hidden");
}

function triggerZoneAction(zone) {
  if (!zone) return;
  const level = LEVELS.find(l => l.id === zone.levelId);
  if (!level) return;

  // Cek apakah level terkunci
  const levelIdx = LEVELS.findIndex(l => l.id === zone.levelId);
  const isLocked = levelIdx > 0 && !state.completed[LEVELS[levelIdx - 1].id];

  if (isLocked) {
    showModal("🔒", "Level Terkunci",
      `Selesaikan level sebelumnya terlebih dahulu untuk membuka ${level.name}!`,
      [{ label: "OK", action: hideModal }]
    );
    return;
  }

  startLevel(zone.levelId);
}

function renderExploreMap() {
  const canvas = document.getElementById("explore-canvas");
  if (!canvas) return;

  const map = EXPLORE_MAP;
  canvas.style.width  = (map.cols * CELL_SIZE) + "px";
  canvas.style.height = (map.rows * CELL_SIZE) + "px";

  // Render zona
  let zonesHtml = "";
  for (const zone of map.zones) {
    const isCompleted = state.completed[zone.levelId];
    zonesHtml += `
      <div class="exp-zone ${isCompleted ? "exp-zone-done" : ""}"
           style="
             left:${zone.x * CELL_SIZE}px;
             top:${zone.y * CELL_SIZE}px;
             width:${zone.w * CELL_SIZE}px;
             height:${zone.h * CELL_SIZE}px;
             background:${zone.color};
             border-color:${zone.borderColor};
           "
           onclick="onZoneClick('${zone.id}')">
        <span class="exp-zone-icon">${zone.icon}</span>
        <span class="exp-zone-name">${zone.name}</span>
        ${isCompleted ? `<span class="exp-zone-check">✓</span>` : ""}
      </div>
    `;
  }

  canvas.innerHTML = zonesHtml + `
    <div id="explore-char" class="exp-char">🧒</div>
  `;

  updateExploreChar();
}

function onZoneClick(zoneId) {
  const zone = EXPLORE_MAP.zones.find(z => z.id === zoneId);
  if (!zone) return;

  // Pindahkan karakter ke tengah zona
  state.explore.px = Math.floor(zone.x + zone.w / 2);
  state.explore.py = Math.floor(zone.y + zone.h / 2);
  updateExploreChar();
  state.explore.activeZone = zone;
  updateExplorePopup(zone);
}

/* ── Virtual Joystick (mobile) ── */
let joystickActive = false;
let joystickDir    = { dx: 0, dy: 0 };
let joystickTimer  = null;

function startJoystick(dir) {
  joystickActive = true;
  joystickDir = dir;
  if (joystickTimer) clearInterval(joystickTimer);
  joystickTimer = setInterval(() => {
    if (!joystickActive) return;
    const ex = state.explore;
    const nx = ex.px + joystickDir.dx;
    const ny = ex.py + joystickDir.dy;
    const map = EXPLORE_MAP;
    if (nx >= 0 && nx < map.cols && ny >= 0 && ny < map.rows && !MAP_WALLS.has(`${nx},${ny}`)) {
      ex.px = nx;
      ex.py = ny;
      updateExploreChar();
      checkZoneProximity();
    }
  }, 200);
}

function stopJoystick() {
  joystickActive = false;
  if (joystickTimer) { clearInterval(joystickTimer); joystickTimer = null; }
}

/* ============================
   INIT
   ============================ */
loadState();
showMenu();
