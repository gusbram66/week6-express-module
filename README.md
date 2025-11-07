# Assignment: Express.js & Modul Node.js

## Identitas

- **Nama** : Ida Bagus Brahmanta Jayana
- **NIM** : F1D022052

---

## Deskripsi Tugas

Tugas ini bertujuan untuk memahami dasar penggunaan Express.js dan modul lokal pada Node.js dengan membuat server sederhana dan memanfaatkan route modular.

### Fitur yang Diimplementasikan:

1. **Server Express.js** - Server web menggunakan Express.js yang berjalan di port 3000
2. **Route Modular** - Pemisahan route menggunakan Express Router untuk organisasi kode yang lebih baik
3. **Modul Lokal** - Penggunaan modul custom untuk fungsi matematika
4. **RESTful API** - Endpoint API yang mengembalikan data dalam format JSON

### Struktur Project:

```
expressModule_F1D022052/
├── index.js                    # File utama server Express
├── package.json                # Konfigurasi npm dan dependencies
├── .gitignore                  # Git ignore file
├── README.md                   # Dokumentasi project
├── POSTMAN_GUIDE.md           # Panduan testing dengan Postman
├── postman_collection.json    # Postman collection untuk testing
├── utils/
│   └── math.js                # Modul fungsi matematika
└── routes/
    └── profile.js             # Router untuk endpoint profile
```

### Penjelasan File:

#### 1. `index.js`

File utama yang menjalankan server Express.js dengan route:

- `/` - Menampilkan informasi NIM dan Nama
- `/hitung` - Menampilkan hasil penjumlahan menggunakan fungsi dari modul math.js

#### 2. `utils/math.js`

Modul yang berisi fungsi-fungsi matematika:

- `tambah(a, b)` - Fungsi penjumlahan dua angka
- `kali(a, b)` - Fungsi perkalian dua angka

#### 3. `routes/profile.js`

Router modular untuk mengelola endpoint profile:

- `GET /profile` - Menampilkan daftar semua profile mahasiswa
- `GET /profile/:nim` - Menampilkan detail profile berdasarkan NIM

---

## Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Server

```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

---

## Hasil

### 1. Route `/` - Halaman Utama

**Endpoint:** `GET http://localhost:3000/`

**Deskripsi:** Menampilkan informasi NIM dan Nama mahasiswa beserta daftar route yang tersedia.

**Response:**

<img width="1215" height="729" alt="image" src="https://github.com/user-attachments/assets/ab0c4131-ab64-45fb-a029-2f57276c268c" />


---

### 2. Route `/hitung` - Hasil Penjumlahan

**Endpoint:** `GET http://localhost:3000/hitung`

**Deskripsi:** Menampilkan hasil penjumlahan menggunakan fungsi `tambah()` dari modul `math.js`.

**Response:**

<img width="1227" height="736" alt="image" src="https://github.com/user-attachments/assets/302288ab-2167-4075-bd16-db1f67f485bd" />


**Penjelasan:** Route ini menggunakan fungsi `tambah()` dari modul `utils/math.js` untuk menjumlahkan dua angka (15 + 25) dan mengembalikan hasilnya dalam format JSON.

---

### 3. Route `/profile` - Daftar Profile

**Endpoint:** `GET http://localhost:3000/profile`

**Deskripsi:** Menampilkan daftar semua profile mahasiswa dalam format JSON array.

**Response:**

<img width="1233" height="750" alt="image" src="https://github.com/user-attachments/assets/c9c1d37a-2f06-4511-96fd-6e1d472ca77d" />


**Penjelasan:** Route ini mengembalikan array JSON yang berisi daftar profile mahasiswa dengan informasi lengkap seperti NIM, nama, jurusan, angkatan, dan email.

---

### 4. Route `/profile/:nim` - Detail Profile

**Endpoint:** `GET http://localhost:3000/profile/F1D022052`

**Deskripsi:** Menampilkan detail profile mahasiswa berdasarkan NIM yang diberikan.

**Response:**

<img width="1229" height="747" alt="image" src="https://github.com/user-attachments/assets/dcd749ed-36dd-4701-a852-73b2402721a7" />


**Penjelasan:** Route ini menggunakan parameter dinamis `:nim` untuk mencari dan menampilkan detail profile mahasiswa yang sesuai. Jika NIM tidak ditemukan, akan mengembalikan response 404 dengan pesan error.

**Contoh NIM tidak ditemukan:**

```json
{
  "success": false,
  "message": "Profile tidak ditemukan"
}
```

---

## Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript
- **Express.js** - Web framework untuk Node.js

---

## Catatan Tambahan

- Server menggunakan port 3000 secara default
- Semua response API menggunakan format JSON untuk konsistensi
- Route profile menggunakan Express Router untuk modularitas
- Modul math.js dapat diperluas dengan fungsi matematika lainnya sesuai kebutuhan

---

**Dibuat oleh:** Ida Bagus Brahmanta Jayana (F1D022052)
