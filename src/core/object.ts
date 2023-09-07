import { SchemaType } from "./schema";

/**
 * @module ObjectType
 * This module provides the foundational type and functions for creating object-based JSON schemas.
 */


type integer = number;

/**
 * Represents the options for an object-based JSON schema.
 * 
 * 
 * @property properties - A record of property names to their respective schema types.
 * @property required - An array of property names that are required.
 * @property dependentSchemas - An object where property values can be objects representing valid JSON schemas.
 * @property dependentRequired - An object where property values are arrays of strings representing property names.
 * @property minProperties - Minimum number of properties the object should have.
 * @property maxProperties - Maximum number of properties the object can have.
 * @property propertyNames - Schema for the property names of the object.
 * @property patternProperties - An object representing patterns for properties.
 * @property additionalProperties - Either a boolean indicating if additional properties are allowed, or a schema for additional properties.
 * @property unevaluatedProperties - Boolean indicating if properties not covered by `properties` or `patternProperties` should be allowed.
 */
export interface ObjectTypeOptions extends SchemaType<'object'> {
    properties? : Record<string, SchemaType>;
    required? : string[];
    dependentSchemas?: Record<string, SchemaType>; // property values can be objects representing valid json schemas,
    dependentRequired?: Record<string, string[]>; //value of this keyword must be an object, property values are arrays of strings representing property names,
    minProperties? : integer;
    maxProperties? : integer;
    propertyNames? : SchemaType; 
    patternProperties? : Record<string, SchemaType>;
    additionalProperties? : boolean | SchemaType;
    unevaluatedProperties? : boolean;

};

/**
 * Function type for creating an object-based JSON schema.
 * 
 * @param properties - A record of property names to their respective schema types.
 * @param options - Additional options for the object schema.
 * 
 * @returns A JSON schema for an object.
 */
export type ObjectTypeFunction = (
    properties?: Record<string, SchemaType>,
    options?: Omit<ObjectTypeOptions, 'properties'>,
) => {
    type: 'object';
    properties? : Record<string, SchemaType>;
    required? : string[];
    dependentSchemas?: Record<string, SchemaType>; 
    dependentRequired?: Record<string, string[]>;
    minProperties? : integer;
    maxProperties? : integer;
    propertyNames? : SchemaType; 
    patternProperties? : Record<string, SchemaType>;
    additionalProperties? : boolean | SchemaType;
    unevaluatedProperties? : boolean;
};

/**
 * Creates an object-based JSON schema.
 * 
 * @function
 * @param properties - A record of property names to their respective schema types.
 * @param options - Additional options for the object schema.
 * 
 * @returns A JSON schema for an object.
 */
export const objectType: ObjectTypeFunction = (properties, options = {}) => {
    if  (properties === undefined){
        return {
            type: 'object',
            ...options
        }
    }
    return {
        type: 'object',
        properties,
        ...options
    };

}