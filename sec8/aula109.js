//Métodos úteis para Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {

            if(typeof msg !== 'string'){
            reject('BAD VALUE');
            return;
            } 

            resolve(msg.toUpperCase() + ' -Passei na promise')
        }, tempo)  
 
    })
}


const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
]

//esse método resolve todas as promeses e entrega todas de uma unica vez
Promise.all(promises).then(valor => {
    console.log(valor)
}).catch(e => {
    console.log('error', e)
})

//esse método entrega a primeria promise que for finalizada.
Promise.race(promises).then(valor => {
    console.log(valor)
}).catch(e => {
    console.log('error', e)
})

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        //faz a mesma coisa que o parametro resolve, é  mesma coisa.
        return Promise.resolve('página em cache');
    }else {
        return esperaAi('Baixei a página', 3000)
    }
}

function baixaPagina2() {
    const emCache = true;

    if(emCache) {
        //faz a mesma coisa que o parametro reject, é  mesma coisa.
        return Promise.reject('página em cache');
    }else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('error', e))

baixaPagina2().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('error', e))