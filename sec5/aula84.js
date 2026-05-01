//Filter -> Sempre retorna um array.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//o método filter() cria um novo array com todos os elementos que passarem pela 
//condição estabelecida. 

//o filter() recebe três parametros, o valor de cada item do array, o indice e o
//array completo.

/*
numeros.filter(function(valor, indice, array){
    return valor > 10;
});
essa é a forma como funciona o filter.
*/

const numerosFiltrados = numeros.filter(valor => valor > 10);
//por está executando apenas uma linha de codigo na função eu posso deixar dessa forma
console.log(numerosFiltrados);


//exemplos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasFiltradasCom5Letras = pessoas.filter(valor => valor.nome.length >= 5);
const pessoasFiltradasIdade = pessoas.filter(valor => valor.idade > 50);
const pessoasFiltradasUltimaLetra = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a');
});

console.log(pessoasFiltradasCom5Letras);
console.log(pessoasFiltradasIdade);
console.log(pessoasFiltradasUltimaLetra);