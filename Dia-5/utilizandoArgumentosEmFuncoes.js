
/*
function price(a, b) {
    return a + b
}
console.log(price(10, 20))

//NaN =>Not a Number = não é um número
*/

/*
function price(a, b) {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

console.log(price(10, 20, 30, 40))

*/
// usando arguments você não precisa de adicionar a quantidade de argumentos especifica de forma estatica. Com arguments fica dinâmico
function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

console.log(price(10, 20, 30, 40))