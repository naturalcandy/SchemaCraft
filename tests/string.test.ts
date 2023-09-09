import { stringType } from "../src/core/string";

//unit tests for stringType and its supported metadata

const empty = {
    "type": "string"
}
test('no metadata', () => {
    expect(stringType()).toStrictEqual(empty);
})

const minLengthSet = {
    "type": "string",
    "minLength": 3
}
test('min length test', () => {
    expect(stringType({ minLength: 3})).toStrictEqual(minLengthSet);
})

const maxLengthSet = {
    "type": "string",
    "maxLength": 3
}
test('max length test', () => {
    expect(stringType({ maxLength: 3})).toStrictEqual(maxLengthSet);
})

const patternSet = {
    "type": "string",
    "pattern": "^opis/[a-z-]+$"
}
test('pattern test', () => {
    expect(stringType({ pattern: "^opis/[a-z-]+$"})).toStrictEqual(patternSet);
})

const contentEncodingSet = {
    "type": "string",
    "contentEncoding": "base64"
}

test('content enconding test', () => {
    expect(stringType({ contentEncoding: "base64"})).toStrictEqual(contentEncodingSet);
})

const contentMediaTypeSet = {
    "type": "string",
    "contentMediaType": "application/json"
}

test('content media type test', () => {
    expect(stringType({ contentMediaType: "application/json"})).toStrictEqual(contentMediaTypeSet);
})

const contentSchemaSet = {
    "type": "string",
    "contentSchema": {
        "type": "string"
    }
}
test('content schema test', () => {
    expect(stringType({ contentSchema: stringType()})).toStrictEqual(contentSchemaSet);
})

