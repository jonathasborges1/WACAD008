"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var TYPE;
(function (TYPE) {
    TYPE["CPF"] = "CPF";
    TYPE["CNPJ"] = "CNPJ";
})(TYPE || (TYPE = {}));
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, cliente, tipo) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.tipo = tipo;
    }
    Conta.prototype.getNumero = function () {
        return this.numero;
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.getCliente = function () {
        return this.cliente;
    };
    Conta.prototype.getType = function () {
        return this.tipo;
    };
    return Conta;
}());
exports.Conta = Conta;
var ContaPF = /** @class */ (function (_super) {
    __extends(ContaPF, _super);
    function ContaPF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPF.prototype.sacar = function (valor) {
        if (valor <= 0) {
            throw new Error("Valor de saque inválido.");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
    };
    ContaPF.prototype.depositar = function (valor) {
        if (valor <= 0) {
            throw new Error("Valor de depósito inválido.");
        }
        this.saldo += valor;
    };
    return ContaPF;
}(Conta));
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPJ.prototype.sacar = function (valor) {
        if (valor <= 0) {
            throw new Error("Valor de saque inválido.");
        }
        var limiteSaque = this.saldo * 0.8; // Limite de saque de 80% do saldo
        if (valor > limiteSaque) {
            throw new Error("Limite de saque excedido.");
        }
        this.saldo -= valor;
    };
    ContaPJ.prototype.depositar = function (valor) {
        if (valor <= 0) {
            throw new Error("Valor de depósito inválido.");
        }
        this.saldo += valor;
    };
    return ContaPJ;
}(Conta));
var Cliente = /** @class */ (function () {
    function Cliente(nome, cpfCnpj) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.contas = [];
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getCpfCnpj = function () {
        return this.cpfCnpj;
    };
    Cliente.prototype.getContas = function () {
        return this.contas;
    };
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    return Cliente;
}());
// Exemplo de uso das classes:
var cliente1 = new Cliente("João", "123.456.789-00");
var contaPF1 = new ContaPF("001", 1000, cliente1, TYPE.CPF);
var contaPJ1 = new ContaPJ("002", 5000, cliente1, TYPE.CNPJ);
cliente1.adicionarConta(contaPF1);
cliente1.adicionarConta(contaPJ1);
console.log("Clientes da agência:");
console.log("Nome: " + cliente1.getNome());
console.log("CPF/CNPJ: " + cliente1.getCpfCnpj());
console.log("Contas:");
var contasCliente1 = cliente1.getContas();
for (var _i = 0, contasCliente1_1 = contasCliente1; _i < contasCliente1_1.length; _i++) {
    var conta = contasCliente1_1[_i];
    console.log("Tipo da conta: " + conta.getType());
    console.log("Número da conta: " + conta.getNumero());
    console.log("Saldo: R$ " + conta.getSaldo().toFixed(2));
    console.log("--------");
}
