//Seção de POO
//Classes

//As classes fazem a mesma coisas de funções construtoras porém, em minha visão,
//são melhores pelos motivos:
/**
 * Não precisa ficar usando virgula para separar
 * Os métodos já são postos no prototype automaticamente.
 */
class Pessoa {
    //A classe não recebe os parenteses logo, não recebe os parâmetros. Para colocar
    //parâmetros, é necessário colocar essa função abaixo
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('João Pedro', 'Fernandes');
const p2 = new Pessoa('Maria', 'Fernandes');
const p3 = new Pessoa('Joana', 'Fernandes');
const p4 = new Pessoa('Luiz', 'Fernandes');
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
