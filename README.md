# SiBisa — Sistem Inventaris Barang & Sarana Prasarana BMKG

<p align="center">
  <strong>Stasiun Meteorologi Kelas II Syamsudin Noor Banjarmasin</strong><br>
  Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CodeIgniter-4.x-EF4423?style=for-the-badge&logo=codeigniter&logoColor=white" alt="CodeIgniter 4">
  <img src="https://img.shields.io/badge/PHP-%3E%3D%208.1-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP 8.1+">
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/TailwindCSS-v2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Google%20Cloud-Storage-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud Storage">
  <img src="https://img.shields.io/badge/Telegram-Bot%20API-24A1DE?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Bot">
</p>

---

## 📋 Tentang SiBisa

**SiBisa** (*Sistem Inventaris Barang BMKG*) adalah aplikasi berbasis web yang dirancang khusus untuk mengelola operasional inventaris, pencatatan peminjaman barang, serta distribusi barang habis pakai (stok) di lingkungan **Stasiun Meteorologi Kelas II Syamsudin Noor Banjarmasin**.

Sistem ini memfasilitasi alur kerja inventaris dari hulu ke hilir: mulai dari registrasi aset, pembuatan label QR Code otomatis, notifikasi realtime berbasis Telegram Bot, hingga pencetakan laporan resmi berstandar dokumen dinas BMKG.

---

## ✨ Fitur Utama

### 1. 📊 Dashboard Real-time & Interaktif
- **Statistik Cepat**: Pemantauan jumlah total pengguna, total barang, ketersediaan barang, barang dalam status pinjam, dan barang pending.
- **Live Polling Data (Realtime)**: Pembaruan data otomatis setiap 10 detik tanpa perlu memuat ulang halaman (*page refresh*).
- **Audio Notification Alert**: Peringatan suara notifikasi instan ketika ada permintaan peminjaman atau pengembalian baru, dilengkapi kontrol tombol *Mute / Unmute* yang tersimpan di peramban pengguna.
- **Quick Action Approval**: Konfirmasi persetujuan (*Approve*) atau penolakan (*Reject*) permintaan peminjaman, pengambilan barang habis pakai, serta verifikasi pengembalian barang secara langsung lewat dashboard.

### 2. 📦 Manajemen Inventaris Barang
- **Kategori Dual-Mode**:
  - **Barang Peminjaman**: Aset/alat operasional yang dipinjam dan harus dikembalikan (laptop, monitor, proyektor, peralatan meteorologi, dsb.).
  - **Barang Habis Pakai (Stok)**: Barang pakai-habis seperti *Alat Tulis*, *Alat Kebersihan*, *Obat-obatan*, dan *Keperluan Kantor*.
- **Integrasi Cloud Storage**: Gambar produk diunggah langsung ke **Google Cloud Storage (GCS)** sehingga penyimpanan lebih terukur dan aman.
- **Generate & Cetak QR Code**: Otomatisasi generate kode QR identitas barang yang digabungkan dengan label teks (Nama Barang, ID, Kategori) menggunakan PHP GD Library, siap diunduh dan ditempelkan pada fisik aset.

### 3. 📑 Pelaporan & Ekspor Dokumen Resmi (PDF)
- **Kop Surat Standar BMKG**: Seluruh dokumen cetak menyertakan kop resmi Stasiun Meteorologi Kelas II Syamsudin Noor Banjarmasin beserta logo beresolusi tinggi.
- **Laporan Inventaris Barang**: Rekapitulasi seluruh aset berdasarkan kategori gudang dengan informasi status dan ketersediaan.
- **Laporan Riwayat Peminjaman**: Filter riwayat berdasarkan rentang tanggal, peminjam tertentu, dan kategori aset.

### 4. 🤖 Integrasi Telegram Bot (SiBisa Bot)
- **Sinkronisasi Pengguna**: Pegawai/user dapat mendaftarkan ID Telegram mereka ke sistem menggunakan perintah bot.
- **Notifikasi Multi-Arah**:
  - Notifikasi instan ke **Admin** saat ada pengajuan pinjam, pengambilan barang, atau konfirmasi pengembalian.
  - Notifikasi instan ke **User** ketika pengajuan mereka disetujui atau ditolak beserta alasan dan detail barang.
