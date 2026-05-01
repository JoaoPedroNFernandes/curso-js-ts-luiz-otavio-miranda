//Reduce
//O intuito de reduce() é reduzir o array a um único valor
//seja ele um número, string, objeto ou até mesmo um array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0) //esse zero é um valor inicial para o acumulador.
console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 10},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]
const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(valor.idade > acumulador.idade) acumulador = valor;
    return acumulador;
}) //como não tem valor inicial, o acumulador começa com o primeiro valor do array
console.log(pessoaMaisVelha);