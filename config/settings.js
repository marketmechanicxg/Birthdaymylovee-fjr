/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "1014";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Fajar";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "You're gonna live forever in me",             // ← GANTI JUDUL LAGU
    artist: "JOHN",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "jujur, satu senyuman dari kamu aja bikin seluruh hari aku jadi jauh lebih baik." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "kamu beneran alasan kenapa hati aku terasa sepenuh ini, serius." },
  { file: "img3.jpeg", caption: "setiap detik bareng kamu itu yang paling aku suka, titik." },
  { file: "img4.jpeg", caption: "ada orang yang nyari kebahagiaan seumur hidup, aku nemuinnya di kamu, beneran." },
  { file: "img5.jpeg", caption: "kamu ngubah hidup aku yang biasa aja jadi seindah ini, entah gimana caranya." },
  { file: "img6.jpeg", caption: "hati aku bener-bener ngerasa paling aman kalau lagi sama kamu." },
  { file: "img7.jpeg", caption: "kalau aku bisa mengulang momen apa pun, aku bakal milih kita setiap saat." },
  { file: "img8.jpeg", caption: "tetap orang favorit aku, selalu dan selamanya." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"♡ selamat ulang tahun, sayangku.",
"Selamat ulang tahun, sayang. Nggak kerasa ya, sekarang umur kamu udah bertambah lagi. Semoga di umur yang baru ini, banyak hal baik yang datang ke hidup kamu. Semoga semua yang selama ini kamu usahakan bisa perlahan-lahan tercapai, semoga kamu selalu diberi kesehatan, umur panjang, rezeki yang lancar, dan selalu dalam lindungan Allah di mana pun kamu berada. Aku tahu perjalanan kamu nggak selalu mudah. Ada banyak hal yang harus kamu hadapi, ada rasa capek yang mungkin nggak selalu kamu ceritakan, dan ada banyak hal yang harus kamu korbankan demi masa depan kamu. Makanya, di hari spesial kamu ini, aku cuma pengin kamu tahu kalau aku bangga sama kamu. Bangga karena kamu masih terus berusaha, masih mau berjuang, dan masih melangkah sejauh ini.",
"Jangan terlalu keras sama diri kamu sendiri, ya, sayang. Kalau capek, istirahat. Kalau lagi banyak pikiran, nggak apa-apa buat berhenti sebentar. Kamu nggak harus selalu kuat dan nggak harus selalu terlihat baik-baik aja. Aku harap kamu bisa menjalani hidup dengan lebih tenang, punya banyak alasan buat bahagia, dan suatu hari nanti bisa menikmati semua hasil dari kerja keras kamu selama ini.",
"Aku memang nggak bisa selalu ada di samping kamu, tapi aku harap kamu tahu kalau aku selalu ingin melihat kamu berhasil. Aku ingin melihat kamu sampai di titik yang selama ini kamu perjuangkan. Aku ingin mendengar kamu bercerita tentang hal-hal baik yang akhirnya kamu dapatkan setelah sekian lama berusaha. Dan kalau suatu hari nanti kamu berhasil meraih semua impianmu, aku harap kamu nggak lupa sama dirimu yang sekarang, yang sudah berjuang sejauh ini. Semoga nanti kamu bisa tersenyum dan merasa bangga karena kamu berhasil melewati banyak hal yang dulunya terasa berat. Aku juga berharap kita masih punya banyak waktu untuk membuat kenangan bersama. Masih bisa merayakan ulang tahun kamu di tahun-tahun berikutnya, masih bisa tertawa karena hal-hal kecil, masih bisa bercerita tentang keseharian kita, dan masih bisa saling menemani ketika hidup sedang nggak baik-baik aja.",
"Di hari ulang tahunmu ini, aku cuma ingin mendoakan banyak hal baik buat kamu. Semoga Allah selalu menjaga kamu, melindungi kamu ketika bekerja, melancarkan rezekimu, memudahkan setiap urusanmu, dan memberikan kesehatan supaya kamu bisa terus mengejar semua impianmu. Semoga kamu selalu dikelilingi orang-orang baik, dijauhkan dari hal-hal buruk, dan diberi hati yang kuat untuk menghadapi apa pun yang akan datang. Semoga kamu nggak pernah kehilangan semangat untuk menjalani hidup dan selalu punya alasan untuk tersenyum, bahkan ketika hari-harimu terasa berat. Aku juga berharap kamu bisa bahagia dengan dirimu sendiri, bukan cuma ketika segala sesuatu berjalan sesuai keinginanmu. Semoga kamu bisa menikmati hidup yang sedang kamu jalani sekarang, tanpa harus terus-menerus merasa bahwa kamu harus mengejar sesuatu sampai lupa beristirahat.",
"Terima kasih ya, sayang, karena sudah hadir dalam hidupku. Terima kasih karena aku mendapatkan kesempatan untuk mengenal kamu, menyayangi kamu, dan menjadi bagian dari cerita hidupmu. Aku nggak tahu bagaimana perjalanan kita ke depannya. Aku nggak tahu apa saja yang masih harus kita lewati dan seperti apa kehidupan kita nanti. Tapi aku bersyukur karena hari ini aku bisa merayakan hari lahir seseorang yang begitu berarti buatku.",
"Kalau Allah mengizinkan kita untuk terus bersama, aku berharap kita bisa tumbuh menjadi dua orang yang lebih baik, yang bisa saling mendukung tanpa saling membatasi, saling menyayangi tanpa melupakan diri sendiri, dan saling menjaga apa yang sudah kita bangun bersama. Aku harap suatu hari nanti kita bisa melihat kembali masa-masa ketika jarak terasa begitu jauh, lalu tersenyum karena kita pernah berusaha melewatinya. Aku harap ada banyak cerita baik yang bisa kita kenang, banyak impian yang berhasil kita capai, dan banyak alasan untuk bersyukur karena kita pernah memilih untuk saling mengenal lebih jauh.",
"Sekali lagi, selamat ulang tahun, cintaku. Terima kasih sudah bertahan sejauh ini. Terima kasih sudah terus berusaha menjadi dirimu yang sekarang. Aku harap kamu selalu ingat kalau kamu juga pantas bahagia, pantas mendapatkan hal-hal baik, dan pantas bangga sama dirimu sendiri. Aku bangga sama kamu, aku bersyukur kamu ada, dan aku bahagia karena bisa mengenalmu sedekat ini.",
"Aku nggak tahu akan seperti apa masa depan kita, tapi aku tahu kalau hari ini aku menyayangimu dengan tulus. Aku ingin melihat kamu bahagia, ingin melihat kamu berhasil, dan ingin melihat kamu mendapatkan kehidupan yang selama ini kamu impikan. Semoga di umur yang baru ini, banyak pintu baik yang terbuka buat kamu. Semoga langkahmu selalu dimudahkan, hatimu selalu dikuatkan, dan semoga kamu selalu punya alasan untuk bersyukur atas hidup yang kamu jalani.",
"Selamat ulang tahun, cintaku.",
"Kamu bakal hidup selamanya di dalam aku. ♡",
"Dengan seluruh cinta yang aku punya hari ini, dan semua doa yang diam-diam aku kirim buat kamu.",

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bab Satu",
    title: "awal dari semuanya",
    text:  "momen persis ketika semuanya terasa pas, dan tiba-tiba semuanya mulai masuk akal.",
  },
  {
    depth: "8m",
    year:  "Bab Dua",
    title: "hari-hari yang tenang",
    text:  "cuma ada kamu, aku, dan momen-momen kecil yang sederhana, yang ternyata justru berarti segalanya.",
  },
  {
    depth: "16m",
    year:  "Bab Tiga",
    title: "melewati badai",
    text:  "kita pernah melewati masa-masa sulit, ada badai dan kekacauan juga, tapi entah gimana kita selalu menemukan jalan pulang satu sama lain.",
  },
  {
    depth: "24m",
    year:  "Bab Empat",
    title: "menemukan cahaya",
    text:  "kamu bener-bener bagian paling terang dari seluruh perjalanan aku, yang selalu bikin semuanya terasa lebih ringan bahkan ketika keadaan lagi berat.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "semoga tahun ini ngasih kamu semua ketenangan samudra, dan sedalam itu juga hati kamu yang selalu penuh dengan kebaikan." },
  { icon: "shell",   text: "semoga hari-hari kamu tetap secerah ini, kayak matahari yang mantul di atas air, dan malam-malam kamu tetap tenang seperti ombak yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "semoga setiap harapan kecil kamu pelan-pelan jadi kenyataan, tepat di saat kamu paling membutuhkannya." },
  { icon: "compass", text: "ke mana pun tahun ini membawa kamu, semoga kamu selalu menemukan jalan pulang ke orang-orang yang tulus peduli dan menyayangi kamu." },
  { icon: "anchor",  text: "tetap membumi, tetap bersyukur, dan jujur aja, tetap jadi kamu yang sekarang — indah dengan caramu sendiri, selalu." },
  { icon: "heart",   text: "selamat ulang tahun, beneran — bersulang buat satu tahun lagi yang penuh kenangan yang pantas disimpan selamanya." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6287780401505";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy aku baru buka botolnya, makasih banyak udah bikin hari aku jadi jauh lebih baik! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);