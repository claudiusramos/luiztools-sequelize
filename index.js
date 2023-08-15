// Função imediatamente invocada
(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    // const novoProduto = await Produto.create({
    //     nome: 'CPU Nova',
    //     preco: 25,
    //     descricao: 'Core i20'
    // })
    // console.log(novoProduto);

    // const produtos = await Produto.findAll();
    // console.log("Produtos", produtos);


    const produtoUm = await Produto.findByPk(1);
    // console.log("Produto UM ==> ", produtoUm);

    // Atualizando o produto com id um
    if (produtoUm) {
        produtoUm.descricao = 'Alterei o produto um';
        // await obrigatório se quiser executar uma instrução logo abaixo
        await produtoUm.save();
    }

    // Delete
    if (produtoUm)
        await produtoUm.destroy();


    const produtosComPreco25 = await Produto.findAll({
        where: {
            preco: 25
        }
    })
    console.log("Produtos que custam 25 reais =>", produtosComPreco25);


    // Excluindo a partir da consulta 
    /*
        await Produto.destroy( {
            where: {
                preco: 30
            }
        })
    */

})();