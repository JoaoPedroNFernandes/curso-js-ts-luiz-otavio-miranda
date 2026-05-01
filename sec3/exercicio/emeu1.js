const estoque = [
  { nome: "Camiseta", categoria: "Roupas", preco: 49.90, quantidade: 15 },
  { nome: "Calça Jeans", categoria: "Roupas", preco: 129.90, quantidade: 3 },
  { nome: "Tênis", categoria: "Calçados", preco: 199.90, quantidade: 8 },
  { nome: "Sandália", categoria: "Calçados", preco: 89.90, quantidade: 4 },
  { nome: "Boné", categoria: "Acessórios", preco: 39.90, quantidade: 20 },
  { nome: "Cinto", categoria: "Acessórios", preco: 59.90, quantidade: 2 },
];

const totalEmEstoque = (produtos) => {
    let valorTotal = 0;
    for(let valor of produtos) {
        valorTotal += valor.preco *valor.quantidade;
    }
    return valorTotal;
}

const produtosEmFalta = (produtos) => {
    let produtoFalta = [];
    for(let p of produtos) {
        if(p.quantidade < 5) {
            produtoFalta.push(p.nome)
        }
    }
    return produtoFalta
}

const categoriasMaisCaras = (produtos) => {
    let categoria1 = '';
    let categoria2 = '';
    let categoria3 = '';
    let preco1 = 0;
    let preco2 = 0;
    let preco3 = 0;
    let contagem1 = 0;
    let contagem2 = 0;
    let contagem3 = 0;
    for(let m of produtos) {
        if(m.categoria === 'Roupas') {
            preco1 += m.preco
            categoria1 = m.categoria
            contagem1++
        } if(m.categoria === 'Calçados') {
            preco2 += m.preco
            categoria2 = m.categoria
            contagem2++
        } if(m.categoria === 'Acessórios') {
            preco3 += m.preco
            categoria3 = m.categoria
            contagem3++
        }
    }
    preco1 = preco1 / contagem1;
    preco2 = preco2 / contagem2;
    preco3 = preco3 / contagem3;
    if(preco1 > preco2 && preco1 > preco3) {
        return categoria1;
    } else if(preco2 > preco1 && preco2 > preco3) {
        return categoria2;
    } else {
        return categoria3
    }
}

const aplicarDesconto = (produtos, categoria, percentual) => {
    let desconto = [];
    for(let d of produtos) {
        if(d.categoria === categoria) {
            let reducaoPreco = (100 - percentual) / 100 * d.preco
            desconto.push({...d, preco: Number(reducaoPreco.toFixed(2))})
        } else {
            desconto.push(d)
        }
    }  
    return desconto
}

const resumoPorCategoriaa = (produtos) => {
    let totalR = 0, valortotalR = 0;
    let totalC = 0, valortotalC = 0;
    let totalA = 0, valortotalA = 0;
    for(let item of produtos) {
        if(item.categoria === 'Roupas') {
            totalR += item.quantidade;
            valortotalR += item.preco * item.quantidade;
        }
        if(item.categoria === 'Calçados') {
            totalC += item.quantidade;
            valortotalC += item.preco * item.quantidade;
        }
        if(item.categoria === 'Acessórios') {
            totalA += item.quantidade;
            valortotalA += item.preco * item.quantidade;
        }
    }
    return {
         Roupas: { totalItens: totalR, valorTotal: Number(valortotalR.toFixed(2)) },
        Calçados: { totalItens: totalC, valorTotal: Number(valortotalC.toFixed(2)) },
        Acessórios: { totalItens: totalA, valorTotal: Number(valortotalA.toFixed(2)) }
    }
}

console.log(totalEmEstoque(estoque))
console.log(produtosEmFalta(estoque))
console.log(categoriasMaisCaras(estoque))
console.log(aplicarDesconto(estoque, 'Roupas', 20))
console.log(resumoPorCategoriaa(estoque))