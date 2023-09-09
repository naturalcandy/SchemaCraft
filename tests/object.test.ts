import { objectType } from "../src/core/object";
import { stringType } from "../src/core/string";
import { integerType } from "../src/core/integer";
//unit tests for objectType and its supported metadata

const empty = {
    "type": "object"
}
test('no metadata', () => {
    expect(objectType()).toStrictEqual(empty);
})

const propertiesSetEmpty = {
    "type": "object",
    "properties": {
        "type": "string"
    }
}
test('empty properties test', () => {
    expect(objectType(stringType(), undefined)).toStrictEqual(propertiesSetEmpty);
})


const propertiesSetNonEmpty = {
    "type": "object",
    "properties": {
        "someString" : {
            "type": "string"
        }
    }
}

test('non empty properties test', () => {
    expect(objectType({someString: stringType()})).toStrictEqual(propertiesSetNonEmpty);
})

const requiredSet = {
    "type": "object",
    "properties": {
        "someString" : {
            "type": "string"
        }
    },
    "required": ["someString"]
}

test('required test', () => {
    expect(objectType({someString: stringType()}, {required: ["someString"]})).toStrictEqual(requiredSet);
})


const dependantSchemasSet = {
    "type": "object",
    "dependentSchemas": {
      "c": {
        "type": "object",
        "properties": {
          "b": {
            "type": "string"
          }
        }     
      }
    }
}

const functionalDependantSchema = objectType(undefined, {
    dependentSchemas: {
        c: objectType({
            b: stringType()
        })
    }
});

test('dependant schema test', () => {
    expect(functionalDependantSchema).toStrictEqual(dependantSchemasSet);
})

const dependantRequiredSet = {
    "type": "object",
    "dependentRequired": {
      "a": ["b", "c"]
    }
}

test('dependant required test', () => {
    expect(objectType(undefined, {dependentRequired: {"a" : ["b", "c"]} })).toStrictEqual(dependantRequiredSet);
})

const minPropertiesSet = {
    "type": "object",
    "minProperties" : 2
}

test('min properties  test', () => {
    expect(objectType(undefined, {minProperties: 2})).toStrictEqual(minPropertiesSet);
})


const maxPropertiesSet = {
    "type": "object",
    "maxProperties" : 2
}

test('min properties  test', () => {
    expect(objectType(undefined, {maxProperties: 2})).toStrictEqual(maxPropertiesSet);
})


const propertyNamesSet = {
    "type": "object",
    "propertyNames": {
      "type": "string",
      "minLength": 2
    }
}

test('property names test', () => {
    expect(objectType(undefined, {propertyNames: stringType({minLength: 2})})).toStrictEqual(propertyNamesSet);
})

const patternPropertiesSet = {
    "type": "object",
    "patternProperties": {
      "^str-": {
        "type": "string"
      },
      "^int-": {
        "type": "integer"
      }
    }
}
const functionalPatternProperties = objectType(undefined, {
    patternProperties: {
        "^str-": stringType(),
        "^int-": integerType() 
    }
});

test('pattern properties test', () => {
    expect(functionalPatternProperties).toStrictEqual(patternPropertiesSet);
})

const additionalPropertiesSet = {
    "type": "object",
    "additionalProperties": {
      "type": "string"
    }
}
test('additional properties test', () => {
    expect(objectType(undefined, {additionalProperties : stringType()})).toStrictEqual(additionalPropertiesSet);
})

const additionalPropertiesBoolSet = {
    "type": "object",
    "additionalProperties": false
}
test('additional properties boolean test', () => {
    expect(objectType(undefined, {additionalProperties : false})).toStrictEqual(additionalPropertiesBoolSet);
})

const unevaluatedPropertiesSet = {
    "type": "object",
    "properties": {
      "foo": {"type": "string"}
    },
    "allOf": [
      {
        "properties": {
            "bar": {"type": "string"}
        }
      }
    ],
  
    "unevaluatedProperties": false
}
const functionalUnevaluatedProperties = objectType({foo: stringType()}, {unevaluatedProperties: false, allOf: [{properties:{bar: stringType()}}]})

test('unevaluted properties set  test', () => {
    expect(functionalUnevaluatedProperties).toStrictEqual(unevaluatedPropertiesSet);
})
