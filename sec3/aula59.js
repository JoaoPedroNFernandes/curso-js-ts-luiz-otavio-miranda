//continue and break

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let num of numeros) {

    if(num === 2) {
        console.log('pulei o 2')
        //o continue faz com que volte para o laço de repetição pulando para a proxima etapa 
        //nesse caso, o indici
        continue;
    }
    if(num === 7) {
        //break é quebra, sair do laço
        break;
    }
    console.log(num)
                                
}