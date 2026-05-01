//Manipulação de Prototype

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
//setando o método desconto no proto
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual /100));
};

Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * (percentual /100));
};

const p1 = new Produto('camisa', 10);
p1.aumento(25)
console.log(p1)

//criando o objeto literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
//colando o prototype da função construtora em p2
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(76);
console.log(p2);

//criando o objeto e já setando o prototype do Produto nele e já colocando as
//informações do objeto nele
const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:  'Alguma Coisa'
    },
    preco: {
        value: '91',
        writable: true,
        configurable: true,
        enumerable: true
    }
})
p3.desconto(15);
console.log(p3);
p3.aumento(552);
p3.preco = Number(p3.preco.toFixed(2));
console.log(p3);