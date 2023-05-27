var Categoria;
(function (Categoria) {
    Categoria["FANTASIA"] = "Fantasia";
    Categoria["FICCAO"] = "Fic\u00E7\u00E3o";
    Categoria["TERROR"] = "Terror";
})(Categoria || (Categoria = {}));
var livros2 = [
    {
        nome: "O Senhor dos Anéis",
        preco: 79.99,
        categoria: Categoria.FANTASIA
    },
    {
        nome: "Harry Potter",
        preco: 39.99,
        categoria: Categoria.FICCAO
    },
    {
        nome: "As Crônicas de Nárnia",
        preco: 59.99,
        categoria: undefined
    }
];
livros2.map(function (livro, index) {
    console.log("--------------------------");
    console.log("Index: ", index);
    console.log("Nome do Livro: ", livro.nome);
    console.log("Preco do Livro: ", livro.preco);
    console.log("Categoria do Livro: ", livro.categoria);
});
