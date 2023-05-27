enum TYPE {
   CPF = "CPF",
   CNPJ = "CNPJ"
}

export abstract class Conta {
   protected numero: string;
   protected saldo: number;
   protected cliente: Cliente;
   protected tipo?: TYPE;
 
   constructor(numero: string, saldo: number, cliente: Cliente, tipo: TYPE) {
     this.numero = numero;
     this.saldo = saldo;
     this.cliente = cliente;
     this.tipo = tipo;
   }
 
   public abstract sacar(valor: number): void;
   public abstract depositar(valor: number): void;
 
   public getNumero(): string {
     return this.numero;
   }
 
   public getSaldo(): number {
     return this.saldo;
   }
 
   public getCliente(): Cliente {
     return this.cliente;
   }

   public getType(): TYPE | undefined {
      return this.tipo;
   }
 }
 
 class ContaPF extends Conta {
   sacar(valor: number): void {
     if (valor <= 0) {
       throw new Error("Valor de saque inválido.");
     }
 
     if (valor > this.saldo) {
       throw new Error("Saldo insuficiente.");
     }
 
     this.saldo -= valor;
   }
 
   depositar(valor: number): void {
     if (valor <= 0) {
       throw new Error("Valor de depósito inválido.");
     }
 
     this.saldo += valor;
   }
 }
 
 class ContaPJ extends Conta {
   sacar(valor: number): void {
     if (valor <= 0) {
       throw new Error("Valor de saque inválido.");
     }
 
     const limiteSaque = this.saldo * 0.8; // Limite de saque de 80% do saldo
 
     if (valor > limiteSaque) {
       throw new Error("Limite de saque excedido.");
     }
 
     this.saldo -= valor;
   }
 
   depositar(valor: number): void {
     if (valor <= 0) {
       throw new Error("Valor de depósito inválido.");
     }
 
     this.saldo += valor;
   }
 }
 
 class Cliente {
   private nome: string;
   private cpfCnpj: string;
   private contas: Conta[];

   constructor(nome: string, cpfCnpj: string) {
     this.nome = nome;
     this.cpfCnpj = cpfCnpj;
     this.contas = [];
   }
 
   public getNome(): string {
     return this.nome;
   }
 
   public getCpfCnpj(): string {
     return this.cpfCnpj;
   }
 
   public getContas(): Conta[] {
     return this.contas;
   }
 
   public adicionarConta(conta: Conta): void {
     this.contas.push(conta);
   }
 }
 
// Exemplo de uso das classes:

const cliente1 = new Cliente("João", "123.456.789-00");

const contaPF1 = new ContaPF("001", 1000, cliente1,TYPE.CPF);
const contaPJ1 = new ContaPJ("002", 5000, cliente1,TYPE.CNPJ);

cliente1.adicionarConta(contaPF1);
cliente1.adicionarConta(contaPJ1);

console.log("Clientes da agência:");
console.log("Nome: " + cliente1.getNome());
console.log("CPF/CNPJ: " + cliente1.getCpfCnpj());
console.log("Contas:");

const contasCliente1 = cliente1.getContas();
for (const conta of contasCliente1) {
  console.log("Tipo da conta: " + conta.getType());
  console.log("Número da conta: " + conta.getNumero());
  console.log("Saldo: R$ " + conta.getSaldo().toFixed(2));
  console.log("--------");
}