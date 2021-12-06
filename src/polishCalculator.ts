const calculate: (expression: string) => number  = (expression: string) => {
    // make the string expression into an array of string
    let formattedExpr = expression.split(" ");
    let stack : Array<number> = [];
    // iterate over the array and push into the stack each of the numbers
    formattedExpr.forEach((item: string) => {
        // when formatting the expression we got back strings
        // therefore we must try to convert to a number
        const itemAsNumber : number = parseFloat(item)
        if (!isNaN(itemAsNumber) && isFinite(itemAsNumber)) {
            stack.push(itemAsNumber)
        } else {
            // if we did not get a number that means that we must operate over
            // the last two elements in the stack, setting the top of the stack 
            // as the evaluated calculation
            let n1 : any = stack.pop()
            let n2 : any = stack.pop()
            if (item === "+") {
                stack.push(n1 + n2);
            } else if (item === "-") {
                stack.push(n2 - n1);
            } else if (item === "*") {
                stack.push(n1 * n2);
            } else if (item === "/") {
                stack.push(n2 / n1);
            } else if (item === "^") {
                stack.push(Math.pow(n2, n1));
            } else {
                throw new Error("Invalid operator");
            }
        }
    })
    // if we still have numbers left in the stack other than the end result
    // that means that a number was not operated upon
    if (stack.length > 1) {
        throw new Error("There are not enough operators to make a calculation");
    } else {
        // return whatever we had left in the stack 
        return stack[0];
    }
}

export default calculate;