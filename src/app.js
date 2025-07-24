const express = require('express');
require('dotenv').config({ path: __dirname + '/../.env' });
const db = require('./database'); // Conexión a DB
const routes = require('../src/routes/index');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', routes); 


// Iniciar servidor
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});