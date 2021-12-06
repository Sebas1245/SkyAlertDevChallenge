import numberToOrdinal from '../src/numberToOrdinal'

// Test function to convert number to ordinal number

// Basic test cases
test('Getting a 0 as input returns 0', () => {
    expect(numberToOrdinal(0)).toBe("0");
})

test('Getting a 1 as input returns 1st', () => {
    expect(numberToOrdinal(1)).toBe("1st");
})

test('Getting a 10 as input returns 10th', () => {
    expect(numberToOrdinal(10)).toBe("10th");
})

// Edge cases
test('Getting a 22 as input returns 22nd', () => {
    expect(numberToOrdinal(22)).toBe("22nd");
})

test('Getting a 3023 returns 3023rd', () => {
    expect(numberToOrdinal(3023)).toBe("3023rd")
})

test('Getting 11 as input returns 11th', () => {
    expect(numberToOrdinal(11)).toBe("11th");
})

test('Getting 12 as input returns 12th', () => {
    expect(numberToOrdinal(12)).toBe("12th");
})

test('Getting 13 as input returns 13th', () => {
    expect(numberToOrdinal(13)).toBe("13th");
})

// Invalid inputs
test('Input of a negative number results in an error', () => {
    expect(() => numberToOrdinal(-1)).toThrowError(Error);
})

test('Input of a floating point number results in an error', () => {
    expect(() => numberToOrdinal(1.3)).toThrowError(Error);
})