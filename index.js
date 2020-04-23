// TODO: write the compute function and implement
// all rules step by step
const compute = n => {
    const safeN = parseInt(n, 10)
    let result = ''

    if(safeN % 3 === 0) {
        result += 'Foo'
    }

    if(safeN % 5 === 0) {
        result += 'Bar'
    }

    if(safeN % 7 === 0) {
        result += 'Qix'
    }
    
    Array.from(n).forEach(v => {
        if(v === '3') {
            result += 'Foo'
        }
        if(v === '5') {
            result += 'Bar'
        }
    })
    // ternary expression. the double !! convert variable to boolean value
    // the triple === checks for value and type. it is a safer approach
    return !!result === true ? result : n
}

module.exports = compute