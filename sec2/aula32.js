//Object
//um objeto é extamente isso ae, como se fosse um array

/*
const pessoa1 = {
    nome: 'João',
    sobrenome: 'Fernandes',
    idade: 18,
}

console.log(pessoa1.idade);
*/

//Function criadora de objetos:

/*
const criarobjeto = function(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
};

console.log(criarobjeto('João Pedro', 'Fernandes', 18).idade);
*/

//alem disso, pode utilizar funções dentro de objetos (chamaa-se metodo)

const pessoa1 = {
    nome: 'João Pedro',
    sobrenome: 'Fernandes',
    idade: 18,

    falar() {
        console.log(`my name is ${this.nome} and my last name is ${this.sobrenome} and my age is ${this.idade}`)
    },
}

pessoa1.falar();