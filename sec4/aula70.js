//Retorno da função

function criaraMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}


//cada variavel guarda a função function(n) que é como se estiviesse assim:
// const duplica = function(n) {}. (isso vale para todas as variaveia)
//ou seja, elas só vaõ executar a função.
const duplica = criaraMultiplicador(2);
const triplica = criaraMultiplicador(3);
const quadriplica = criaraMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));