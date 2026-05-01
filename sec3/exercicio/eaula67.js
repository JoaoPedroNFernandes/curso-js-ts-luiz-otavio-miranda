const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listaUl = document.querySelector('.tarefas');

document.addEventListener('click', (e) => {
    const evento = e.target;
    if(evento.classList.contains('btn-tarefa')) {
        addTask();
        salvarDados();
    } 
    if(evento.classList.contains('botaoRemove')) {
        apagarTask(evento);
    }
})

addEventListener('DOMContentLoaded', () => {
    //'['item 1','item 2', 'item 3]'
    const dados = localStorage.getItem("valorInput");
    const arrayDadosSalvos = dados? JSON.parse(dados): [];
    //['item 1','item 2', 'item 3']
    recriarDados(arrayDadosSalvos);
})

function addTask() {
    const valorInput = inputTarefa.value;
    const tagLi = document.createElement('li');
    const botaoLi = document.createElement('button');
    botaoLi.classList.add('botaoRemove');
    tagLi.innerText = valorInput;
    botaoLi.innerText = 'Apagar';
    botaoLi.classList.add('botaoLi');
    listaUl.appendChild(tagLi);  
    tagLi.appendChild(botaoLi);     
}

function apagarTask(e) {
    const tag = e.parentElement;
    const textoTagLi = String(tag.childNodes[0].textContent);
    tag.remove();
    const conteudoalvo = localStorage.getItem("valorInput");
    const arrayDadosSalvos = conteudoalvo? JSON.parse(conteudoalvo): [];
    const arrayModificado = arrayDadosSalvos.filter((n) => n !== textoTagLi);
    localStorage.setItem("valorInput", JSON.stringify(arrayModificado));    
}

function salvarDados() {
    const conteudoInput = inputTarefa.value;
    const dadoLido = localStorage.getItem("valorInput");
    const arrayDadosSalvos = dadoLido? JSON.parse(dadoLido): [];
    //['item 1','item 2', 'item 3']
    arrayDadosSalvos.push(conteudoInput);
    localStorage.setItem("valorInput", JSON.stringify(arrayDadosSalvos));
    //'['item 1','item 2', 'item 3]'
}

function recriarDados(conteudo) {
    //['item 1','item 2', 'item 3]
    for(let valor of conteudo) {
        const newTagLi = document.createElement('li');
        const newBotaoLi = document.createElement('button');
        newBotaoLi.classList.add('botaoRemove');
        newBotaoLi.innerText = 'Apagar';
        newBotaoLi.classList.add('botaoLi');
        newTagLi.innerText = valor;
        listaUl.appendChild(newTagLi);  
        newTagLi.appendChild(newBotaoLi);
    }
}