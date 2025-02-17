function calculator(a, b, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    return result;
}

module.exports = calculator;
