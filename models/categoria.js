/**
 * n:m 
 * Um produto pode ter várias categorias e cada categoria pode pertencer a vários produtos
 */


const Sequelize = require('sequelize');
const database = require('../db');

const Categoria = database.define('categoria', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Categoria;