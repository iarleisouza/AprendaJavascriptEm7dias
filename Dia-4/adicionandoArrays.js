const num = [7, 8, 9]

num.push(10, 11, 12)
// adiciona no final da array

num.unshift(1, 2, 3)
// adiciona no inicio da array

num.splice(3, 0, 4, 5, 6)
// primeiro párametro = o numero a adicionar
//segundo parametro = quantos quero remover
//terceiro parametro = quantos quero adicionar
// index de inicio
// quantos quero apagar pra frente
//o quee quantos quero adicionar 
console.log(num)