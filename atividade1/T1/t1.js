var livros = [
    {
        nome: "O Senhor dos Anéis",
        preco: 79.99,
        categoria: "Fantasia"
    },
    {
        nome: "Harry Potter",
        preco: 39.99,
        categoria: "Fantasia"
    },
    {
        nome: "As Crônicas de Nárnia",
        preco: 59.99,
        categoria: "Fantasia"
    }
];
livros.map(function (livro, index) {
    console.log("--------------------------");
    console.log("Index: ", index);
    console.log("Nome do Livro: ", livro.nome);
    console.log("Preco do Livro: ", livro.preco);
    console.log("Categoria do Livro: ", livro.categoria);
});
