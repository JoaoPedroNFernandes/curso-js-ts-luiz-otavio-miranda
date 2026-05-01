//operação ternária

const precoAtual = 9.50;
const precoTeto = 10.50;
const decisaoInvestimento = precoAtual <= precoTeto? 'Comprar cotas imediatamente!': 'Aguardar valorização ou queda do preço.';
console.log(`O preço atual é ${precoAtual.toFixed(2)}. Veredito: ${decisaoInvestimento}`);
