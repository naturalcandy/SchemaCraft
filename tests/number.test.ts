import { numberType } from "../src/core/number";

//unit tests for numberType and its supported metadata

const empty = {
    "type": "number"
}
test('no metadata', () => {
    expect(numberType()).toStrictEqual(empty);
})

const minimumSet = {
    "type": "number",
    "minimum": 3
}
test('min test', () => {
    expect(numberType({ minimum: 3})).toStrictEqual(minimumSet);
})

const exclusiveMinimumSet = {
    "type": "number",
    "exclusiveMinimum": 3
}
test('exclusive min test', () => {
    expect(numberType({ exclusiveMinimum: 3})).toStrictEqual(exclusiveMinimumSet);
})

const maximumSet = {
    "type": "number",
    "maximum": 3
}
test('max test', () => {
    expect(numberType({ maximum: 3})).toStrictEqual(maximumSet);
})

const exclusiveMaximumset = {
    "type": "number",
    "exclusiveMaximum": 3
}
test('exclusive max test', () => {
    expect(numberType({ exclusiveMaximum: 3})).toStrictEqual(exclusiveMaximumset);
})

const multipleOfSet = {
    "type": "number",
    "multipleOf": 3
}
test('multipleOf test', () => {
    expect(numberType({ multipleOf: 3})).toStrictEqual(multipleOfSet);
})