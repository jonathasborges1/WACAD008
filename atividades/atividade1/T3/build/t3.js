var Biblioteca;
(function (Biblioteca) {
    Biblioteca["COMEDIA"] = "comedia";
    Biblioteca["ROMANCE"] = "romance";
})(Biblioteca || (Biblioteca = {}));
var livros = [
    {
        nome: "CLICK",
        preco: 79.99,
        categoria: Biblioteca.COMEDIA
    },
    {
        nome: "A CULPA é das ESTRELAS",
        preco: 39.99,
        categoria: Biblioteca.ROMANCE
    },
    {
        nome: "As Crônicas DE Nárnia",
        preco: 59.99,
        categoria: undefined
    }
];
var upperCaseCustom = function (livro) {
    var palavras = livro.nome.split(" ");
    livro.nome = palavras.length === 1 ? palavras[0].toUpperCase() : livro.nome.toLowerCase();
    return livro;
};
livros.forEach(function (livro, index) {
    var livroUpdated = upperCaseCustom(livro);
    console.log("--------------------------");
    console.log("Index: ", index);
    console.log("Nome do Livro: ", livroUpdated.nome);
    console.log("Preço do Livro: ", livroUpdated.preco);
    console.log("Categoria do Livro: ", livroUpdated.categoria);
});
