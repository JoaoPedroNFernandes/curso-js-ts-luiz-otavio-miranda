// divisivel por 3, por 5, por 3 e 5, etc

const divisivel = (num) => {
    if(typeof(num) !== 'number') {
        return num
    } else if(num % 3 === 0 && num % 5 == 0) {
        return 'FizzBuzz'
    } else if(num % 3 === 0) {
        return 'Fizz'
    } else if(num % 5 === 0) {
        return 'Bzz'
    }else if(num % 3 !==0 && num % 5 !== 0) {
        return num
    }
}

const numeroAleatorio100 = (min, max) => {
  const r =  Math.floor(Math.random() * (max - min + 1) + min)
  return r
}

let numero = divisivel(numeroAleatorio100(0, 100))
console.log(numero)
while(numero !== 'FizzBuzz') {
 numero = divisivel(numeroAleatorio100(0, 100))
 console.log(numero)
}




