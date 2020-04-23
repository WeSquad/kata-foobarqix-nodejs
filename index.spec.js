// TODO: write necessary unit tests
const compute = require('./index')

describe('Basic test', () => {
    it('should return the string passed as a param when no rule match', () => {
        const input = '1'
        const output = '1'
        expect(compute(input)).toEqual(output)
    })
})

describe('Implement the divide rule', () => {
    it('should return Foo if value can be divide by 3', () => {
        const inputs = ['3', '6', '9', '12']
        const output = 'Foo'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })
})