const express = require("express");
const app = express();
const port = 5000;

const db = require("./connection");
const response = require("./response");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/verifytoken");
const { a, ins } = require("framer-motion/client");

const upload = require("./middleware/uploadhandler");

const SECRET_KEY = "123456789";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  "http://localhost:3000",
  "https://profile-project-flax.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
  })
);

const createSlug = (title) => {
  return (
    "/blog/" +
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
  );
};

// endpoint data blog publish
app.get("/api/data-blog", (req, res) => {
  db.all(
    "SELECT * from blog_data WHERE status = 'publish'",
    (error, result) => {
      if (error) {
        return response(500, null, "Error fetching data from database", res);
      }
      response(200, result, "Data berhasil diambil", res);
    }
  );
});

// endpoint data blog all
app.get("/api/data-blog/all", (req, res) => {
  db.all("SELECT * from blog_data", (error, result) => {
    if (error) {
      return response(500, null, "Error fetching data from database", res);
    }
    response(200, result, "Data berhasil diambil", res);
  });
});

// endpoint data blog by id
app.post("/api/data-blog/getid", (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Id post tidak ada" });
  }

  const query = "SELECT * FROM blog_data WHERE id = ?";

  db.all(query, [id], (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error fetching data from database" });
    }

    res.status(200).json({ data: result, message: "Data berhasil diambil" });
  });
});

// endpoint requst login
app.post("/api/datauser/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.all(query, [username, password], (error, result) => {
    if (error) {
      console.error("Database Error:", error.message); // <== Tambahkan ini
      return res
        .status(500)
        .json({ message: "Error fetching data from database", error });
    }

    if (result.length > 0) {
      // Generate JWT
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      return res.status(200).json({
        message: "Login successful, redirecting...",
        token,
        user: { username: result[0].username },
      });
    } else {
      return res.status(401).json({ message: "Invalid username or password" });
    }
  });
});

// endpoint token verification
app.get("/api/dashboard", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Welcome to the dashboard",
    user: req.user,
  });
});

// endpoint request delete blog
app.delete("/api/data-blog/delete/:id", (req, res) => {
  const blogId = parseInt(req.params.id); // Ambil ID dari parameter URL

  // Query untuk menghapus data dari tabel blog_data
  const deleteQuery = "DELETE FROM blog_data WHERE id = ?";

  db.run(deleteQuery, [blogId], (error, result) => {
    if (error) {
      // Jika ada error dari database
      return response(500, null, "Error deleting data from database", res);
    }

    if (result.affectedRows > 0) {
      // Jika data berhasil dihapus
      response(200, null, "Blog deleted successfully", res);
    } else {
      // Jika data tidak ditemukan
      response(404, null, "Blog not found", res);
    }
  });
});

app.post("/api/data-blog/add", upload.single("thumbnail"), (req, res) => {
  const { title, content, excerpt, keyword, status, date } = req.body;

  const thumbnail = req.file ? `/assets/image/${req.file.filename}` : null;

  if (!title || !content || !excerpt || !keyword || !status || !date) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const insert = [
    `NULL`,
    title,
    `Galib Mudasir`,
    date,
    thumbnail,
    createSlug(title),
    content,
    excerpt,
    status,
    keyword,
  ];

  const query =
    "INSERT INTO `blog_data` (`id`, `title`, `author`, `date`, `image`, `link`, `content`, `excerpt`, `status`, `keyword`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
  db.run(query, insert, (erorr, result) => {
    if (erorr) {
      return response(500, null, "Error adding data to database", res);
    }

    return res.status(201).json({
      message: "Blog berhasil ditambahkan",
      insertedId: result.insertId,
      thumbnailPath: thumbnail,
    });
  });
});

//endpoint update artikel
app.post("/api/data-blog/edit", upload.single("thumbnail"), (req, res) => {
  const { title, content, excerpt, keyword, status, date, id } = req.body;
  if (!title || !content || !excerpt || !keyword || !status || !date || !id) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const params = [
    title,
    "Galib Mudasir",
    date,
    createSlug(title),
    content,
    excerpt,
    status,
    keyword,
  ];

  // Query dasar tanpa kolom image
  let query = `
      UPDATE blog_data
      SET  title   = ?, 
           author  = ?, 
           date    = ?, 
           link    = ?, 
           content = ?, 
           excerpt = ?, 
           status  = ?, 
           keyword = ?
    `;

  // Tambahkan kolom image kalau ada file upload
  if (req.file) {
    query += ", image = ?";
    params.push(`/assets/image/${req.file.filename}`);
  }

  // Tambahkan klausa WHERE dan id
  query += " WHERE id = ?";
  params.push(id);

  db.run(query, params, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Gagal mengedit data" });
    }
    return res.status(200).json({ message: "Blog berhasil diedit" });
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
