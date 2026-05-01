//Concatenação de arrays

const a1 =  [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2); esse é uma forma de concatenar os arrays, usando
//o método concat() e basicamente você vai concatenando em ordem:
//a1.concat(a2, 'luiz', [1, 2, 3],)

//usando rest. ...rest -> ...spread -> operador de espalhamento
//usando os ... você acessa todos os elementos do array.
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]
console.log(a3)