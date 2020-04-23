// TODO: write the compute function and implement
// all rules step by step
const compute = n => {
    const map = {
        3: 'Foo',
        5: 'Bar',
        7: 'Qix'
    }
    let result = ''
    Object.keys(map).forEach(key => {
        if(parseInt(n, 10) % key === 0) {
            result += map[key]
        } 
    })
    
    Array.from(n).forEach(v => {
        Object.keys(map).forEach(key => {
            if(v === key) {
                result += map[key]
            } 
        })       
    })
    // ternary expression. the double !! convert variable to boolean value
    // the triple === checks for value and type. it is a safer approach
    return !!result === true ? result : n
}

module.exports = compute