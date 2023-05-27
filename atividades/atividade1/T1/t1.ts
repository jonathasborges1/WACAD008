interface Livros {
   nome: string;
   preco: number;
   categoria: string;
}

const livros1: Livros[] = [
   {
      nome: "O Senhor dos Anéis",
      preco: 79.99,
      categoria: "Fantasia",
   },
   {
      nome: "Harry Potter",
      preco: 39.99,
      categoria: "Fantasia",
   },
   {
      nome: "As Crônicas de Nárnia",
      preco: 59.99,
      categoria: "Fantasia",
   }
]

livros1.map((livro,index) => {
   console.log("--------------------------");
   console.log("Index: ", index);
   console.log("Nome do Livro: ", livro.nome);
   console.log("Preco do Livro: ", livro.preco);
   console.log("Categoria do Livro: ", livro.categoria);
})
