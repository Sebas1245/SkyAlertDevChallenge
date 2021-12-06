import maskify from "./maskCreditCardNums";
import numberToOrdinal from "./numberToOrdinal";
import calculate from "./polishCalculator";
import readeline from 'readline';

const consoleInput : () => readeline.Interface  = () => readeline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const menu: () => void  = () => {
    console.log("Welcome to Sky Alert's Dev Challenge!")
    let rl = consoleInput();
    rl.question(
        "Choose one of the following options to test an excercise. ".concat(
        "\n \t Option 1 => Credit card number masking ").concat(
        "\n \t Option 2 => Ordinal numbers").concat(
        "\n \t Option 3 => Polish calculator").concat(
        "\n \t PRESS X TO EXIT \n"), 
        (answer : string) => {
            switch(answer) {
                case '1':
                    rl.question("Enter a credit card number: \t", (creditCardNumber: string) => {
                        console.log(maskify(creditCardNumber));
                        rl.close()
                    });
                    
                    break;
                case '2':
                    rl.question("Input a positive integer: \t", (number : string) => {
                        console.log(numberToOrdinal(parseFloat(number)));
                        rl.close();
                    });
                    break;
                case '3':
                    rl.question("Input an expression: \t", (expression : string) => {
                        console.log(calculate(expression));
                        rl.close();
                    });
                    break;
                default:
                    console.log("Unrecognized option please try again.");
                    break;
            }
        }
        )
}

menu();