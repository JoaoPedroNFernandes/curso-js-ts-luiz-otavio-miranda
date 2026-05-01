//mais sobre numeros
let num1 = 10.1344564323423423;
let num2 = 2;

console.log(num1.toFixed(2)) // quantas casas decimais vai aparecer para a pessoa
console.log(Number.isInteger(num1)); //me retorna um valor booleando me dizendo se o num1 é inteiro
let temporaria = num1 * 'ola';
console.log(Number.isNaN(temporaria)); // retorna booleando se a conta é entre dois numeros

/*há alguns problemas com contas no js, numeros muito pequenos acabam tendo um pouco de impresisao
nas contas, assim, use isso aqui em baixo para solucionar o problema
*/

let num11 = 0.7;
let num22 = 0.1;
let res = num11 + num22;
res = Number(res.toFixed(2));
console.log(res);