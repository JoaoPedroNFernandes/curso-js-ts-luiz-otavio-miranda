//Slice()

const nomes = ['Eduardo', 'Maria', 'João', 'Fernanda', 'Pedro', 'Ana'];
//a função splice() é usada para adicionar ou remover elementos do array
//splice(indice de onde deve começar a remover, quantidade de elementos a serrem removidos
//, elementos a serem adicionadores a partir do indice definido)

//splice(2, 3) -> a partir de jõao remova 3 elementos -> ele vai remover joão,
//fernanda e pedro 

//splice(1, 3, 'antonio) -> remove maria, joao e fernanda e o antonio assume o indice 1.
//posso adicionar  quantos elementos eu quiser depois do indice e 
//quantidade de elementos a serem removidos.
const novo = nomes.splice(2, 3, 'antonio');
console.log(nomes)
console.log(novo)