import { AddTest } from "./AddTest.mjs";
import { SubtractTest } from "./SubtractTest.mjs";
import { MultiplyTest } from "./MultiplyTest.mjs";
import { DivideTest } from "./DivideTest.mjs";



export class CalculatorTestRunner {
    test() {
        new AddTest().test();
        new SubtractTest().test();
        new MultiplyTest().test();
        new DivideTest().test();
    }
}
