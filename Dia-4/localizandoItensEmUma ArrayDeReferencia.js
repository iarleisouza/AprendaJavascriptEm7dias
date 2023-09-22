
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'},
]

console.log(movies.includes( {id: 1, movieName: 'Dejavu'}))
// não localiza uzando includes na array de referencia
// esse método so funciona na array primitiva

console.log(movies.find(function(movie){
    return movie.movieName == 'The Matrix'
}))
//find funciona com uma função
// senão localizar vai retornar como undefined