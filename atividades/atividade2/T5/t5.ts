class Produto {
   private codigo: string;
   private nome: string;
   private preco: number;
 
   constructor(nome: string, preco: number) {
     this.codigo = this.gerarCodigo();
     this.nome = nome;
     this.preco = preco;
   }
 
   protected gerarCodigo(): string {
     // Lógica para gerar o código do produto
     return "COD123"; // Exemplo
   }
 
   // Métodos de acesso (getters e setters)
   public getCodigo(): string {
     return this.codigo;
   }
 
   public getNome(): string {
     return this.nome;
   }
 
   public setNome(nome: string): void {
     this.nome = nome;
   }
 
   public getPreco(): number {
     return this.preco;
   }
 
   public setPreco(preco: number): void {
     this.preco = preco;
   }
 }
 
 class ProdutoInfantil extends Produto {
   private faixaEtaria: number;
 
   constructor(nome: string, preco: number, faixaEtaria: number) {
     super(nome, preco);
     this.validarFaixaEtaria(faixaEtaria);
     this.faixaEtaria = faixaEtaria;
   }
 
   private validarFaixaEtaria(faixaEtaria: number): void {
     if (faixaEtaria > 12) {
       throw new Error("Faixa etária inválida. Produtos infantis devem ter faixa etária até 12 anos.");
     }
   }
 
   public getFaixaEtaria(): number {
     return this.faixaEtaria;
   }
 
   public setFaixaEtaria(faixaEtaria: number): void {
     this.validarFaixaEtaria(faixaEtaria);
     this.faixaEtaria = faixaEtaria;
   }
 }
 
 // Exemplo de uso das classes:
 
 const produto1 = new Produto("Camiseta", 29.99);
 console.log(produto1.getCodigo()); // Saída: COD123
 console.log(produto1.getNome()); // Saída: Camiseta
 console.log(produto1.getPreco()); // Saída: 29.99
 
 const produtoInfantil1 = new ProdutoInfantil("Brinquedo", 19.99, 8);
 console.log(produtoInfantil1.getCodigo()); // Saída: COD123
 console.log(produtoInfantil1.getNome()); // Saída: Brinquedo
 console.log(produtoInfantil1.getPreco()); // Saída: 19.99
 console.log(produtoInfantil1.getFaixaEtaria()); // Saída: 8
 
 produtoInfantil1.setFaixaEtaria(10);
 console.log(produtoInfantil1.getFaixaEtaria()); // Saída: 10
 
 produtoInfantil1.setFaixaEtaria(15); // Erro: Faixa etária inválida. Produtos infantis devem ter faixa etária até 12 anos.
 