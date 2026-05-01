//Esse exercício teve o intuito de mostrar como que é usado a função fábrica.

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        //sempre que preciso referenciar um metodo do objeto dentro do objeto eu preciso usar this
        //quem tá chamando a função de ouvir evento é o document e não a calculadora, por isso o this é document
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter()
        },

        //isso faz que quando eu precione enter seja realizado a conta
        pressionaEnter() {
            this.display.addEventListener('keyup',  e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            
            try {
                //esse método eval é muito perigoso pois ele executa js. Logo, alguém pode acabar hackeando
                //as informações e dados.
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                
                this.display.value = String(conta);
            } catch (e) {
                alert('conta inválida');
                return
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        //para acessar qualquer método desse objeto é necessário usar o this. o this nesse caso significa
        //calculadora, ou seja, é como se você usasse calculadora.inicia().
        cliqueBotoes() {

            //porém, quando foi usado o a função add... foi criado um novo metodo que vem do document
            //assim, o this passa a ser "document". por que? por que foi o document que chamou a função
            //portanto, o this assume o valor de quem chamou.

            //como aqui eu estou usando arrow function, o this ainda assume o valor de calculadora pois, a arrow
            //function não permite que o this seja mudado
            document.addEventListener('click', (e) => {
                const el = e.target
                // a variavel el é o elemento html que foi clicado na tela.

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
            //depois das chaves e antes dos parenteses eu podia usar .bind(this) mas, estou usando
            //arrow function.
            //esse 'bind' faz o seguinte: é como se ele dissesse "use o meu this no lugar do seu". Assim, 
            //ao inves de usar o this -> document, é usado o this -> calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora()
calculadora.inicia();