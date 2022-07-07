import { QUnit } from "./node_modules/qunit/qunit/qunit.js";
import { Calculator } from "./src/main/Calculator.mjs";



function test(func, assertion) {
    console.log("testing " + func);
    QUnit.module(func.name, hooks => {
        QUnit.test('two numbers', assertion);
    })
}

const calculator = new Calculator();

test(calculator.add, assert => {
    assert.equal(calculator.add(1, 2), 3);
});

test(calculator.subtract, assert => {
    assert.equal(calculator.subtract(1, 2), -1);
});


test(calculator.multiply, assert => {
    assert.equal(calculator.multiply(1, 2), 3);
});

test(calculator.divide, assert => {
    assert.equal(calculator.divide(1, 2), -1);
});