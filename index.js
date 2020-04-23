// TODO: write the compute function and implement
// all rules step by step
const compute = n => {
    const safeN = parseInt(n, 10)
    if(safeN % 3 === 0) {
        return 'Foo'
    }
    return n
}

module.exports = compute