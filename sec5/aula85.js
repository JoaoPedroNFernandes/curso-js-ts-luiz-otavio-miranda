//Map -> retorna um novo array sempre com o mesmo tamanho do array original
//ademais, map() funciona do mesmo jeito que o filter() mas ao invés de retornar um valor
//booleano, ele retorna o valor transformado.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//exemplos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const nomeDaPessoa = pessoas.map(valor => valor.nome);
const apenasIdade = pessoas.map(valor => {
    return {idade: valor.idade}
});
const adicionarId = pessoas.map(valor => {
    const newobjt = {...valor} //criando um novo objeto e copiando igual ao pessoas
    //é importante pois, se não, eu estaria modificando o objeto original 
    //e isso nem sempre é o que queremos.


    //se você usar o objeto e adicionar um '.' ele criará uma nova propriedade
    //nesse caso o id e recebe um valor aleatório.
    newobjt.id = Math.floor(Math.random()*100);
    return newobjt;
})
console.log(nomeDaPessoa);
console.log(apenasIdade);   
console.log(adicionarId);
