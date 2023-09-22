const num = [5, 6, 7, 8]
const final = num.pop(8)
//remove o último número da array. no caso do exemplo o número 8
const final1 = num.shift(5)
//remove o primeiro número da array

const final2 = num.splice(2, 1) // a partir do index 2 quero remover um item, não usa o terceiro parametro
const final3 = num.splice(2, 2) // a partir do index 2 remover 2 itens 
// primeiro párametro = o numero a adicionar
//segundo parametro = quantos quero remover
//terceiro parametro = quantos quero adicionar

console.log(num)
console.log(final)