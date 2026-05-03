//Métodos de instância e estáticos

class Controleremoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método instância
    aumentaVolume() {
        this.volume += 2;
    }

    diminuiVolume() {
        this.volume -= 2;
    }

    //Método estático
    //isso não tem acesso aos métodos de instância.
    static soma(x, y) {
        return x + y;
    }

}

const controle = new Controleremoto('LG');
controle.aumentaVolume()
controle.aumentaVolume()
controle.aumentaVolume()
console.log(controle)
//se reparar, eu uso ControleRemoto.soma e nao controle.soma isso é por conta que o
//método estático é, digamos, independente. Ele poderia ser criando fora da class
//normalmente mas, pode ser útil em determinado momento.
console.log(Controleremoto.soma(7, 9))