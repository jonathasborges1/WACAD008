enum Turno {
   MANHA = "manhã",
   TARDE = "tarde",
   NOITE = "noite"
 }
 
enum Area {
   HUMANAS = "humanas",
   BIOLOGICA = "biológicas",
   EXATAS = "exatas"
}

interface Curso {
   desc: string;
   area: Area;
}

function validarTamanhoMinimo(tamanhoMinimo: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSetter = descriptor.set;

    if (!originalSetter) {
      throw new Error(`O setter para a propriedade '${propertyKey}' não foi encontrado.`);
    }

    descriptor.set = function (value: string) {
      if (value.length < tamanhoMinimo) {
        throw new Error(`O valor atribuído a '${propertyKey}' deve ter no mínimo ${tamanhoMinimo} caracteres.`);
      }
      originalSetter.call(this, value);
    };
  };
}

 
 class Turma {
   private static nextId = 1;
 
   readonly id: number;
   private _descricao: string;
   private _turno: Turno;
   private _curso: Curso;
 
   constructor(descricao: string, turno: Turno, curso: Curso) {
     this.id = Turma.nextId++;
     this._descricao = descricao;
     this._turno = turno;
     this._curso = curso;
   }
 
   get descricao() {
     return this._descricao;
   }
 
   @validarTamanhoMinimo(10)
   set descricao(value: string) {
      this._descricao = value;
   }
 
   get turno() {
     return this._turno;
   }
 
   set turno(value: Turno) {
     this._turno = value;
   }
 
   get curso() {
     return this._curso;
   }
 
   set curso(value: Curso) {
     this._curso = value;
   }
 }
 
 class GerenciadorTurmas {
   private turmas: Turma[] = [];
 
   adicionarTurma(turma: Turma) {
     this.turmas.push(turma);
   }
 
   excluirTurma(_id: number) {
     const index = this.turmas.findIndex((turma: Turma) => turma.id === _id);
     if (index !== -1) {
       this.turmas.splice(index, 1);
     }
   }
 
   alterarTurma(id: number, novaDescricao: string) {
     const turma: Turma | undefined = this.buscarTurma(id);
     if (turma) {
       turma.descricao = novaDescricao;
     }
   }
 
   buscarTurma(id: number): Turma | undefined {
    const findTurma = this.turmas.find((turma: Turma) => turma.id === id);
    return findTurma
   }
 
   imprimirTurmas() {
     this.turmas.forEach(turma => {
       console.log(`ID: ${turma.id}`);
       console.log(`Descrição: ${turma.descricao}`);
       console.log(`Turno: ${turma.turno}`);
       console.log(`Curso: ${turma.curso.desc}`);
       console.log(`Área: ${turma.curso.area}`);
       console.log("----------------------");
     });
   }
 }
 
 // Exemplo de uso:
 const gerenciador = new GerenciadorTurmas();
 
 // Criando turmas
 const turma1 = new Turma("Turma 1", Turno.MANHA, { desc: "Curso A", area: Area.HUMANAS });
 const turma2 = new Turma("Turma 2", Turno.TARDE, { desc: "Curso B", area: Area.BIOLOGICA });
 
 // Adicionando turmas ao gerenciador
 gerenciador.adicionarTurma(turma1);
 gerenciador.adicionarTurma(turma2);

// Imprimindo as turmas antes da alteração
console.log("======Turmas antes da alteração:======");
gerenciador.imprimirTurmas();

// Alterando a descrição da turma 1
gerenciador.alterarTurma(1, "Nova descrição da turma 1");

// Imprimindo as turmas após a alteração
console.log("\nTurmas após a alteração:");
gerenciador.imprimirTurmas();

// Excluindo a turma 2
gerenciador.excluirTurma(2);

// Imprimindo as turmas após a exclusão
console.log("\n------Turmas após a exclusão:------");
gerenciador.imprimirTurmas();


