//Validaçãod de CPF com class

class ValidaCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
        this.cpfLimpo = Array.from(this.cpf);
        this.cpf9Digitios = this.cpfLimpo.slice(0, -2);
        this.cpfCompleto = [... this.cpf9Digitios];
    }

    valida() {
        this.cpfCompleto = [...this.cpf9Digitios];
        const isSequencia = this.cpfLimpo.every(digito => digito === this.cpfLimpo[0]);
        if(this.cpf.length !== 11 || isSequencia) return false;
        this.formula1(this.soma1());
        this.formula2(this.soma2());
        return this.confereCPF();
    }

    soma1() {
        let contador = 10;
        const soma1Feita = this.cpf9Digitios.reduce((ac, valor) => {
            ac += valor * contador;
            contador--;
            return ac;
        }, 0);
        return soma1Feita;
    }

    formula1(somaFeita) {
        const formula1 = 11 - (somaFeita % 11) <= 9 ? 11 - (somaFeita % 11) : 0;
        this.cpfCompleto.push(formula1.toString());
    }

    soma2() {
        let contador = 11;
        const soma2Feita = this.cpfCompleto.reduce((ac, valor) => {
            ac += valor * contador;
            contador--;
            return ac;
        }, 0);
        return soma2Feita;
    }

    formula2(soma2Feita) {
        const formula2 = 11 - (soma2Feita % 11) <= 9? 11 - (soma2Feita % 11) : 0;
        this.cpfCompleto.push(formula2.toString());
    }

    confereCPF() {
        this.cpfCompleto = this.cpfCompleto.join('');
        if(this.cpfCompleto === this.cpf) return true;
        return false;
    }

}

const cpf1 = new ValidaCPF('705.484.450-52');
console.log(cpf1.valida());