/*
And - E - &&
Or  - OU - ||
Not - NÃO - !
*/

let temIdadeMinima = true
let temTituloEleitor = false

//let podevotar = temIdadeMinima || temTituloEleitor
//console.log('Pode votar: ' + podevotar)
//let podeviajar = !podevotar
//console.log('Pode votar: ' + podevotar)

//let podevotar = temIdadeMinima && temTituloEleitor
//console.log('Pode votar: ' + podevotar)
//let podeviajar = !podevotar
//console.log('Pode votar: ' + podevotar)

let podevotar = temIdadeMinima || temTituloEleitor
console.log('Pode votar: ' + podevotar)
let podeviajar = !podevotar
console.log('Pode viajar: ' + podeviajar)