// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 8080;


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'xserver-x-seed';

// ============================
//  Base de datos
// ============================

process.env.DB = process.env.DB || 'mongodb://localhost:27017/xserver';