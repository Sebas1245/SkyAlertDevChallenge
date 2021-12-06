import calculate from '../src/polishCalculator';

// Basic tests 
test('Calculate with one number gives the same numbre', () => {
    expect(calculate("3")).toBe(3);
})

test('Calculate a basic sum operation', () => {
    expect(calculate("3 4 +")).toBe(7);
})

test('Calculate with two operators', () => {
    expect(calculate("2 9 5 + -")).toBe(-12); 
})

// Edge cases
test('Calculate with multiplication', () => {
    expect(calculate('1 3 5 * -')).toBe(-14);
})

test('Calculate with division', () => {
    expect(calculate('1 10 5 / +')).toBe(3);
})

test('Calculate with operands in different order', () => {
    expect(calculate('5 1 2 + 4 * + 3 -')).toBe(14)
})

test('Calculate a power expression', () => {
    expect(calculate('3 3 ^')).toBe(27);
})

// Invalid input
test('Not enough operators to make a calculation', () => {
    expect(() => calculate('1 2 3 +')).toThrow(Error);
})

test('Invalid operator for calculation', () => {
    expect(() => calculate('1 2 3 @ *')).toThrow(Error);
})