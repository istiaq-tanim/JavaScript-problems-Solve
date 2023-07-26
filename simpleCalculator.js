const simpleCalculator = (num1, num2, operation) => {
    switch (operation) {
        case "+":
            {
                return num1 + num2
            }
        case "-":
            {
                return num1 - num2
            }
        case "*":
            {
                return num1 * num2
            }
        case "/":
            {
                return num1 / num2
            }
        default:
            return "Something is Wrong"
    }
}

console.log(simpleCalculator(10, 5, "*"))