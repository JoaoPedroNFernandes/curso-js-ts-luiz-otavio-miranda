document.addEventListener('click', (e) => {
    const el = e.target;
    const tag =el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    //fetch faz requisições http, ele retorna uma promise, por isso usamos then()

    try {
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Error 404! Eu que lancei');
        response.text()
        .then(html => carregaResultado(html))
    }catch(e) {
        console.error(e)
    }
   
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

