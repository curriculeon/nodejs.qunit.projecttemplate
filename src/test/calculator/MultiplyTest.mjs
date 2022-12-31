export class MultiplyTest {
    constructor() {}
    
    test() {
        this.testPositiveNumbers();
        this.testNegativeNumbers();
        this.testMixedSignNumbers();
        this.testZero();
    }

    testPositiveNumbers() {
        const calculator = new Calculator();
        const result = calculator.multiply(2, 3);
        assert.equal(result, 6);
    }

    testNegativeNumbers() {
        const calculator = new Calculator();
        const result = calculator.multiply(-2, -3);
        assert.equal(result, 6);
    }

    testMixedNumbers() {
        const calculator = new Calculator();
        const result = calculator.multiply(-2, 3);
        assert.equal(result, -6);
    }

    testZero() {
        const calculator = new Calculator();
        const result = calculator.multiply(0, 3);
        assert.equal(result, 0);
    }
}
