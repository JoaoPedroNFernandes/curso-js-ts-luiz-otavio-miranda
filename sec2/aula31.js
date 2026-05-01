//Functions
function saudacao(nome) {
    console.log(`Bom dia, ${nome}`);
    return 123456;
    //return encerra a função, se o programa encontrar return, mas nada aconteverá dentro da function
}
/* ao salvar a função dentro da variavel acontecem duas coisas
1-a função é executada por padrão (pois você chamou ela)
2-o valor da funçaõ é undefind ate que haja um return na função,
abaixo, se executar, vai aparecer o bom dia e vai aparecer 123456, execute e veja
 */
const func = saudacao('João Pedro');
console.log(func);

//posso criar uma função assim tambbém:

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(25));

// E tem a arroy function que se enquadra da mesma forma:
const raiz2 = (n) => {
    return n** 0.5;
}

console.log(raiz2(100));