- **Dukungan Webhook**: Konfigurasi otomatis URL Webhook Telegram langsung dari sistem.

### 5. ⏰ Pengingat Otomatis (Cron Job)
- Skrip terjadwal dengan perlindungan *Secret Key* untuk memeriksa permintaan pending dan mengirimkan notifikasi *grace period* berkala ke admin.

---

## 🛠️ Arsitektur & Teknologi

| Komponen | Teknologi / Pustaka |
| :--- | :--- |
| **Backend Framework** | [CodeIgniter 4](https://codeigniter.com/) (PHP ^8.1) |
| **Database** | MySQL / MariaDB |
| **Cloud Storage** | [Google Cloud Storage Client](https://github.com/googleapis/google-cloud-php-storage) |
| **PDF Generator** | [Dompdf](https://github.com/dompdf/dompdf) |
| **Frontend Styling** | Tailwind CSS v2, Inter Font, FontAwesome 6 |
| **Komponen UI/UX** | DataTables, SweetAlert2, Flatpickr, Chart.js |
| **Messaging & Notifikasi** | Telegram Bot API & HTML5 Audio Web API |
| **Zona Waktu** | WITA (`Asia/Makassar`) |

---

## 📁 Struktur Direktori Proyek

```text
bmkg-inventory-admin/
├── app/
│   ├── Config/              # Konfigurasi sistem CI4, database, routes, filters
│   │   ├── Routes.php       # Routing endpoint admin, auth, AJAX, dan bot
│   │   └── ...
│   ├── Controllers/         # Kontroler logika bisnis
│   │   ├── Admin/
│   │   │   ├── BarangManagement.php   # Manajemen inventaris, QR, & upload GCS
│   │   │   ├── Dashboard.php          # Halaman beranda admin & statistik
│   │   │   ├── DashboardAjax.php      # Endpoint asynchronous (AJAX) & Telegram notify
│   │   │   ├── RiwayatPinjam.php      # Log riwayat & cetak PDF peminjaman
│   │   │   ├── UserManagement.php     # Manajemen data akun & role
│   │   │   └── Cron.php               # Skrip eksekusi terjadwal
│   │   ├── Auth.php                   # Autentikasi sesi & otorisasi login
│   │   └── TelegramBot.php            # Webhook receiver bot Telegram
│   ├── Filters/             # Filter autentikasi (AuthFilter, AdminFilter)
│   ├── Models/              # Abstraksi database (BarangModel, RiwayatPinjamModel, UserModel)
│   ├── Views/               # Template tampilan antarmuka
│   │   ├── admin/           # Tampilan dashboard, barang, user, riwayat, template PDF
│   │   ├── auth/            # Tampilan halaman login
│   │   └── layout/          # Layout master admin
│   └── [credential-gcs].json # Service Account Key Google Cloud Storage
├── public/
│   ├── assets/              # Berkas statis CSS kustom, JS, audio, gambar logo
│   └── index.php            # Titik masuk utama aplikasi (Web Server Root)
├── writable/                # Berkas log, cache, dan sesi
├── .env                     # Konfigurasi environment (koneksi DB, bot token)
├── composer.json            # Manajemen dependensi library PHP
└── spark                    # CLI CodeIgniter 4
```

---

## ⚙️ Persyaratan Sistem

Sebelum menjalankan aplikasi, pastikan sistem Anda telah terpasang:

- **PHP 8.1** atau versi lebih baru
- Ekstensi PHP wajib aktif:
  - `intl`
  - `mbstring`
  - `curl`
  - `json`
  - `gd` *(Wajib untuk pembuatan label gambar QR Code)*
  - `mysqli` / `mysqlnd`
- **Composer** (PHP Dependency Manager)
- **MySQL** v5.7+ atau **MariaDB** v10.3+
- Akun **Google Cloud Platform** (GCP) dengan Cloud Storage API aktif *(opsional jika menggunakan penyimpanan lokal)*
- **Bot Telegram** yang didaftarkan melalui [@BotFather](https://t.me/botfather)

---

## 🚀 Panduan Instalasi & Menjalankan Aplikasi

### 1. Kloning Repositori
```bash
git clone https://github.com/Virgiatha/sibisa-bmkg.git
cd sibisa-bmkg
```

### 2. Pasang Dependensi Composer
```bash
composer install
```

### 3. Konfigurasi Berkas Lingkungan (`.env`)
Salin berkas `env` menjadi `.env`:
```bash
cp env .env
```
Buka file `.env` dan sesuaikan parameter berikut:
```ini
# Status Environment
CI_ENVIRONMENT = development

# URL Basis Aplikasi
app.baseURL = 'http://localhost:8080/'

# Pengaturan Database
database.default.hostname = localhost
database.default.database = nama_database_bmkg
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
database.default.port     = 3306

# Token Bot Telegram (dari @BotFather)
TELEGRAM_BOT_TOKEN = 1234567890:ABCdefGHIjklMNOpqrSTUvwxyz
```

### 4. Konfigurasi Google Cloud Storage
1. Letakkan berkas kredensial Service Account JSON Google Cloud Anda di direktori `app/` (misal: `app/bmkg-credentials.json`).
2. Pastikan bucket GCS Anda (default: `bmkg-inventory-images`) memiliki izin akses yang sesuai.

### 5. Menjalankan Server Lokal
Gunakan server bawaan CodeIgniter:
```bash
php spark serve
```
Akses aplikasi melalui browser:
```text
http://localhost:8080/
```

---

## 🤖 Menghubungkan Bot Telegram

Aplikasi memanfaatkan webhook untuk menerima pesan masuk dari bot Telegram:

1. **Pastikan aplikasi dapat diakses secara publik (HTTPS)**  
   Jika berada di lokal, Anda dapat menggunakan layanan tunneling seperti Ngrok atau Cloudflare Tunnel:
   ```bash
   ngrok http 8080
   ```
   Perbarui `app.baseURL` di `.env` sesuai domain HTTPS publik Anda.

2. **Atur Webhook Telegram**  
   Buka URL berikut pada browser Anda:
   ```text
   https://domain-anda.com/telegrambot/set-webhook
   ```
   Jika berhasil, akan muncul respons JSON:
   ```json
   {
       "status": "success",
       "message": "Webhook berhasil diatur: Webhook was set"
   }
   ```

3. **Perintah Bot yang Tersedia**:
   - `/start` : Memulai interaksi dengan SiBisa Bot.
   - `/inputid` : Memulai proses pendaftaran username untuk menghubungkan akun SiBisa dengan ID Telegram.
   - `/status` : Memeriksa apakah akun Telegram saat ini sudah terhubung ke database.
   - `/help` : Panduan penggunaan bot.

---

## ⏱️ Menyiapkan Cron Job Notifikasi

Untuk memastikan notifikasi antrean permintaan barang pending tetap terkirim ke admin secara berkala:

Tambahkan perintah berikut ke penjadwal tugas (*crontab* di Linux atau cPanel Cron Jobs):
```bash
# Eksekusi setiap 5 atau 10 menit
*/10 * * * * curl -s https://domain-anda.com/cron/kirimNotifikasiPending/RahasiaCronSuperAman123 > /dev/null 2>&1
```
> **Catatan Keamanan**: Ganti kunci rahasia (*secret key*) pada `app/Controllers/Admin/Cron.php` dengan string acak yang aman untuk produksi.

---

## 👥 Hak Akses Pengguna

| Role | Akses Web Admin | Notifikasi Telegram | Keterangan |
| :--- | :---: | :---: | :--- |
| **Admin** | ✅ Penuh | ✅ Menerima pemberitahuan pengajuan baru | Mengelola seluruh master data, approval, dan laporan |
| **User / Pegawai** | ❌ Dibatasi | ✅ Menerima status pengajuan (disetujui/ditolak) | Melakukan peminjaman aset dan request stok |

---

## 📄 Lisensi

Proyek ini dikembangkan untuk kebutuhan internal **Stasiun Meteorologi Kelas II Syamsudin Noor Banjarmasin - BMKG** dan didistribusikan di bawah lisensi [MIT License](LICENSE).
