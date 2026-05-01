//Server

//Pegando o módulo http que já vem instalado por padrão no Node.js
const http = require('http'); // Módulo nativo do Node.js para criar servidores HTTP

/**
 * Aqui criamos o servidor. No qual, o "req" é tudo que o cliente enviou
 * e o res é o objeto que usamos para responder o cliente
 */
const server = http.createServer((req, res) => {

    // Apenas aceita as requisições do tipo POST (onde o cliente envia dados)
    if (req.method === 'POST') {

        console.log('\n[SERVIDOR] Nova conexão recebida do cliente.');

        let corpoRecebido = ''; // Variável que vai acumular os dados recebidos

        // Um evento que pega os pedaços dos dados do cliente e adiciona na váriavel
        req.on('data', (chunk) => {
            corpoRecebido += chunk;
        });

        // Quando todos os dados chegaram, processamos a mensagem
        req.on('end', () => {

            // Converte o JSON recebido do cliente para objeto JavaScript
            const dadosCliente = JSON.parse(corpoRecebido);

            console.log(`[SERVIDOR] Mensagem recebida do cliente: "${dadosCliente.mensagem}"`);

            // Monta a resposta (um objeto) que enviaremos para o cliente com base no que o cliente enviou
            const resposta = {
                status: 'ok',
                resposta: `Olá, ${dadosCliente.nome}! O servidor recebeu sua mensagem: "${dadosCliente.mensagem}"`
            };

            console.log(`[SERVIDOR] Enviando resposta ao cliente...`);

            //Define o cabeçalho da resposta. Informa ao cliente que enviaremos um JSON e status 200 (significa sucesso)
            res.writeHead(200, { 'Content-Type': 'application/json' });

            // Transforma o objeto agora em Json e envia ao cliente encerrando a conexão
            res.end(JSON.stringify(resposta));
        });

    } else {
        // Se o método não for POST, o servidor recusa com status 405 (status de método não permitido)
        res.writeHead(405);
        res.end('Método não permitido. Use POST.');
    }
});

//Coloca o server para escutar a porta 3000
server.listen(3000, () => {
    console.log('[SERVIDOR] Processo servidor iniciado. Aguardando conexões na porta 3000...');
});