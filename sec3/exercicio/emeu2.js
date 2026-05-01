console.log("Prepare-se!");

const umSegundo = setTimeout(() => {
    console.log("Treino iniciado!");
    let contador = 1;
    let contarSegundo = setInterval(() => {
        if(contador === 1 ) {
            console.log(`${contador} segundo`);
        } else {
            console.log(`${contador} segundos`);
        }
        if(contador === 10) {
            clearInterval(contarSegundo);
            console.log("Treino finalizado!")
            console.log(`Tempo total: ${contador} segundos`);
        }
        contador++
    }, 1000)
}, 3000)