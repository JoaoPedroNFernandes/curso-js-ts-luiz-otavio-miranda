//Objeto Date

/*
const date = new Date();
console.log(date)
console.log(date.getFullYear());
date.setFullYear(2027)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours(), date.getMinutes(), date.getSeconds())
console.log(date.getTime())
*/
const tresHoras = 60 * 60 * 3 * 1000;
const date = new Date(0 + tresHoras + tresHoras*8)
console.log(date.toString())

