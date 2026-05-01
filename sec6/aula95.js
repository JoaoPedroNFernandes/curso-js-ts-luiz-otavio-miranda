function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    //ta fazendo com que a função Produto seja executada mas, usando o this de Camiseta
    Produto.call(this, nome, preco);
}
//Isso cria um objeto que é identico a Produto.prototype e colcoa ele em Camisa.prototype
Camiseta.prototype = Object.create(Produto.prototype);
//quando executa o codigo de cima, o proto recebe como cosntrutor a função Produto mas, 
//queremos que seja camiseta, entaão fazemos a linha abaixo.
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.mudarMaterial = function(novoMaterial) {
    this.material = novoMaterial;
}

const camiseta = new Camiseta('regata', 10, 'Preta');
const caneca = new Caneca('Canecas Vikings', 20, 'Madeira', 5);
camiseta.aumento(100);
console.log(camiseta);
caneca.mudarMaterial('bambu');
caneca.estoque = 12;
console.log(caneca);