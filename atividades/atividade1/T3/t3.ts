enum Biblioteca3 {
   COMEDIA = "comedia",
   ROMANCE = "romance"
}

interface ILivro {
   nome: string;
   preco: number;
   categoria?: string;
}

const livros3: ILivro[] = [
   {
      nome: "CLICK",
      preco: 79.99,
      categoria: Biblioteca3.COMEDIA
   },
   {
      nome: "A CULPA é das ESTRELAS",
      preco: 39.99,
      categoria: Biblioteca3.ROMANCE
   },
   {
      nome: "As Crônicas DE Nárnia",
      preco: 59.99,
      categoria: undefined
   }
]

const upperCaseCustom3 = (livro: ILivro) => {
   const palavras = livro.nome.split(" ");
   livro.nome = palavras.length === 1 ? palavras[0].toUpperCase() : livro.nome.toLowerCase();
   return livro;
} 

livros3.forEach((livro, index) => {
   const livroUpdated = upperCaseCustom3(livro);

   console.log("--------------------------");
   console.log("Index: ", index);
   console.log("Nome do Livro: ", livroUpdated.nome);
   console.log("Preço do Livro: ", livroUpdated.preco);
   console.log("Categoria do Livro: ", livroUpdated.categoria);
});
