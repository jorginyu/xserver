// ============================
// PORT
// ============================
process.env.PORT = process.env.PORT || 8080;


// ============================
// Token 
// ============================
// 60 seconds
// 60 minutes
// 24 hours
// 30 days
process.env.CAD_TOKEN = '48h';


// ============================
// AUTH SEED
// ============================
process.env.SEED = process.env.SEED || 'xserver-x-seed';

// ============================
// DATABASE
// ============================

process.env.DB = process.env.DB || 'mongodb://localhost:27017/xserver';