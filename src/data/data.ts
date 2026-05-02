import type { Member, Material, Mentor } from '../types';

export const members: Member[] = [
  {
    id: '1',
    name: 'Ahmad Fauzi',
    role: 'Ketua Kelompok',
    nim: '2023001',
    description: 'Bertanggung jawab atas koordinasi seluruh kegiatan kelompok kaderisasi.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Siti Aminah',
    role: 'Sekretaris',
    nim: '2023002',
    description: 'Mengelola administrasi dan dokumentasi setiap pertemuan.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Bendahara',
    nim: '2023003',
    description: 'Mengatur keuangan dan kebutuhan logistik kelompok.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Lutfi Hakim',
    role: 'Divisi Acara',
    nim: '2023004',
    description: 'Menyusun rundown dan teknis pelaksanaan materi.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Diana Putri',
    role: 'Divisi Humas',
    nim: '2023005',
    description: 'Menjalin komunikasi dengan pihak luar dan antar anggota.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Rizky Ramadhan',
    role: 'Anggota Aktif',
    nim: '2023006',
    description: 'Berpartisipasi aktif dalam diskusi dan kegiatan lapangan.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Anisa Rahma',
    role: 'Anggota Aktif',
    nim: '2023007',
    description: 'Membantu dalam penyusunan laporan materi kaderisasi.',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
  },
  {
    id: '8',
    name: 'Faisal Akbar',
    role: 'Anggota Aktif',
    nim: '2023008',
    description: 'Fokus pada pengembangan soft skill anggota baru.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    id: '9',
    name: 'Maya Sari',
    role: 'Anggota Aktif',
    nim: '2023009',
    description: 'Bertanggung jawab atas publikasi konten kaderisasi.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
  },
  {
    id: '10',
    name: 'Hendrik Pratama',
    role: 'Anggota Aktif',
    nim: '2023010',
    description: 'Mengelola inventaris peralatan kelompok.',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
  },
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Manajemen Diri',
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
