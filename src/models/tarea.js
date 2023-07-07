const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Tarea = sequelize.define('Tarea', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  completada: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Tarea;
