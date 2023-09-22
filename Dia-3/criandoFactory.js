function creatBook(tittle, author, pages){
    const book = {
        bookTitle: tittle,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}
const book1 = creatBook('Atomic', 'James', 306)
const book2 = creatBook('Think', 'Napolean', 306)

console.log(book1)
console.log(book2)