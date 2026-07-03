const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ─────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Request Logging (simple) ──────────────────────────────
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} | ${req.method} ${req.path}`);
  next();
});

// ─── Root Routes ────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("CADMech Equipment Manager API is running.");
});

// ─── Health Check ──────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'CADMech Equipment Manager API is running',
    timestamp: new Date().toISOString(),
  });
});

// ─── API Routes ────────────────────────────

app.use("/api", apiRoutes);

// ─── 404 Handler ───────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} does not exist`,
  });
});

// ─── Global Error Handler ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' 
    ? err.message 
    : 'Something went wrong',
  });
});

// ─── Start Server ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════════╗
  ║  🏭 CADMech Equipment Manager API             ║
  ║  Server running on http://localhost:${PORT}       ║
  ║  Health: http://localhost:${PORT}/api/health      ║
  ╚════════════════════════════════════════════════╝
  `);
});

module.exports = app;
