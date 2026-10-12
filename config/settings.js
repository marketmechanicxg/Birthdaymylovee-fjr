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
  { file: "img1.jpeg", caption: "ngl one smile from you and my whole day just gets so much better." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "you're literally the reason my heart feels this full, no cap." },
  { file: "img3.jpeg", caption: "every single sec with you is hands down my fave." },
  { file: "img4.jpeg", caption: "some people search their whole life for happiness, i just found it in you, fr." },
  { file: "img5.jpeg", caption: "you turned my whole ordinary life into something this beautiful, idk how." },
  { file: "img6.jpeg", caption: "my heart genuinely feels safest whenever it's with you." },
  { file: "img7.jpeg", caption: "if i could relive literally any moment, i'd pick us every single time." },
  { file: "img8.jpeg", caption: "still my favorite person, like, always and forever." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"♡ happy birthday, sayangku.",
"Selamat ulang tahun, sayang. Nggak kerasa ya, sekarang umur kamu udah bertambah lagi. Semoga di umur yang baru ini, banyak hal baik yang datang ke hidup kamu. Semoga semua yang selama ini kamu usahakan bisa perlahan-lahan tercapai, semoga kamu selalu diberi kesehatan, umur panjang, rezeki yang lancar, dan selalu dalam lindungan Allah di mana pun kamu berada. Aku tahu perjalanan kamu nggak selalu mudah. Ada banyak hal yang harus kamu hadapi, ada rasa capek yang mungkin nggak selalu kamu ceritakan, dan ada banyak hal yang harus kamu korbankan demi masa depan kamu. Makanya, di hari spesial kamu ini, aku cuma pengin kamu tahu kalau aku bangga sama kamu. Bangga karena kamu masih terus berusaha, masih mau berjuang, dan masih melangkah sejauh ini.",
"Jangan terlalu keras sama diri kamu sendiri, ya, sayang. Kalau capek, istirahat. Kalau lagi banyak pikiran, nggak apa-apa buat berhenti sebentar. Kamu nggak harus selalu kuat dan nggak harus selalu terlihat baik-baik aja. Aku harap kamu bisa menjalani hidup dengan lebih tenang, punya banyak alasan buat bahagia, dan suatu hari nanti bisa menikmati semua hasil dari kerja keras kamu selama ini.",
"Aku memang nggak bisa selalu ada di samping kamu, tapi aku harap kamu tahu kalau aku selalu ingin melihat kamu berhasil. Aku ingin melihat kamu sampai di titik yang selama ini kamu perjuangkan. Aku ingin mendengar kamu bercerita tentang hal-hal baik yang akhirnya kamu dapatkan setelah sekian lama berusaha. Dan kalau suatu hari nanti kamu berhasil meraih semua impianmu, aku harap kamu nggak lupa sama dirimu yang sekarang, yang sudah berjuang sejauh ini. Semoga nanti kamu bisa tersenyum dan merasa bangga karena kamu berhasil melewati banyak hal yang dulunya terasa berat. Aku juga berharap kita masih punya banyak waktu untuk membuat kenangan bersama. Masih bisa merayakan ulang tahun kamu di tahun-tahun berikutnya, masih bisa tertawa karena hal-hal kecil, masih bisa bercerita tentang keseharian kita, dan masih bisa saling menemani ketika hidup sedang nggak baik-baik aja.",
"Di hari ulang tahunmu ini, aku cuma ingin mendoakan banyak hal baik buat kamu. Semoga Allah selalu menjaga kamu, melindungi kamu ketika bekerja, melancarkan rezekimu, memudahkan setiap urusanmu, dan memberikan kesehatan supaya kamu bisa terus mengejar semua impianmu. Semoga kamu selalu dikelilingi orang-orang baik, dijauhkan dari hal-hal buruk, dan diberi hati yang kuat untuk menghadapi apa pun yang akan datang. Semoga kamu nggak pernah kehilangan semangat untuk menjalani hidup dan selalu punya alasan untuk tersenyum, bahkan ketika hari-harimu terasa berat. Aku juga berharap kamu bisa bahagia dengan dirimu sendiri, bukan cuma ketika segala sesuatu berjalan sesuai keinginanmu. Semoga kamu bisa menikmati hidup yang sedang kamu jalani sekarang, tanpa harus terus-menerus merasa bahwa kamu harus mengejar sesuatu sampai lupa beristirahat.",
"Terima kasih ya, sayang, karena sudah hadir dalam hidupku. Terima kasih karena aku mendapatkan kesempatan untuk mengenal kamu, menyayangi kamu, dan menjadi bagian dari cerita hidupmu. Aku nggak tahu bagaimana perjalanan kita ke depannya. Aku nggak tahu apa saja yang masih harus kita lewati dan seperti apa kehidupan kita nanti. Tapi aku bersyukur karena hari ini aku bisa merayakan hari lahir seseorang yang begitu berarti buatku.",
"Kalau Allah mengizinkan kita untuk terus bersama, aku berharap kita bisa tumbuh menjadi dua orang yang lebih baik, yang bisa saling mendukung tanpa saling membatasi, saling menyayangi tanpa melupakan diri sendiri, dan saling menjaga apa yang sudah kita bangun bersama. Aku harap suatu hari nanti kita bisa melihat kembali masa-masa ketika jarak terasa begitu jauh, lalu tersenyum karena kita pernah berusaha melewatinya. Aku harap ada banyak cerita baik yang bisa kita kenang, banyak impian yang berhasil kita capai, dan banyak alasan untuk bersyukur karena kita pernah memilih untuk saling mengenal lebih jauh.",
"Sekali lagi, selamat ulang tahun, cintaku. Terima kasih sudah bertahan sejauh ini. Terima kasih sudah terus berusaha menjadi dirimu yang sekarang. Aku harap kamu selalu ingat kalau kamu juga pantas bahagia, pantas mendapatkan hal-hal baik, dan pantas bangga sama dirimu sendiri. Aku bangga sama kamu, aku bersyukur kamu ada, dan aku bahagia karena bisa mengenalmu sedekat ini.",
"Aku nggak tahu akan seperti apa masa depan kita, tapi aku tahu kalau hari ini aku menyayangimu dengan tulus. Aku ingin melihat kamu bahagia, ingin melihat kamu berhasil, dan ingin melihat kamu mendapatkan kehidupan yang selama ini kamu impikan. Semoga di umur yang baru ini, banyak pintu baik yang terbuka buat kamu. Semoga langkahmu selalu dimudahkan, hatimu selalu dikuatkan, dan semoga kamu selalu punya alasan untuk bersyukur atas hidup yang kamu jalani.",
"Happy birthday, my love.",
"You're gonna live forever in me. ♡",
"With all the love I have today, and all the prayers I quietly send for u.",

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
    year:  "Chapter One",
    title: "where it all started",
    text:  "that exact moment when everything just clicked, dan tiba-tiba semuanya mulai make so much sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "literally cuma kamu, aku, and those lil simple moments yang ternyata ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we've had our rough patches fr, ada badai dan chaos juga, but somehow kita selalu find our way back to each other.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "you're genuinely the brightest part of my whole journey, yang selalu bikin everything feels a little lighter even when things get heavy.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year give you all the calm of the ocean, dan sedalam itu juga hati kamu yang selalu penuh dengan kindness, fr." },
  { icon: "shell",   text: "hope your days stay this bright, kayak sun yang mantul di atas water, and your nights tetap peaceful seperti tide yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "may every lil wish kamu pelan-pelan come true, exactly when you need it the most, no cap." },
  { icon: "compass", text: "wherever this year takes you, i hope kamu selalu find your way back to the people who genuinely care and adore you." },
  { icon: "anchor",  text: "stay grounded, stay grateful, and tbh tetap jadi kamu yang sekarang — beautiful in your own way, always." },
  { icon: "heart",   text: "happy birthday istg — cheers buat another year penuh memories yang bakal selalu worth keeping." },
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
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

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