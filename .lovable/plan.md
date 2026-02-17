

# 💌 Website Undangan Pernikahan Digital — Fulan & Fulanah

## Tema & Desain
- **Warna**: Hijau botanical + aksen gold/emas
- **Hiasan**: Daun-daun, bunga, bingkai geometris emas di setiap section
- **Font**: Serif elegant untuk nama, sans-serif untuk isi
- **Layout**: Mobile-first, responsive di semua ukuran layar

## Background Music
- File: **Maher Zain - Masha Allah (Arabic)** — disimpan di `public/audio/`
- Tombol floating play/pause di pojok layar
- Auto-play saat amplop dibuka

---

## Fitur & Halaman

### 1. 💌 Cover Amplop
- Amplop tertutup dengan desain botanical hijau & gold
- Nama "Fulan & Fulanah" dengan font elegant
- Tombol **"Buka Undangan"** — animasi amplop terbuka, nasheed mulai play
- Tampilan selalu mobile-sized di layar manapun

### 2. 📜 Halaman Undangan (Scroll Sections)

#### Bismillah & Pembuka
- Ayat Al-Quran (Ar-Rum 21) dengan hiasan Islamic geometric

#### Profil Pengantin
- Nama lengkap & orang tua (placeholder)
- Hiasan floral botanical

#### Tanggal & Lokasi
- Detail akad & resepsi (placeholder)
- Tombol **"Save to Google Calendar"**
- Tombol **"Buka Maps"**

#### ⏳ Countdown Timer
- Hitung mundur real-time (hari, jam, menit, detik)
- Desain elegant dengan animasi

#### 💬 RSVP & Ucapan
- Pilih: **Saya Hadir / Masih Ragu / Tidak Hadir**
- Input nama & jumlah tamu
- Textarea pesan untuk pengantin
- Tombol kirim — data disimpan ke database Supabase

#### 📝 Daftar Ucapan Tamu
- Semua pesan ditampilkan (nama, status kehadiran, pesan)
- Bisa dibaca oleh semua pengunjung

---

## Backend (Lovable Cloud / Supabase)
- **Tabel `rsvp`**: nama, status kehadiran, jumlah tamu, pesan, timestamp
- Tampilkan ucapan real-time dari database
- RLS policies untuk keamanan

