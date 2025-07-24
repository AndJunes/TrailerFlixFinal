const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../database');

const db = {};

// Importa todos los modelos automáticamente
fs.readdirSync(__dirname)
  .filter(file => (
    file !== 'index.js' &&
    file.endsWith('.js') &&
    !file.startsWith('JS ')  // Excluye archivos mal nombrados
  ))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Configura relaciones
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;