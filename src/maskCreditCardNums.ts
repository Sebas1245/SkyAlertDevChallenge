const maskify: (creditCardNumber: string) => string = (creditCardNumber: string) => {
    if (creditCardNumber.length < 7) {
        return creditCardNumber;
    } else {
        return creditCardNumber[0] // first digit
        + new Array(creditCardNumber.length - 4).join('x') // masked digits 
        + creditCardNumber.substring(creditCardNumber.length - 4); // last 4 digits of the credit card
    }
}

export default maskify;