//defineProperty e defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // pode apagar a chave ou mudar as características
        get: function() {
            //o getter está retornando um valor que é inacessivel de fora da funtion
            //ele poderia executar calculos e executar outros codigos para retornar algo
            //especifico para o usuario
        
            return estoquePrivado;
        },
        set: function(valor) {
            //setter é o guarda que quando alguem tenta fazer algum atribuição (=)
            //ele verifica se isso pode ocorrer de fato para entao ele permitir a 
            //atrinuição
            if(typeof valor !== 'number') return "Error"
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'adas';
console.log(p1.estoque);
p1.estoque = 100;
//quando eu faço p1.estoque eu estou acessando a propriedade estoque, posso achar que 
//não tem essa propriedade mas, ela está definida ali em object.defineProperty('estoque)
//então na verdade estou vendo o valor da variavel estoquePrivado.
console.log(p1.estoque);