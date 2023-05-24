;
;
// Bibliotecas
var biblioteca1 = {
    nome: "Autor 1",
    nacionalidade: "País 1",
    obras: [
        { titulo: "Livro 1", anoPublicacao: 2000 },
        { titulo: "Livro 2", anoPublicacao: 2005 },
    ],
};
var biblioteca2 = {
    nome: "Autor 2",
    nacionalidade: "País 2",
    obras: [
        { titulo: "Livro 3", anoPublicacao: 2010 },
        { titulo: "Livro 4", anoPublicacao: 2015 },
    ],
};
// Função para imprimir os livros de cada biblioteca
function imprimirLivros(biblioteca) {
    if ("obras" in biblioteca) {
        console.log("Autor: ".concat(biblioteca.nome));
        console.log("Livros:");
        biblioteca.obras.map(function (livro) {
            console.log("- ".concat(livro.titulo, " (").concat(livro.anoPublicacao, ")"));
        });
        console.log();
    }
    else {
        console.log("Tipo de biblioteca inválido!");
    }
}
// Impressão dos livros de cada biblioteca
console.log("Biblioteca 1:");
imprimirLivros(biblioteca1);
console.log("Biblioteca 2:");
imprimirLivros(biblioteca2);
