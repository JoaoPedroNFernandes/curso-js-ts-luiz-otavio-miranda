//array

const nomes = ['Eduardo', 'Maria', 'João'];
console.log(nomes);
nomes.pop(); //remove o último elemento do array
nomes.push('Fernanda') //adiciona um elemento no final do array

const valorPop = nomes.pop(); //remove o último elemento do array e retorna ele (que
//vai ser guardada na variavel valorPop)
console.log(valorPop); //Fernanda

const valorPush = nomes.push('Fernanda'); //adiciona um elemento no final do array
//e retorna o tamanho do array
console.log(valorPush);
console.log(nomes)

const novoarray = [...nomes, 'joão', 'pedro', 'ana']
console.log(novoarray)
const novo = novoarray.slice(2, 3)
//slice fatia o meu array, sendo que eu vou dizer o pedaço doa array que quero.
// Ele me retorna um novo array com os elementos que eu escolhi manter.
//por exemplo, se for slice(2, 4), ele vai me retornar os elementos do indice 2 e 3,
// pois, foi o intervalo que eu escolhi manter.
//o slcie(1, -1), quando for negativo, então, ele começa do final.
console.log(novo)


const nome = 'João Pedro Nogueira';
const nomeArray = nome.split(' '); //separa o nome pelo parametro que é colocado na 
//função split e retona um array com as partes separadas. No caso, o parametro é um espaço
//então ele separa o nome em cada espaço e retorna um array com as partes do nome.
console.log(nomeArray); 
const nomeJuntado = nomeArray.join(' ') // junta o arary defenido pelos parametros da 
//função join, no caso, o parametro é um espaço, então ele junta o array onde tiver espaço
// e retorna uma string com o nome juntado.
console.log(nomeJuntado)
