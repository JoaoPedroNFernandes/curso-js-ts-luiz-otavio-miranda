//forEach

//forEach é um método de array que executa uma função para cada elemento do array.
//Ele é usado para iterar sobre os elementos de um array e realizar uma ação para cada
//um deles. O forEach não retorna um novo array, ele apenas executa a função para cada 
//elemento do array original.
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let total = 0;
a1.forEach(valor => {
    total += valor;
})
console.log(total);