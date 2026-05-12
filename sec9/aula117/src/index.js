//import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1.js';
//esse "as" troca o nome da variavel

// console.log(nome2, sobrenome, idade);
// console.log(soma(5, 7))

// import * as MeuModulo from './modulo1.js'
// //isso importa tudo atraves de um objeto
// console.log(MeuModulo)

import qualquerNome from './modulo1.js'
//ele pega da função soma que possui o export default (só pode haver um por modulo)
console.log(qualquerNome(7, 7))

