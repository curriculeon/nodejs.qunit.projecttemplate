import { Calculator } from "../../main/Calculator.mjs"
const assert = require('assert');


export class AddTest {
    constructor() {}

    test() {
        this.testPositiveNumbers();
        this.testNegativeNumbers();
        this.testMixedSignNumbers();
    }

    testPositiveNumbers() {
        const calculator = new Calculator();
        const result = calculator.add(5, 10);
        assert.strictEqual(result, 15);
    }

    testNegativeNumbers() {
        const calculator = new Calculator();
        const result = calculator.add(-5, -10);
        assert.strictEqual(result, -15);
    }

    testMixedSignNumbers() {
        const calculator = new Calculator();
        const result = calculator.add(-5, 10);
        assert.strictEqual(result, 5);
    }
}
