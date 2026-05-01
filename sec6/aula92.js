//Métodos úteis para objetos

const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,//espalhar o objeto produto dentro do objeto cancea.
    //isso é importante pois, fazer const caneca = produto faria a variavel 
    //caneca apontar para o mesmo local que a variavel produto. Assim, modificando o 
    //objeto de produto. Portanto, melhor usar ...produto para espalhar as informações
    //dentro de caneca
    material: 'Porcelana'
}

// console.log(produto)
// caneca.preco = 2.5
// console.log(caneca)
Object.freeze(produto) //não pode vai ser alterado o objeto produto
console.log(Object.keys(produto))//mostra apenas as chaves do objeto

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))//mostra as propriedades
//de defineProperty() para a propriedade escolhida no segundo parametro.
