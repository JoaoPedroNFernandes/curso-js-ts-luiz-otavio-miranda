//Validação de cpf

function validaCPF(cpf) {
    const cpfSemNada = cpf.replace(/\D+/g, '');
    const cpfLimpo = Array.from(cpfSemNada);
    const cpfArray = cpfLimpo.slice(0, -2);

    let valorReduzindo = 10;
    const primeriaSoma = cpfArray.reduce((ac, valor, indice) => {
       ac += valor * (valorReduzindo - indice);
        return ac;
    }, 0);
    
    let contafixa1 = 11 - (primeriaSoma % 11);
    if(contafixa1 > 9) {
        contafixa1 = 0;
    }
    cpfArray.push(contafixa1.toString());
    
    valorReduzindo = 11;
    const segundaSoma = cpfArray.reduce((ac, valor, indice) => {
        ac += valor * (valorReduzindo - indice);
        return ac;
    }, 0)

    let contafixa2 = 11 - (segundaSoma % 11);
    if(contafixa2 > 9) {
        contafixa2 = 0;
    }

    cpfArray.push(contafixa2.toString());

    const cpfConfirmado = cpfArray.join('')
    
    if(cpfConfirmado === cpfSemNada) {
        return "CPF válido";
    } else {
        return "CPF não válido";
    }
}


console.log(validaCPF('705.484.450-52'));
console.log(validaCPF('070.987.720-03'));