import maskify from '../src/maskCreditCardNums'

// Credit card number masking tests
//Basic tests
test('Mask a 16 digit credit card number', () => {
    expect(maskify("5234123412349876")).toBe("5xxxxxxxxxxx9876");
})

test('Do not mask a string that is less than 7 characters', () => {
    expect(maskify("123456")).toBe("123456");
})

// Edge case
test('Mask a 7 digit credit card number', () => {
    expect(maskify("1234567")).toBe("1xx4567");
})