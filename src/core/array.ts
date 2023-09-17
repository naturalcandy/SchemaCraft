import { PositiveIntegerError } from "./errors";
import { SchemaType } from "./schema";
import { numberType } from "./number";
import { stringType } from "./string";

/**
 * @module ArraySchema
 * This module provides functionalities to create array type JSON schemas.
 */



/**
 * Defines the options for an array schema.
 * 
 * @property minItems - Minimum number of items in the array.
 * @property maxItems - Maximum number of items in the array.
 * @property uniqueItems - Specifies if all items in the array should be unique.
 * @property contains - Schema that must be valid for at least one item in the array.
 * @property minContains - Minimum number of items that must match the "contains" schema.
 * @property maxContains - Maximum number of items that can match the "contains" schema.
 * @property items - Schema for the items in the array. Can be a single schema or an array of schemas.
 * @property additionalItems - Schema for additional items in the array.
 * @property prefixItems - Schema for the prefix items (Draft 2020-12).
 * @property unevaluatedItems - Specifies if unevaluated items are allowed.
 */
export interface ArrayTypeOptions extends SchemaType<'array'> {
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    contains?: SchemaType;
    minContains?: number;
    maxContains?: number;
    items?: SchemaType | SchemaType[];
    additionalItems?: boolean | SchemaType;
    prefixItems?: SchemaType[];
    unevaluatedItems?: boolean;
};


/**
 * Function type for generating an array schema.
 * 
 * @param items - The schema or schemas for the items in the array.
 * @param options - Additional options for the array schema.
 * @returns A JSON schema object for an array.
 */
export type ArrayTypeFunction = (
    items?: SchemaType | SchemaType[],
    options?: Omit<ArrayTypeOptions, 'items'>
  ) => {
    type: 'array';
    items?: SchemaType | SchemaType[];
    additionalItems?: boolean | SchemaType;
    prefixItems?: SchemaType[];   // Draft 2020-12
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    contains?: SchemaType;
    minContains?: number;
    maxContains?: number;
    unevaluatedItems?: boolean;
};

/**
 * Generates an array schema.
 * 
 * @param items - The schema or schemas for the items in the array.
 * @param options - Additional options for the array schema.
 * @returns A JSON schema object for an array.
 */
export const arrayType: ArrayTypeFunction = (items, options = {}) => {

    if (items === undefined) {
        return {
            type: 'array',
            ...options
        }
    }
    return {
        type: 'array',
        items,
        ...options
    };

}

