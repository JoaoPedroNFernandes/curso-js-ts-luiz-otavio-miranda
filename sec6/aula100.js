//factory Functions + Prototypes

//Melhor fazer assim para poder reutilizar essa funções em outras partes do códgio
//se não, seria dependente de criaPessoa()
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
        },
}    

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
        },
}       




function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {...falar, ...comer, ...beber};
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}        

const p1 = criaPessoa('João Pedro', 'Fernandes');
console.dir(p1);