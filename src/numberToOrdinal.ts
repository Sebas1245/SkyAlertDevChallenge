const numberToOrdinal : (number : number) => string = (number: number) => {
    if (number < 0 || number % 1 !== 0) {
        throw new Error("Ordinal numbers are only positve integers");
    } else {
        if (number === 0) {
            return "0";
        } else {
            const numberAsString : string = number.toString();
            const lastTwoDigits : string = numberAsString.substring(numberAsString.length - 2, numberAsString.length);
            const lastDigit : string = numberAsString[numberAsString.length - 1];
            if (lastTwoDigits === "11" || lastTwoDigits === "12" || lastTwoDigits === "13") {
                return numberAsString + "th";
            }
            if (lastDigit === "1") {
                return numberAsString + "st";
            } else if (lastDigit === "2") {
                return numberAsString + "nd";
            } else if (lastDigit === "3") {
                return numberAsString + "rd";
            } else {
                return numberAsString + "th";
            }
        }
    }

}

export default numberToOrdinal;