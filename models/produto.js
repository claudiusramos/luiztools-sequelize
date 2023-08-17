// Modelo da Tabela

const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante');
const Categoria = require('./categoria');
const CategoriaProduto = require('./categoriaProduto');

const Produto = database.define('produto', {
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

/**
 * Criado o relacionamento de 1 x 1 
 * Um produto PERTENCE a um fabricante
 */
Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
})


/**
 * 1 x N
 */
Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
})


/**
 * N:M
 */
Produto.belongsToMany(Categoria, {
    // Tabela meio
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idProduto',
    constraint: true
})
Categoria.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idCategoria',
    constraint: true
})

// NiceToHave Super ManyToMany relationship
Produto.hasMany(CategoriaProduto, { foreignKey: 'idProduto' });
CategoriaProduto.belongsTo(Produto, { foreignKey: 'idProduto' });
Categoria.hasMany(CategoriaProduto, { foreignKey: 'idCategoria' });
CategoriaProduto.belongsTo(Categoria, { foreignKey: 'idCategoria' });



module.exports = Produto;