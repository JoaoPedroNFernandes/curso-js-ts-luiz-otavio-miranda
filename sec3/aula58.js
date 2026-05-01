//While and Do While

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 51
let rad = random(min, max)
console.log(rad)

while (rad < 50) {
    rad = random(min, max)
    console.log(rad)
}
console.log('############################')
do {
 rad = random(min, max)
 console.log(rad)
} while (rad !== 50)