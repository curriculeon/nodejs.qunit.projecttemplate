export class SubtractTest {
    constructor() {
        this.calculator = new Calculator();
    }

    test() {
        this.testPositive();
        this.testNegative();
        this.testZeros();
        this.testLarge();
    }

    testPositive() {
        assert.strictEqual(this.calculator.subtract(5, 3), 2);
    }

    testNegative() {
        assert.strictEqual(this.calculator.subtract(-5, -3), -2);
    }

    testZeros() {
        assert.strictEqual(this.calculator.subtract(0, 0), 0);
    }

    testLarge() {
        assert.strictEqual(this.calculator.subtract(10000, 1000), 9000);
    }
}
