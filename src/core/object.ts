import { SchemaType } from "./schema";
import { StrictlyPositiveNumberError, PositiveIntegerError } from "./errors";

type integer = number;

export interface ObjectTypeOptions extends SchemaType<'object'> {
    properties? : object;
    required? : string[];
    dependentSchemas?: object; // property values can be objects representing valid json schemas,
    dependentRequired?: object; //value of this keyword must be an object, property values are arrays of strings representing property names,
    minProperties? : integer;
    maxProperties? : integer;
    propertyNames? : SchemaType; 
    patternProperties? : object;
    additionalProperties? : boolean | SchemaType;
    unevaluatedProperties? : boolean;

};

export type ObjectTypeFunction = (
    properties?: object,
    options?: Omit<ObjectTypeOptions, 'properties'>,
) => {
    type: 'object';
    properties? : object;
    required? : string[];
    dependentSchemas?: object; 
    dependentRequired?: object; 
    minProperties? : integer;
    maxProperties? : integer;
    propertyNames? : SchemaType; 
    patternProperties? : object;
    additionalProperties? : boolean | SchemaType;
    unevaluatedProperties? : boolean;
};

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

