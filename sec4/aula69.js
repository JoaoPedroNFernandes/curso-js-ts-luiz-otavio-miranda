//Parâmetros da função

// esses ... antes do parametro numeros significa rest (resto), você usa ele
//para pegar todos os valores finais e transformar em um array passado para
//o parametro numeros
function conta(operador, acumulador, ...numeros) {
    console.log(numeros);
    console.log( numeros[0], numeros[1], numeros[2]);

    console.log("---------- ----------- ---------- ---------");
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
        
    }

    console.log(acumulador);
}
conta('*', 1, 2, 3, 4, 5, 6, 7, 8, 9)