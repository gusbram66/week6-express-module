const express = require('express');
const { tambah, kali } = require('./utils/math');
const profileRouter = require('./routes/profile');

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama - menampilkan NIM dan Nama
app.get('/', (req, res) => {
    res.send(`
        <h1>Selamat Datang!</h1>
        <p><strong>NIM:</strong> F1D022052</p>
        <p><strong>Nama:</strong> Ida Bagus Brahmanta Jayana</p>
        <hr>
        <p>Available routes:</p>
        <ul>
            <li><a href="/hitung">/hitung</a> - Hasil penjumlahan</li>
            <li><a href="/profile">/profile</a> - Daftar profile</li>
            <li><a href="/profile/F1D022052">/profile/F1D022052</a> - Detail profile</li>
        </ul>
    `);
});

// Route hitung - menampilkan hasil penjumlahan
app.get('/hitung', (req, res) => {
    const angka1 = 15;
    const angka2 = 25;
    const hasil = tambah(angka1, angka2);

    res.json({
        message: 'Hasil Penjumlahan',
        operasi: `${angka1} + ${angka2}`,
        hasil: hasil
    });
});

app.get('/kali', (req, res) => {
    const angka1 = 5;
    const angka2 = 4;
    const hasil = kali(angka1, angka2);

    res.json({
        message: 'Hasil Perkalian',
        operasi: `${angka1} * ${angka2}`,
        hasil: hasil
    });
});

// Menggunakan router profile
app.use('/profile', profileRouter);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`\nRoute yang tersedia:`);
    console.log(`- GET http://localhost:${PORT}/`);
    console.log(`- GET http://localhost:${PORT}/hitung`);
    console.log(`- GET http://localhost:${PORT}/profile`);
    console.log(`- GET http://localhost:${PORT}/profile/F1D022052`);
});
