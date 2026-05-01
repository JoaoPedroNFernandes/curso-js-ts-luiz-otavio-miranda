//exercicio com for

//1- criar o elemento
//2- criar o texto que vai no elemento
//3 adicionar esse texto no elemento
//4 pegar uma referencia para adicionar o elemento 
//5 adicionar o elemento antes ou apos a referencia

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const div = document.createElement("div");
const referencia = document.querySelector("#h1")
referencia.after(div)

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    const tags = document.createElement(tag);
    /*pode ser usada essa forma aqui também:
    const textos = document.createTextNode(texto);
    tags.appendChild(textos)
    */
    tags.innerHTML += texto
    div.appendChild(tags);
}