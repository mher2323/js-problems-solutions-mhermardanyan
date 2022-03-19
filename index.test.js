const {reverseName,resign,replace,replace2} = require('./index');

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