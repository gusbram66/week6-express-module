const express = require('express');
const router = express.Router();

// Data profile mahasiswa
const profiles = [
    {
        nim: 'F1D022052',
        nama: 'Ida Bagus Brahmanta Jayana',
        jurusan: 'Informatika',
        angkatan: 2022,
        email: 'gusbram66@gmail.com'
    },
    {
        nim: 'F1D022001',
        nama: 'Alfin nashirul haq',
        jurusan: 'Informatika',
        angkatan: 2022,
        email: 'alpinnibouss@gmail.com'
    },
    {
        nim: 'F1D022034',
        nama: 'Dimas Afryzal',
        jurusan: 'Sistem Informasi',
        angkatan: 2021,
        email: 'dimasbukansiapa@gmail.com'
    }
];

// Route untuk menampilkan semua profile
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Daftar Profile Mahasiswa',
        data: profiles
    });
});

// Route untuk menampilkan detail profile berdasarkan NIM
router.get('/:nim', (req, res) => {
    const nim = req.params.nim;
    const profile = profiles.find(p => p.nim === nim);

    if (profile) {
        res.json({
            success: true,
            message: 'Detail Profile Mahasiswa',
            data: profile
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Profile tidak ditemukan'
        });
    }
});

module.exports = router;
