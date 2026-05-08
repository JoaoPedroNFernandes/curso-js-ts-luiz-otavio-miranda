const request = obj => {
    return new Promise((resolve, reject) => {

        //objeto responsável por fazer requisições HTTP.
        const xhr = new XMLHttpRequest();

        //serve para configruar, open(metodo, url, se é assicirono)
        xhr.open(obj.method, obj.url, true)

        //send() é para enviar dados, mas como queremos apenas pegar dados por meio do
        //método get, entao, send aqui vai sem nada, apenas para fazer a requisição
        xhr.send()

        //vaia verificar se teve status ok
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                //deu certo, o resultado é xhr.responseText
                resolve(xhr.responseText);
            } else {
                //deu errado, o resultado é xhr.statusText
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', (e) => {
    //quando for clicado no link vai cancelar a execução padrão de mudar a pagina para a pagina
    // do link e vai executar a função carregaPagina
    const el = e.target;
    const tag =el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    //pegando o link 
    const href = el.getAttribute('href');
    
    const objetoConfigurado = {
        //passando que vamos pegar conteudo da pagina
        method: 'GET',
        //a url
        url: href,
    }

    try {
        //execuat a função request e espera seu resultado
        const response = await request(objetoConfigurado)
        carregaResultado(response);
    } catch (e) {
        console.log('Not found')
    }  
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

