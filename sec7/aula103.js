//getters and Setters

//A symbol, é unica, o que está dentro dela não faz a menor diferença, é só para
//ajudar a identificar.
const _velocidade = Symbol('velocidade');

//Nesse caso, a symbol foi usada para criar chaves de objeto que não colidem
//com nada e não são acessíveis de fora
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 55; //isso tá criando uma propriedade chamada velocidade.
        //como não dá pra usar a notação de ponto com variáveis então foi usado
        //[_velocidade] para criar o "this.velocidade"
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor <= 0 || valor >= 100) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('BMW M4');
c1.velocidade = 909999 //Isso não funciona
console.log(c1.velocidade)