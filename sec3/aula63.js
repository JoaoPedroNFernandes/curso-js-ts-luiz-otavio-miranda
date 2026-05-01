//tratando e lançadno erros

try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe')
    //console.log(err)
}

function somar(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números')
    }
    return x + y
}
try {
    console.log(somar(1, 2))
    console.log(somar('1', 2))
} catch(error) {
    console.log(error)
}
