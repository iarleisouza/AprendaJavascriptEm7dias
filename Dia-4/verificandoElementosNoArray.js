// metodo every() - verifica cada um dos números do array, um por um

const tempLondon = [18, 13, 8, 2]

const tempPositive = tempLondon.every(function(value){
    return value >= 0
})
console.log(tempPositive)