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
        const inputs = ['6', '9', '12']
        const output = 'Foo'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return Bar if value can be divide by 5', () => {
        const inputs = ['10']
        const output = 'Bar'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })


    it('should return FooBar if value can be divide by 3 and 5', () => {
        const inputs = ['60']
        const output = 'FooBar'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return Qix if value can be divide by 7', () => {
        const inputs = ['49']
        const output = 'Qix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return FooQix if value can be divide by 3 and 7', () => {
        const input = '21'
        const output = 'FooQix'
        expect(compute(input)).toEqual(output) 
    })
    
    it('should return BarQix if value can be divide by 5 and 7', () => {
        const inputs = ['490']
        const output = 'BarQix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })

    it('should return FooBarQix if value can be divide by 3 and 5 and 7', () => {
        const inputs = ['210']
        const output = 'FooBarQix'
        inputs.forEach(input => expect(compute(input)).toEqual(output))        
    })
    
})

describe('Implement the `contains` rule with the divide rule', () => {
    it('should return Foo if value contains 3 AND has no divide rule', () => {
        const input = '13'
        const output = 'Foo'
        expect(compute(input)).toEqual(output)        
    })

    it('should return FooFoo if value contains 3 AND is divisible by 3', () => {
        const input = '3'
        const output = 'FooFoo'
        expect(compute(input)).toEqual(output)        
    })

    it('should return BarBar if value contains 5 AND is divisible by 5', () => {
        const input = '5'
        const output = 'BarBar'
        expect(compute(input)).toEqual(output)        
    })

    it('should return FooBarBar if value contains 5 AND is divisible by 3 and 5', () => {
        const input = '15'
        const output = 'FooBarBar'
        expect(compute(input)).toEqual(output)        
    })

    it('should return BarQixFooBar if value contains 3 and 5 AND is divisible by 5 and 7', () => {
        const input = '35'
        const output = 'BarQixFooBar'
        expect(compute(input)).toEqual(output)        
    })

    it('should return Qix if value contains 7 AND has no divide rule', () => {
        const input = '71'
        const output = 'Qix'
        expect(compute(input)).toEqual(output)
    })

    it('should return FooQix if value contains 7 AND is divible by 3', () => {
        const input = '72'
        const output = 'FooQix'
        expect(compute(input)).toEqual(output)
    })

    it('should return BarQix if value contains 7 AND is divible by 5', () => {
        const input = '170'
        const output = 'BarQix'
        expect(compute(input)).toEqual(output)
    })
})