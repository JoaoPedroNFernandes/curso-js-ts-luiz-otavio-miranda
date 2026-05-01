//Callback

//criar o numero aleatorio simulando o tempo de espera da web
function rando(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

//cada uma dessas 3 funtions faz a mesma coisa.
//quando chamado a função, o parametro dela é outra função - quem nem quando dava o return
//de uma função. Assim, quando eu chamo f1(f1callback) eu estou passando a função
//f1callback mas não estou executando, assim, entra na função f1; espera o tempo determinado;
//executa o console.log() e depois executa a função f1callback que foi passada como parametro
//Quando feito isso, o ciclo se repete com as demais funções até chegar em console.log('ola mundo);
function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback();
    }, rando())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback();
    }, rando())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();
    }, rando())
}

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Olá mundo');
}