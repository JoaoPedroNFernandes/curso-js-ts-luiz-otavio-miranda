//JS assicróno
//Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        //Se for diferente, vai rejeitar sendo, a mensagem dentro dos parênteses
        //do rejetc um parâmetro capturado no catch como "e"
        if(typeof msg !== 'string') reject('BAD VALUE');
        //finge que queremos uma ação e temos que esperar essa ação ser concluida
        setTimeout(() => {
            //momento no qual você avisa ao js que terminou de executar o codigo
            //seu parâmetro, msg, vai ser capturado pleo then.
            
            //o resolve age como um return, caso ele seja posto ele já faz como 
            //o return e sai da função
            resolve(msg)
        }, tempo)  
 
    })
}

esperaAi('Conexão com o BD', rand(1, 3)).then(resposta => {
    //o then, captura o que foi enviado pelo resolve e executa um determinado códgio.
    console.log(resposta)
    return esperaAi('aa', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('foi ', rand(1, 3));
}).then(resposta => {
    console.log(resposta)
}).catch(e => {
    //"e" assume a mensagem de reject que é "BAD VALUE"
    console.log('Error', e)
})