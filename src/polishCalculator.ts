const calculate: (expression: string) => number  = (expression: string) => {
    let formattedExpr = expression.split(" ");
    let stack : Array<number> = [];
    formattedExpr.forEach((item: string) => {
        const itemAsNumber : number = parseFloat(item)
        if (!isNaN(itemAsNumber) && isFinite(itemAsNumber)) {
            stack.push(itemAsNumber)
        } else {
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

    if (stack.length > 1) {
        throw new Error("There are not enough operators to make a calculation");
    } else {
        return stack[0];
    }
}

export default calculate;