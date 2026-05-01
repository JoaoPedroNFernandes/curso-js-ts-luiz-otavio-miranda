//atribuição via desestruturação

//basicamente crio variaveis e atribuo a elas algum valor do array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//essas virgulas servem para "pular"
//primeiro corresponde ao numero 1 (que é indice 0)
const [primerio, , terceiro, quarto, , , , ...resto] = numeros;
console.log(primerio, terceiro, quarto)
console.log(resto)

