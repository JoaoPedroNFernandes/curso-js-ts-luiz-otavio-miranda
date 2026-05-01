//esse exercício mostrou como usar a função construtora para criar a calculadora.

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
            this.cliqueBotoes();
            this.pressionaEnter()
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup',  e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
        })
    };

    this.realizaConta = () => {
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
        };

        this.clearDisplay = () => {
            this.display.value = '';
        }

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.cliqueBotoes = () => {
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
        }

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
        };

        
}

const calculadora = new Calculadora()
calculadora.inicia();