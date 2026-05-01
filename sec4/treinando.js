//Exercício próprio destinado a aprender um pouco mais sobre factory functions.

function criarAluno(nome, sobrenome, mensalidade, formadePagamneto) {
    return {
        nome,
        sobrenome,
        mensalidade,
        formadePagamneto,

        get nomecompleto() {
            if(this.mensalidade) {
                return `bem vindo ${this.nome} ${this.sobrenome} a nossa academia.`
            }
            return `falha no cadastro, verifique se sua maensalidade está paga`
        },

        set executarPagamento(valor) {
            if((this.formadePagamneto).toLowerCase() === 'cartão de crédito' || (this.formadePagamneto).toLowerCase() === 'pix' || (this.formadePagamneto).toLowerCase() === 'cartão de débito' || (this.formadePagamneto).toLowerCase() === 'dinheiro') {
                if(valor > 60){
                    console.log(`error. o valor pago foi acima do valor da mensalidade`)
                    return
                } 
                if(valor < 60) {
                    console.log(`error. o valor pago foi abaixo do valor da mensalidade`)
                    return
                } 
               this.mensalidade = true;
                console.log(`pagamento efetuado com sucesso.`)
                
            }
                
        }

    }
}

const aluno1 = criarAluno('João', 'Pedro', false, 'pix');
console.log(aluno1.nomecompleto)
aluno1.executarPagamento = 60
console.log(aluno1.nomecompleto)
