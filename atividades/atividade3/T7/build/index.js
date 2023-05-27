"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Turno;
(function (Turno) {
    Turno["MANHA"] = "manh\u00E3";
    Turno["TARDE"] = "tarde";
    Turno["NOITE"] = "noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["HUMANAS"] = "humanas";
    Area["BIOLOGICA"] = "biol\u00F3gicas";
    Area["EXATAS"] = "exatas";
})(Area || (Area = {}));
function validarTamanhoMinimo(tamanhoMinimo) {
    return function (target, propertyKey, descriptor) {
        const originalSetter = descriptor.set;
        if (!originalSetter) {
            throw new Error(`O setter para a propriedade '${propertyKey}' não foi encontrado.`);
        }
        descriptor.set = function (value) {
            if (value.length < tamanhoMinimo) {
                throw new Error(`O valor atribuído a '${propertyKey}' deve ter no mínimo ${tamanhoMinimo} caracteres.`);
            }
            originalSetter.call(this, value);
        };
    };
}
class Turma {
    constructor(descricao, turno, curso) {
        this.id = Turma.nextId++;
        this._descricao = descricao;
        this._turno = turno;
        this._curso = curso;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    get turno() {
        return this._turno;
    }
    set turno(value) {
        this._turno = value;
    }
    get curso() {
        return this._curso;
    }
    set curso(value) {
        this._curso = value;
    }
}
Turma.nextId = 1;
__decorate([
    validarTamanhoMinimo(10)
], Turma.prototype, "descricao", null);
class GerenciadorTurmas {
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
        this.turmas.push(turma);
    }
    excluirTurma(_id) {
        const index = this.turmas.findIndex((turma) => turma.id === _id);
        if (index !== -1) {
            this.turmas.splice(index, 1);
        }
    }
    alterarTurma(id, novaDescricao) {
        const turma = this.buscarTurma(id);
        if (turma) {
            turma.descricao = novaDescricao;
        }
    }
    buscarTurma(id) {
        const findTurma = this.turmas.find((turma) => turma.id === id);
        return findTurma;
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
