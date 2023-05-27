// Definição dos tipos
interface Livro {
   titulo: string;
   anoPublicacao: number;
 };
 
 interface Autor {
   nome: string;
   nacionalidade: string;
   obras: Livro[];
 };
 
 // União de tipos: Autor ou Livro
 type Biblioteca = Autor | Livro;
 
 // Bibliotecas
 const biblioteca1: Biblioteca = {
   nome: "Autor 1",
   nacionalidade: "País 1",
   obras: [
     { titulo: "Livro 1", anoPublicacao: 2000 },
     { titulo: "Livro 2", anoPublicacao: 2005 },
   ],
 };
 
 const biblioteca2: Biblioteca = {
   nome: "Autor 2",
   nacionalidade: "País 2",
   obras: [
     { titulo: "Livro 3", anoPublicacao: 2010 },
     { titulo: "Livro 4", anoPublicacao: 2015 },
   ],
 };
 
 // Função para imprimir os livros de cada biblioteca
 function imprimirLivros(biblioteca: Biblioteca) {
   if ("obras" in biblioteca) {
     console.log(`Autor: ${biblioteca.nome}`);
     console.log("Livros:");
     biblioteca.obras.map((livro) => {
       console.log(`- ${livro.titulo} (${livro.anoPublicacao})`);
     });
     console.log();
   } else {
     console.log("Tipo de biblioteca inválido!");
   }
 }
 
 // Impressão dos livros de cada biblioteca
 console.log("Biblioteca 1:");
 imprimirLivros(biblioteca1);
 
 console.log("Biblioteca 2:");
 imprimirLivros(biblioteca2);
 