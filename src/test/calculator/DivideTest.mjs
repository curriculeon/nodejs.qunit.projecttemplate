export class DivideTest {
    constructor() {
    }

    test() {
        this.testPositiveResult();
        this.testNegativeResult();
        this.testDecimalResult();
        this.testDivideByZero();
    }
    
    testPositiveResult() {
        const calculator = new Calculator();
        const dividend = 10;
        const divisor = 5;
        const expectedResult = 2;
        const actualResult = calculator.divide(dividend, divisor);
        assert.strictEqual(actualResult, expectedResult);
    }

    testNegativeResult() {
        const calculator = new Calculator();
        const dividend = -10;
        const divisor = 5;
        const expectedResult = -2;
        const actualResult = calculator.divide(dividend, divisor);
        assert.strictEqual(actualResult, expectedResult);
    }

    testDecimalResult() {
        const calculator = new Calculator();
        const dividend = 10;
        const divisor = 3;
        const expectedResult = 3.3333333333333335;
        const actualResult = calculator.divide(dividend, divisor);
        assert.strictEqual(actualResult, expectedResult);
    }

    testDivideByZero() {
        const calculator = new Calculator();
        const dividend = 10;
        const divisor = 0;
        assert.throws(() => calculator.divide(dividend, divisor), DivisionByZeroError);
    }
}
