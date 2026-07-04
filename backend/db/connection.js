const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.DB_HOST || "127.0.0.1",
  user: process.env.MYSQLUSER || process.env.DB_USER || "root",
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || "",
  database: process.env.MYSQLDATABASE || process.env.DB_NAME || "cadmech_equipment",
  port: Number(process.env.MYSQLPORT || process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  ssl:
    process.env.DB_SSL === "true"
      ? { rejectUnauthorized: false }
      : undefined,
});

  // Test database connection
  (async () => {
    try {
      const connection = await pool.getConnection();
      console.log("Database connected successfully.");
      connection.release();
    } catch (error) {
      console.error("Database connection failed:");
      console.error(error.message);
    }
  })();

module.exports = pool;