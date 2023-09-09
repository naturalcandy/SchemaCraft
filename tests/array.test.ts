import { arrayType } from "../src/core/array";
import { stringType } from "../src/core/string";
import { integerType } from "../src/core/integer";
import { booleanType } from "../src/core/boolean";
//unit tests for arrayType and its supported metadata


const empty = {
    "type": "array"
}
test('no metadata', () => {
    expect(arrayType()).toStrictEqual(empty);
})


const itemsSetEmpty = {
    "type": "array",
    "items": {
        "type": "string"
    }
}
test('empty properties test', () => {
    expect(arrayType(stringType(), undefined)).toStrictEqual(itemsSetEmpty);
})


const minItemsSet = {
    "type": "array",
    "minItems": 2
}
test('min items test', () => {
    expect(arrayType(undefined, {minItems: 2})).toStrictEqual(minItemsSet);
})

const maxItemsSet = {
    "type": "array",
    "maxItems": 2
}
test('min items test', () => {
    expect(arrayType(undefined, {maxItems: 2})).toStrictEqual(maxItemsSet);
})


const uniqueItemsSet = {
    "type": "array",
    "uniqueItems": true
}
test('min items test', () => {
    expect(arrayType(undefined, {uniqueItems: true})).toStrictEqual(uniqueItemsSet);
})

const containsSet = {
    "type": "array",
    "contains": {
      "type": "string"
    }
}
test('contains test', () => {
    expect(arrayType(undefined, {contains: stringType()})).toStrictEqual(containsSet);
})

const minContains = {
    "type": "array",
    "contains": {
      "type": "string"
    },
    "minContains": 2
}

test('min contains test', () => {
    expect(arrayType(undefined, {contains: stringType(), minContains: 2})).toStrictEqual(minContains);
})


const maxContainsSet = {
    "type": "array",
    "contains": {
      "type": "string"
    },
    "maxContains": 2
}

test('min contains test', () => {
    expect(arrayType(undefined, {contains: stringType(), maxContains: 2})).toStrictEqual(maxContainsSet);
})

const arrayItemsSet = {
    "type": "array",
    "items": {
      "type": "string",
      "minLength": 0
    }
}
  
test('array items test', () => {
    expect(arrayType(stringType({minLength: 0}))).toStrictEqual(arrayItemsSet);
})

const arrayItemsListSet = {
    "type": "array",
    "items": [
      {"type": "integer"},
      {"type": "string"}
    ]
}

test('list array items test', () => {
    expect(arrayType([integerType(), stringType()])).toStrictEqual(arrayItemsListSet);
})

const additionalItemsSet = {
    "type": "array",
    "items": [
      {"type": "integer"},
      {"type": "string"}
    ],
    "additionalItems": {
      "type": "boolean"
    }
}

test('additional items test', () => {
    expect(arrayType([integerType(), stringType()], {additionalItems: booleanType()})).toStrictEqual(additionalItemsSet);
})


const additionalItemsBooleanSet = {
    "type": "array",
    "items": [
      {"type": "integer"},
      {"type": "string"}
    ],
    "additionalItems": false
}

test('additional items boolean test', () => {
    expect(arrayType([integerType(), stringType()], {additionalItems: false})).toStrictEqual(additionalItemsBooleanSet);
})

const unevaluatedItemsSet = {
    "type": "array",
    "prefixItems": [
      { "type": "string" }
    ],
    "allOf": [
      {
        "prefixItems": [
          true,
          { "type": "string" }
        ]
      }
    ],
    "unevaluatedItems": false
}

test('unevaluated items test', () => {
    expect(arrayType(undefined, {prefixItems: [stringType()], allOf: [{prefixItems: [true, stringType()]}], unevaluatedItems: false })).toStrictEqual(unevaluatedItemsSet);
})
