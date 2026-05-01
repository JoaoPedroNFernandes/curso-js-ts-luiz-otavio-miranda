//atribuição via desestruturação

const pessoa = {
    nome: 'João',
    sobrenome: 'Fernandes',
    idade: 18,
    enndereco: {
        rua: 'Erasmo Porto',
        numero: 66
    }
};
//para que a variavel seja com o nome que eu queira, basta usar o objeto (name) com : e escrever o nome da variavel
//como no exemplo a seguir: const { nome: n } = pessoa
const { nome: n, sobrenome } = pessoa;
console.log(n, sobrenome)

const { enndereco: {rua, numero} } = pessoa;
console.log(rua, numero)