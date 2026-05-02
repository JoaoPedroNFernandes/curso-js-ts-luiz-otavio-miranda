const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas[id] = { ...pessoa };
    
// }

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    //set coloca um as informações dentro do new Map()
    novasPessoas.set(id, { ...pessoa });
    //o método set(chave, valor), é como colocar a chave e valor dentro de um objeto
    //úncia diferença é que ao inves de nome: nomeDeAlguem vai ser nome => nomeDeAlguem
    //Como mostrado no exemplo acima, posso utilizar um objeto para por mais informações
    //ou variáveis, etc.
};
//podemos acessar a informação desejada usando o get(chave). Colocamos a chave que está
//a informação e assim, obtemos
console.log(novasPessoas.get(1));
console.log('--------------');
console.log(novasPessoas);
