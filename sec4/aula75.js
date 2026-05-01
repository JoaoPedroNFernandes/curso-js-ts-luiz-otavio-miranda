//Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //getter

        //duvida pra depois: por que ia dá problema se naop usasse this.nome e this.sobrenome 
        //aqui iria da problema no setter?
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            
        },

        fala: function(assunto) {
            return `${nome} está ${assunto}, ${this.peso}`
            // This, nesse contexto, assume o valor de p1, sendo a mesma coisa eu dizer 
            //p1.peso. O this assume diversas coisas e tudo isso depende do contexto.
        },
        altura,
        peso,

        //getter
        //esse get antes de imc() está fazendo com que o imc() seja tratado como um objeto
        //assim, ao inves de ele ser chamado usando o p1.imc(), ele seŕa chamado usando 
        //p1.imc.
        get imc() {
           const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('João Pedro', 'Fernandes', 1.80, 80);
// console.log(p1.imc)
// console.log(p1.nomeCompleto)

p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)
console.log(p1.nome);
console.log(p1.sobrenome);
