//Client

//Importando o módulo http
const http = require('http');

//Criamos um objeto com os dados que queremos enviar ao servidor
const dadosParaEnviar = {
    nome: 'João',
    mensagem: 'Olá servidor, tudo bem?'
};

// Converte o objeto para Json
const corpoRequisicao = JSON.stringify(dadosParaEnviar);

//Objeto que configura como a requisição http será feita
const opcoes = {
    hostname: 'localhost', // Endereço do servidor (mesma máquina)
    port: 3000, // porta onde o servidor está escutando
    path: '/', // caminho da requisição
    method: 'POST', // Método POST: cliente envia dados
    headers: {
        'Content-Type': 'application/json', // Informa que o que enviaremos é JSON

        //O tamanho (em bytes) dos dados que enviaremos 
        'Content-Length': Buffer.byteLength(corpoRequisicao) 
    }
};

console.log('[CLIENTE] Processo cliente iniciado.');
console.log(`[CLIENTE] Enviando mensagem ao servidor: "${dadosParaEnviar.mensagem}"`);

//Faz a requisição para o server e avisa quando a resposta começar a chegar
const requisicao = http.request(opcoes, (res) => {

    let respostaRecebida = ''; // Variável que vai acumular os pedaços dos dados recebidos

    // Recebe os dados da resposta em partes
    res.on('data', (chunk) => {
        respostaRecebida += chunk;
    });

    // Quando toda a resposta chegou, exibe no terminal(console)
    res.on('end', () => {
        //Transforma os dados (Json) em objeto
        const dadosServidor = JSON.parse(respostaRecebida);

        console.log(`[CLIENTE] Resposta recebida do servidor: "${dadosServidor.resposta}"`);
        console.log('[CLIENTE] Comunicação encerrada com sucesso.');
    });
});

//Tratamento de erros caso haja erros como servidor fora do ar ou porta estiver errada
requisicao.on('error', (erro) => {
    console.error('[CLIENTE] Erro ao conectar com o servidor:', erro.message);
});

// Envia os dados Json para o servidor
requisicao.write(corpoRequisicao);
//Finaliza a requisição avisando ao server que não há mais dados a serem enviados
requisicao.end();