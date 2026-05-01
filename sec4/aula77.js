
//Função construtora
function Pessoa(nome, sobrenome) {

    //variaveis não são acessadas fora da função.



    //é usado o this aqui por que a palavra new (nas constantes) ela já faz automaticamente um objeto
    //no caso, o this.nome = nome é lido assim: para o objeto atual (que é da função criada)
    //crie uma propriedade nome e adicone o valor nome (parametro) nele. Assim, é como se
    //eu fizesse nome: nome.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    }
}

//o new já automaticamente cria um objeto vazio {}. Portanto, o this aponta para esse objeto vazio
//criando as propriedade e/ou métodos que já estão disponiveis na variavel, por isso não precisa de return
const p1 = new Pessoa('João', 'Pedro');
const p2 = new Pessoa('João', 'Pedro');
p1.metodo()