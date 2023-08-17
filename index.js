// Função imediatamente invocada
(async () => {

    const database = require('./db');
    const Fabricante = require('./models/fabricante');
    const Produto = require('./models/produto');
    const Phantom = require('./models/phantom');
    const Categoria = require('./models/categoria');

    //  await database.sync({ force: true });

    await database.sync();

    // const novoFabricante = await Fabricante.create({
    //     nome: 'Apple'
    // })


    // const novoProduto = await Produto.create({
    //     nome: 'MacBook',
    //     preco: 25000,
    //     descricao: 'Notebook da Apple',
    //     idFabricante: novoFabricante.id
    // })
    // console.log(novoProduto);

    // const produtos = await Produto.findAll();
    // console.log("Produtos", produtos);


    // Lazy
    // const produto = await Produto.findByPk(1);


    // Eager 
    // const produto = await Produto.findByPk(1, { include: Fabricante });


    // Lazy 
    // const fabricante = await produto.getFabricante();

    // Lazy 
    // console.log("Nome do Fabricante", fabricante.nome);


    // Eager
    // console.log("Fabricante", produto.fabricante.nome);

    // Atualizando o produto com id um
    // if (produtoUm) {
    //     produtoUm.descricao = 'Alterei o produto um';
    //     // await obrigatório se quiser executar uma instrução logo abaixo
    //     await produtoUm.save();
    // }

    // Delete
    // if (produtoUm)
    //     await produtoUm.destroy();


    // const produtosComPreco25 = await Produto.findAll({
    //     where: {
    //         preco: 25
    //     }
    // })
    // console.log("Produtos que custam 25 reais =>", produtosComPreco25);


    // Excluindo a partir da consulta 
    /*
        await Produto.destroy( {
            where: {
                preco: 30
            }
        })
    */

    const novaCategoria = await Categoria.create({ nome: 'Informática' });
    const produto = await Produto.findByPk(1);
    await produto.setCategoria([novaCategoria]);

    // const fabricante = await Fabricante.findByPk(1);
    // const produtos = await fabricante.getProdutos();
    // console.log("Produtos", produtos);


    // Super many to many
    const produtoJaComCategorias = await Produto.findByPk(1, {
        include: Categoria
    });

    console.log("ProdutoJaComCategorias", produtoJaComCategorias.categoria);



    /**
     * Versão com eager load
     * 
     * const fabricante = await Fabricante.findByPk(1, {include: Produto});
     * console.log(fabricante.produtos);
     * 
     * 
     * 
     * 
     */




})();