const {reverseName,resign,replace,replace2,strQuotes,checkTheRange,toFixedNumber,ucFirst} = require('./index');

describe('revertName function', ()=>{
    test('should be return name', () => {
        const actual = reverseName("John")
        const expected = "John";

        expect(actual).toEqual(expected);
    });
})

describe('resign function', ()=>{
    test('should be return n', () => {
        const actual = resign(10)
        const expected = 0;

        expect(actual).toEqual(expected);
    });
})

describe('replace function', ()=>{
    test('should be return replace numbers', () => {
        const actual = replace(7,9)
        const expected = [9,7] ;

        expect(actual).toEqual(expected);
    });
})

describe('replace2 function', ()=>{
    test('should be return replace numbers', () => {
        const actual = replace2(7,9)
        const expected = [9,7] ;

        expect(actual).toEqual(expected);
    });
})

describe('strQuotes function', ()=>{
    test('should be return hello str ', () => {
        const actual = strQuotes('John')
        const expected = 'hello John';

        expect(actual).toEqual(expected);
    });
})

describe('checkTheRange function', ()=>{
    test('should be return true or false ', () => {
        const actual = checkTheRange(30)
        const expected = true ;

        expect(actual).toEqual(expected);
    });
})

describe('toFixedNumber function', ()=>{
    test('should be return FixedNumber', () => {
        const actual = toFixedNumber(12.35,1)
        const expected = '12.3';

        expect(actual).toEqual(expected);
    });
})

describe('ucFirst function', ()=>{
    test('should be return Upper Case first symbol', () => {
        const actual = ucFirst("john")
        const expected = 'John';

        expect(actual).toEqual(expected);
    });
})