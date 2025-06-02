const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "data.sqlite"),
  (err) => {
    if (err) console.error("DB Error:", err.message);
    else console.log("Connected to SQLite database.");
  }
);

module.exports = db;
