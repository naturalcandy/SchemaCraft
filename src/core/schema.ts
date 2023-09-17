import { NumberTypeFunction, numberType} from "./number";
import { StringTypeFunction, stringType } from "./string";
import { BooleanTypeFunction, booleanType } from "./boolean";
import { ArrayTypeFunction, arrayType } from "./array";
import { objectType } from "./object";
/**
 * @module SchemaType
 * This module provides the foundational type for creating JSON schemas.
 */


/**
 * Represents the core structure of a JSON schema.
 * 
 * @template T - The type of the schema. It can be one of 'array', 'number', 'object', or 'string'.
 * 
 * @property type - Specifies the data type of the schema.
 * @property not - Represents a schema that an instance must not be valid against.
 * @property if - Represents a conditional schema. If an instance is valid against this schema, then it must also be valid against the schema in the 'then' property.
 * @property then - Represents a schema that is used to validate the instance if the 'if' schema is valid.
 * @property else - Represents a schema that is used to validate the instance if the 'if' schema is not valid.
 * @property anyOf - Represents an array of schemas. The instance is valid if it is valid against at least one of the schemas in this array.
 * @property oneOf - Represents an array of schemas. The instance is valid if it is valid against exactly one of the schemas in this array.
 * @property allOf - Represents an array of schemas. The instance is valid if it is valid against all of the schemas in this array.
 */
export interface SchemaType<T = 'array' | 'number' | 'object' | 'string' | 'integer' | 'null' | 'boolean'> {
    type?: T;
    not?: SchemaType;
    if?: SchemaType;
    then?: SchemaType;
    else?: SchemaType;
    anyOf?: SchemaType[] | object;
    oneOf?: SchemaType[] | object;
    allOf?: SchemaType[] | object;
}

