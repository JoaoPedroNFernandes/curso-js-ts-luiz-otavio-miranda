//array

const alunos = ['João', 'Victoria', 'Pedro'];
alunos.push('Luiza'); //push adiciona um novo elemento ao final do array.
alunos.unshift('Utherd'); //unshift adiciona um novo elemento no inicio do array
alunos.pop(); //remove o ultimo elemento do array
alunos.shift(); //remove o primeiro elemento do array
console.log(alunos);
delete alunos[2]; //deleta o elemento mas deixa o espaço em branco na memoria com o indice
console.log(alunos)
//posso fatiar o array do mesmo jeito usando a função slice()
