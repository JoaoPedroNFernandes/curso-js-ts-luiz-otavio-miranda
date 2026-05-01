//getComputedStyle() pega os elementos css, e você diz de quem quer pegar o estilo
//usase a variavel (no caso estiloBody) para acessar o estilo que quer usar
//entao guarde isso em outra variavel e depois é só usar
const paragrafos = document.querySelectorAll('p');
const container = document.querySelector('.container');
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
const colorWhite = getComputedStyle(container);
const colorW = colorWhite.backgroundColor;
console.log(colorW)

//quando usa querySelectorAll() ele dá tipo um array contendo as tags, por isso usa for of
//para pegar as tags que estao no "array"
for(let i of paragrafos) {
    i.style.backgroundColor = backgroundColorBody
    i.style.color = colorW
}
