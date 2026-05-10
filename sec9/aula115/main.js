//basicamente o arquivo bundle converte meu arquivo main.js para um arquivo js que pode ser
//copativel com todos os navegadores.


const nome = 'Pedro';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

function fazAlgo(algo) {
    console.log(algo);
    for(let i = 0; i < 10; i++) {
        console.log('fazendo alguma coisa', i)
    }
}

fazAlgo('Cuida')