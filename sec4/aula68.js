//Declarar funções

// funções são elevadas naturalmente para o topo da pagina contanto que ela siga esse padrão abaixo:

falaOi()

//a função é executada da mesma forma já que ocorre o hoisting

function falaOi() {
    console.log('Oi');
}

//nesse caso, caso eu chame falaJoaoPedro() antes da função falaJoaoPedro(), a função não será executada já que 
// a função está sendo armazenada dentro de uma variavelo, assim, ela só existe quando declarada

const falaJoaoPedro = function () {
    console.log("João Pedro");
}

falaJoaoPedro();

//com a variavel falaJoaoPedro guardada, eu posso simplismente passsar ela como parametro para outra função e
//fazer com que outra função execute a função.

function executaFuncao(funcao) {
    console.log('executando função atraves de outra função...');
    funcao();
}

executaFuncao(falaJoaoPedro);

//Arrow Function
const funaoArrow = () => {
    console.log("Função arrow");
}
funaoArrow();