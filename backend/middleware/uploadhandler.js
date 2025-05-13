const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Buat folder penyimpanan jika belum ada
const uploadPath = path.join(__dirname, "../../public/assets/image");

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Simpan di folder public/assets/image
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, filename);
  },
});

// Filter hanya menerima file gambar
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("File harus berupa gambar!"), false);
  }
};

// Inisialisasi multer
const upload = multer({ storage, fileFilter });

// Ekspor middleware
module.exports = upload;
