const {reverseName,resign} = require('./index');

describe('revertName function', ()=>{
    test('should be return name', () => {
        const actual = reverseName("John")
        const expected = "John";

        expect(actual).toEqual(expected);
    });
})

describe('resign function', ()=>{
    test('should be return n', () => {
        const actual = reverseName(10)
        const expected = 0;

        expect(actual).toEqual(expected);
    });
})