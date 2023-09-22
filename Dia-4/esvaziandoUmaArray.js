
const num = [5, 6, 7, 8]

num = [] //array vazia
// primero metodo

num.length = 0
//segundo método

num.splice(0, num.length)
// terceiro método
// a partir do index 0 limpar todo o array


console.log(num)