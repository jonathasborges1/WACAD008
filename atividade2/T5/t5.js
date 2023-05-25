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
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.codigo = this.gerarCodigo();
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.gerarCodigo = function () {
        // Lógica para gerar o código do produto
        return "COD123"; // Exemplo
    };
    // Métodos de acesso (getters e setters)
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Produto;
}());
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, preco, faixaEtaria) {
        var _this = _super.call(this, nome, preco) || this;
        _this.validarFaixaEtaria(faixaEtaria);
        _this.faixaEtaria = faixaEtaria;
        return _this;
    }
    ProdutoInfantil.prototype.validarFaixaEtaria = function (faixaEtaria) {
        if (faixaEtaria > 12) {
            throw new Error("Faixa etária inválida. Produtos infantis devem ter faixa etária até 12 anos.");
        }
    };
    ProdutoInfantil.prototype.getFaixaEtaria = function () {
        return this.faixaEtaria;
    };
    ProdutoInfantil.prototype.setFaixaEtaria = function (faixaEtaria) {
        this.validarFaixaEtaria(faixaEtaria);
        this.faixaEtaria = faixaEtaria;
    };
    return ProdutoInfantil;
}(Produto));
// Exemplo de uso das classes:
var produto1 = new Produto("Camiseta", 29.99);
console.log(produto1.getCodigo()); // Saída: COD123
console.log(produto1.getNome()); // Saída: Camiseta
console.log(produto1.getPreco()); // Saída: 29.99
var produtoInfantil1 = new ProdutoInfantil("Brinquedo", 19.99, 8);
console.log(produtoInfantil1.getCodigo()); // Saída: COD123
console.log(produtoInfantil1.getNome()); // Saída: Brinquedo
console.log(produtoInfantil1.getPreco()); // Saída: 19.99
console.log(produtoInfantil1.getFaixaEtaria()); // Saída: 8
produtoInfantil1.setFaixaEtaria(10);
console.log(produtoInfantil1.getFaixaEtaria()); // Saída: 10
produtoInfantil1.setFaixaEtaria(15); // Erro: Faixa etária inválida. Produtos infantis devem ter faixa etária até 12 anos.
