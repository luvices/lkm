import fikriImg from '../assets/fikri.png';
import type { Material, Member, Mentor } from '../types';

export const members: Member[] = [
  {
    id: '1',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Ketua',
    nim: '257006111165',
    description: 'Bertanggung jawab atas koordinasi seluruh kegiatan kelompok kaderisasi.',
    photo: fikriImg,
  },
  {
    id: '2',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Wakil Ketua',
    nim: '257006111165',
    description: 'Mengelola administrasi dan dokumentasi setiap pertemuan.',
    photo: fikriImg,
  },
  {
    id: '3',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Mengatur keuangan dan kebutuhan logistik kelompok.',
    photo: fikriImg,
  },
  {
    id: '4',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Menyusun rundown dan teknis pelaksanaan materi.',
    photo: fikriImg,
  },
  {
    id: '5',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Menjalin komunikasi dengan pihak luar dan antar anggota.',
    photo: fikriImg,
  },
  {
    id: '6',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Berpartisipasi aktif dalam diskusi dan kegiatan lapangan.',
    photo: fikriImg,
  },
  {
    id: '7',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Membantu dalam penyusunan laporan materi kaderisasi.',
    photo: fikriImg,
  },
  {
    id: '8',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Fokus pada pengembangan soft skill anggota baru.',
    photo: fikriImg,
  },
  {
    id: '9',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Bertanggung jawab atas publikasi konten kaderisasi.',
    photo: fikriImg,
  },
  {
    id: '10',
    name: 'Muhammad Fikri Biban Putra',
    role: 'Anggota',
    nim: '257006111165',
    description: 'Pengembang platform digital kelompok dan fokus pada dokumentasi visual.',
    photo: fikriImg,
  },
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Retorika',
    description: 'Materi tentang bagaimana mengelola waktu dan prioritas sebagai seorang kader.',
    date: '2024-03-01',
  },
  {
    id: '2',
    title: 'Kepemimpinan Efektif',
    description: 'Teknik memimpin dalam kelompok kecil dan pengambilan keputusan.',
    date: '2024-03-15',
  },
  {
    id: '3',
    title: 'Komunikasi Interpersonal',
    description: 'Membangun relasi yang baik dan teknik public speaking.',
    date: '2024-04-01',
  },
  {
    id: '4',
    title: 'Etika Organisasi',
    description: 'Nilai-nilai dasar dan etika dalam berorganisasi.',
    date: '2024-04-20',
  },
  {
    id: '5',
    title: 'Batik Fractal Generator',
    description: 'Eksplorasi matematika, algoritma, dan seni dalam pembuatan motif batik fraktal.',
    date: '2024-05-01',
    content: `Dalam pengembangan web Batik Fractal Generator ini, konsep utama yang digunakan berasal dari cabang matematika yang menggabungkan bilangan kompleks, iterasi fungsi non-linear, dan teori fraktal. Sistem ini tidak sekadar menggambar pola, melainkan menghasilkan pola secara matematis melalui proses komputasi.

Fraktal sendiri dapat didefinisikan sebagai suatu objek matematika yang terbentuk dari proses pengulangan (iterasi) suatu aturan sederhana, namun menghasilkan bentuk yang sangat kompleks dan detail. Salah satu sifat utama fraktal adalah self-similarity, yaitu bagian kecil dari pola memiliki kemiripan dengan keseluruhan bentuknya. Dalam implementasi ini, jenis fraktal yang digunakan adalah Julia Set, yang merupakan hasil dari iterasi fungsi pada bilangan kompleks.

Untuk memahami bagaimana pola tersebut terbentuk, kita harus memahami terlebih dahulu konsep bilangan kompleks. Bilangan kompleks adalah bilangan yang memiliki dua komponen, yaitu bagian real dan bagian imajiner, yang secara umum dituliskan sebagai z=x+yi. Dalam konteks sistem ini, setiap titik pada layar (pixel) tidak diperlakukan hanya sebagai koordinat biasa, melainkan diubah menjadi bilangan kompleks. Artinya, layar komputer sebenarnya berfungsi sebagai representasi dari bidang kompleks, di mana sumbu horizontal merepresentasikan bagian real, dan sumbu vertikal merepresentasikan bagian imajiner.

Setelah setiap pixel dipetakan menjadi bilangan kompleks, nilai tersebut digunakan sebagai nilai awal z dalam proses iterasi. Variabel z ini sangat penting karena merepresentasikan titik yang sedang diuji perilakunya. Nilai z tidak tetap, melainkan berubah pada setiap iterasi berdasarkan suatu fungsi matematika. Fungsi yang digunakan dalam sistem ini adalah fungsi non-linear, yaitu:

zₙ₊₁ = zₙ² + c

Di mana c adalah suatu konstanta kompleks yang nilainya tetap selama proses berlangsung. Konstanta c inilah yang menjadi parameter utama yang menentukan bentuk dari pola fraktal yang dihasilkan. Nilai c sendiri terdiri dari dua bagian, yaitu real(c) dan imag(c). Bagian real dari c mengontrol komponen horizontal dari dinamika sistem, sedangkan bagian imajiner mengontrol komponen vertikal. Kombinasi keduanya menghasilkan variasi pola yang sangat beragam. Bahkan perubahan kecil pada nilai real(c) atau imag(c) dapat menyebabkan perubahan besar pada bentuk pola yang dihasilkan, karena sistem ini bersifat sangat sensitif terhadap parameter.

Proses iterasi dilakukan secara berulang untuk setiap titik. Pada setiap langkah, nilai z diperbarui menggunakan hasil sebelumnya. Selama proses ini berlangsung, sistem akan terus memantau apakah nilai z tetap stabil atau justru semakin besar dan menjauh dari titik asal. Untuk menentukan hal ini, digunakan konsep magnitudo atau panjang dari bilangan kompleks, yang dihitung menggunakan rumus |z| = √(x² + y²). Jika nilai magnitudo ini melebihi batas tertentu (biasanya 2), maka titik tersebut dianggap “divergen” atau keluar dari sistem.

Namun, karena secara teoritis iterasi bisa berlangsung tanpa batas, maka dalam implementasi digunakan batas yang disebut iterasi maksimum (maxIter). Parameter ini menentukan berapa kali proses iterasi dilakukan sebelum sistem berhenti. Jika suatu titik tidak melewati batas hingga iterasi maksimum tercapai, maka titik tersebut dianggap sebagai bagian dari struktur utama fraktal. Sebaliknya, jika titik tersebut lebih cepat keluar (melebihi batas), maka jumlah iterasi yang dibutuhkan untuk keluar akan dicatat.

Nilai jumlah iterasi inilah yang kemudian digunakan dalam proses pewarnaan (color mapping). Setiap titik diberi warna berdasarkan seberapa cepat atau lambat ia keluar dari sistem. Titik yang cepat keluar biasanya diberi warna terang, sedangkan titik yang bertahan lama atau tidak keluar sama sekali akan diberi warna gelap. Proses ini menghasilkan gradasi warna yang kompleks dan indah, yang secara visual menyerupai motif batik.

Untuk meningkatkan kualitas visual, sistem juga menerapkan teknik anti-aliasing, yaitu dengan mengambil beberapa sampel dalam satu pixel dan merata-ratakannya. Hal ini bertujuan untuk mengurangi efek pecah atau kasar pada gambar. Selain itu, dilakukan pula transformasi geometris seperti refleksi (mirror) dan rotasi, yang bertujuan untuk menambah simetri dan estetika pada pola sehingga lebih menyerupai motif batik tradisional.

Dari sisi komputasi, sistem ini dioptimalkan menggunakan teknik concurrency, di mana proses perhitungan untuk setiap baris gambar dijalankan secara paralel menggunakan goroutine. Hal ini memungkinkan proses rendering yang lebih cepat, terutama ketika menghasilkan gambar dengan resolusi tinggi atau iterasi yang besar.

Secara keseluruhan, sistem ini menunjukkan bagaimana konsep matematika yang abstrak seperti bilangan kompleks dan iterasi fungsi non-linear dapat diterapkan dalam dunia komputasi untuk menghasilkan karya visual yang estetis. Pola batik yang dihasilkan bukanlah hasil gambar manual, melainkan emergent behavior dari sistem matematis yang sederhana namun sangat kaya secara struktur.

Sebagai kesimpulan, dapat dikatakan bahwa parameter real(c) dan imag(c) berperan dalam menentukan bentuk dasar pola, sedangkan iterasi maksimum menentukan tingkat detail dari pola tersebut. Kombinasi antara matematika, algoritma, dan visualisasi inilah yang menjadikan generator ini tidak hanya sebagai alat teknis, tetapi juga sebagai bentuk eksplorasi seni berbasis sains.`,
  },
];

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Bapak Dr. Irfan Hakim',
    role: 'Pembimbing Utama',
    description: 'Dosen Senior yang telah berpengalaman mendampingi kaderisasi selama 10 tahun.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Ibu Ratna Dewi, M.Si',
    role: 'Pembimbing Akademik',
    description: 'Pakar psikologi organisasi yang fokus pada pengembangan karakter mahasiswa.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
];
