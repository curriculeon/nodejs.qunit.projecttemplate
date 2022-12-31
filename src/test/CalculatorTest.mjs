import { QUnit } from "../../node_modules/qunit/qunit/qunit.js";
import { Calculator } from "../main/Calculator.mjs";

function test(func, assertion) {
    console.log("testing " + func);
    QUnit.module(func.name, hooks => {
        QUnit.test('two numbers', assertion);
    })
}

const calculator = new Calculator();

export class CalculatorTest {
    test() {
        this.test1();
        this.test2();
        this.test3();
        this.test4();
    }

    test1() {
        test(calculator.add, assert => {
            assert.equal(calculator.add(1, 2), 3);
        });
    }

    test2() {
        test(calculator.subtract, assert => {
            assert.equal(calculator.subtract(1, 2), -1);
        });
    }

    test3() {
        test(calculator.multiply, assert => {
            assert.equal(calculator.multiply(1, 2), 3);
        });
    }

    test4() {
        test(calculator.divide, assert => {
            assert.equal(calculator.divide(1, 2), -1);
        });
    }
}