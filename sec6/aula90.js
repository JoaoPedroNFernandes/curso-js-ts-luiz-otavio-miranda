//defineProperty e defineProperties

function Produto(nome, preco, estoque) {
    //defineProperty serve para criar uma propriedade com características específicas
    // defineProperties serve para criar várias propriedades com características específicas

    //                   objeto, nome da propriedade, descrições
    Object.defineProperty(this, 'estoque', {
        //no caso, aqui eu digo que a chave pode ser mostrada, o valor da chave é o
        //valor recebido no parâmetro estoque, o valor da chave não pode ser alterado
        //e a chave não pode ser apagada ou ter suas características alteradas
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: false // pode apagar a chave ou mudar as características
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        }, 
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500
console.log(p1);