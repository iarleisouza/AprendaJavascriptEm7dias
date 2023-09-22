const tempLondon = [18, 13, 8, 2]

/*
const tempPositive = tempLondon.filter(function(value){
    return value >= 0
})
*/
// Arrow Function
const tempPositive = tempLondon.filter(value =>  value >= 0)
  

console.log(tempPositive)
