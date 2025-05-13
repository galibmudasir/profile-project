const jwt = require("jsonwebtoken");
const SECRET_KEY = "123456789"; // Ganti dengan key yang aman

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Unauthorized or invalid token." });
    }

    req.user = decoded; // Simpan data user dari token
    next(); // Lanjutkan ke handler berikutnya
  });
};

module.exports = verifyToken;
