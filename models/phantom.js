// Modelo da Tabela

const Sequelize = require('sequelize');
const database = require('../db');

const Phantom = database.define('phantom', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})


module.exports = Phantom;