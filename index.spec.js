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

    it('should return Bar if value can be divide by 5', () => {
        const inputs = ['5', '10']
        const output = 'Bar'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })


    it('should return FooBar if value can be divide by 3 and 5', () => {
        const inputs = ['15', '30']
        const output = 'FooBar'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return Qix if value can be divide by 7', () => {
        const inputs = ['7', '49']
        const output = 'Qix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return FooQix if value can be divide by 3 and 7', () => {
        const input = '21'
        const output = 'FooQix'
        expect(compute(input)).toEqual(output) 
    })
    
    it('should return BarQix if value can be divide by 5 and 7', () => {
        const inputs = ['35', '70']
        const output = 'BarQix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return FooBarQix if value can be divide by 3 and 5 and 7', () => {
        const inputs = ['105', '210']
        const output = 'FooBarQix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })
    
})