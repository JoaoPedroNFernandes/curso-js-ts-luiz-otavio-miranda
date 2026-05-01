function relogio() {
    const relogio = document.querySelector('.relogio');
    document.addEventListener('click', (e) => {
        //e.target ele diz a maquina qual elemento o usuario clicou, seja ele qualquer um.
        const elementoClicado = e.target;
        //.contains quer dizer se possui algum elemento com essa classe
        if(elementoClicado.classList.contains('iniciar')) {
            iniciarTimer();
        }

        if(elementoClicado.classList.contains('pausar')) {
            pausarTimer();
        }

        if(elementoClicado.classList.contains('zerar')) {
            zerarTimer();
        }
    });

    let hora = 0;
    let min = 0;    
    let seg = 0;
    let iniciarInterval = null;
    function iniciarTimer() {
        relogio.classList.remove('pausado')
        if(iniciarInterval) {
        return alert('codigo já está rodando')
        }
        iniciarInterval = setInterval(() => {
            seg ++;
            if(seg === 60) {
                seg = 0;
                min++;
            }
            if(min === 60) {
                min = 0;
                hora++;
            }
            // String() é para converter para srting
            //padStart() é definir o tamanho da srting e completar com o que 
            const s = String(seg).padStart(2, '0');
            const m = String(min).padStart(2, '0');
            const h = String(hora).padStart(2, '0');
            relogio.textContent = `${h}:${m}:${s}`;
        }, 1000) 
    }  

    function pausarTimer() {
        relogio.classList.add('pausado');
        clearInterval(iniciarInterval);
        iniciarInterval = null;
    }

    function zerarTimer() {
        relogio.classList.remove('pausado')
        clearInterval(iniciarInterval);
        relogio.textContent = '00:00:00'
        hora = 0;
        min = 0;
        seg = 0;
        iniciarInterval = null;
    }
}
relogio();
