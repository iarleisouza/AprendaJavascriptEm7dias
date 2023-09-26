function carLoan(loan, rate, years) {
    return loan * rate / 100 * years
}

console.log(carLoan(20000, 2.5, 5))





function carLoan(loan, rate = 2.9, years = 5) {
    return( loan * rate / 100 * years ) + loan
}

console.log(carLoan(20000))