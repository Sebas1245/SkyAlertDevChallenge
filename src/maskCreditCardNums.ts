const maskify: (creditCardNumber: string) => string = (creditCardNumber: string) => {
    if (creditCardNumber.length < 7) {
        return creditCardNumber;
    } else {
        return creditCardNumber[0] 
        + new Array(creditCardNumber.length - 4).join('x') 
        + creditCardNumber.substring(creditCardNumber.length - 4);
    }
}

export default maskify;