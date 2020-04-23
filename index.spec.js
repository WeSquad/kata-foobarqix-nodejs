// TODO: write necessary unit tests
const compute = require('./index')

describe('Basic test', () => {
    it('should return the string passed as a param', () => {
        const input = '1'
        const output = '1'
        expect(compute(input)).toEqual(output)
    })
})