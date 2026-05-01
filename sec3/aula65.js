//set interval

function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}
let contador = 0
const time = setInterval( () => {
    console.log(mostrarHora())
    contador++
    if(contador > 1) {
        console.log(`${contador} vezes`)        
    } else {
        console.log('1 vez')
    }
    
}, 1000)

setTimeout(() => {
    clearInterval(time)
}, 50000)


