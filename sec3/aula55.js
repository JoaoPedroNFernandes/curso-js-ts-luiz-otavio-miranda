//for in
//for in -> lê os indíces dos arrays ou chaves do objeto
const frutas = ['Banana', 'Maça', 'Uva'];
for(let i in frutas) {
    console.log(i)
}

const pessoa = {
    nome: 'João Pedro',
    sobrenome: "Fernandes",
    idade: 18
}

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]) 
    //pessoa["nome"] mesma coisa que pessoa.nome
}