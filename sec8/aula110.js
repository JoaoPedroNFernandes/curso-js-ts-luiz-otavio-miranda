function rand(min = 0, max = 3) {
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

            resolve(msg.toUpperCase() + ' -Passei na promise');
            return
        }, tempo)  
 
    })
}

//Function criada só para executar uma operação matemática para testes
function operacao(a, b, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(false) return 
            resolve(((a + b) / 6) ** 9);
            return;
        }, tempo)
    })
   
}


async function executa() {

    //Cada await literalmente espera ate a promise terminar, nada mais funciona (dentro da
    //função) ate que tenha sido terminado o await
    

    const frase1 = await esperaAi('Frase 1', 1000);
    console.log(frase1, 'Executada apos 1 segundos');
    const frase2 = await esperaAi('Frase 2', 5000);
    console.log(frase2, 'Executada apos 5 segundos');
    const frase3 = await esperaAi('Frase 3', 4000);
    console.log(frase3, 'Executada apos 4 segundos')

    //Esse console não sai imediato por que o código para ate que o await esteja resolvido
    //no caso, mesmo sendo imediado, o console.log tem que esperar que todos os awaits
    //tenham terminado para poder ser executado
    console.log('Esse vai primeiro mas espera todas estarem prontas')
    console.log(frase1 ,frase2, frase3);

    const somei = await operacao(5, 7, 10000)
    console.log(somei, 'Executa apos 10 segundos (mas só após as ultimas etapas estarem prontas)')
}

executa()
//Esse console.log() funciona antes da função mesmo tendo sido chamado depois pois, o restante
//do codigo funciona enquanto estão sendo esperadas as promessas, mas dentro da função que
//que tá esperando não.
console.log('Esse vai primeiro pois, está fora da função')