//Herança -> segue as mesmas regras de herença já vistas

class DispositivoEletronico {
    constructor(nome, ligado) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }

        this.ligado = true;
    }

     desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }

}

//Extends faz eu herdar de DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        //super(nome) faz eu pegar os parâmetros que eu quero de DispositivoEletronico
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '8 Plus');
s1.ligar()
console.log(s1);