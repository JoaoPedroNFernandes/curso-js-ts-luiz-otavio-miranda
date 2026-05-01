//Funções geradoras
function* geradora1() {

    /*
    o yield é como se fosse um return, ou seja, ele retorna um valor e pausa a execução
    da função, quando o next() for chamado novamente, ele vai mandar o segundo yield
    e assim por diante, até que não tenha mais yield, ai ele retorna undefined 
    
    */
   yield 'Valor 1';
   yield 'Valor 2';
   yield 'Valor 3';
}

// a variavel g1 é um objeto generador, ou seja, ele tem a função next(), que é a função
//que vai retornar o valor de yield e pausar a função ate que o proximo next() seja
//chamado

const g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2(); 
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3() {
    yield 'Valor 0';
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora4() {
    //esse yield* é usado para delegar a execução para outra função geradora, 
    //é como se eu ussasse yield geradora3().next().value ate terminar a função geradora3
    //para isso, usa,os logo esse yield* que já nos dá todos os valores da função 
    //geradora3, sem precisar usar o next() para cada valor
    yield* geradora3();
    yield 'Valor 4';
    yield 'Valor 5';
    yield 'Valor 6';
}

const g4 = geradora4();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);


function* geradora5() {

    //o yield pode ser usado para retornar funções também.
    yield function() { 
        console.log('Vim do yield 1');
    };

    //...

    yield function() {
        console.log('Vim do yield 2');
    }
}


//é assim que executamos as funções que estão sendo retornadas pelo yield dentro da
//função geradora 
const g5 = geradora5()
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();


