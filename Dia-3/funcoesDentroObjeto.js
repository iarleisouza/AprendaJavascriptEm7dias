const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fundamentals',
        chap2: '1st Law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}
book.printBook()