//prototypes

/**
 * Em JavaScript, todo objeto possui um prototype — um outro objeto do qual ele herda 
 * propriedades e métodos. Quando você tenta acessar uma propriedade em um objeto
 *  e ela não existe nele diretamente, o JS sobe na cadeia de protótipos 
 * (prototype chain) procurando essa propriedade nos objetos acima.
 * prototype é o mecanismo de herança do JavaScript, permitindo que
 * objetos compartilhem comportamentos de forma eficiente.
 */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('João', 'Pedro')
const pessoa2 = new Pessoa('Maria', 'Nogueira')
console.dir(pessoa1)
console.dir(pessoa2)