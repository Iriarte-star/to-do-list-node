const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_tareas', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
