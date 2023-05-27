enum Categoria2 {
   FANTASIA = "Fantasia",
   FICCAO = "Ficção",
   TERROR = "Terror",
}

interface ILivro {
   nome: string;
   preco: number;
   categoria?: string;
}

const livros22: ILivro[] = [
   {
      nome: "O Senhor dos Anéis",
      preco: 79.99,
      categoria: Categoria2.FANTASIA
   },
   {
      nome: "Harry Potter",
      preco: 39.99,
      categoria: Categoria2.FICCAO
   },
   {
      nome: "As Crônicas de Nárnia",
      preco: 59.99,
      categoria: undefined
   }
]

livros22.map((livro,index) => {
   console.log("--------------------------");
   console.log("Index: ", index);
   console.log("Nome do Livro: ", livro.nome);
   console.log("Preco do Livro: ", livro.preco);
   console.log("Categoria do Livro: ", livro.categoria);
})
