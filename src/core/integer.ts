import { NumberTypeOptions } from "./number";
import { SchemaType } from "./schema";


/**
 * @module IntegerType
 * This module provides the foundational type and functions for creating integer-based JSON schemas.
 */


/**
 * Represents the options for an integer-based JSON schema.
 * 
 * @property minimum - Specifies the minimum value for the integer.
 * @property exclusiveMinimum - Specifies an exclusive minimum value for the integer.
 * @property maximum - Specifies the maximum value for the integer.
 * @property exclusiveMaximum - Specifies an exclusive maximum value for the integer.
 */
export interface IntegerTypeOptions extends Omit<NumberTypeOptions, 'type' | 'multipleOf'>, SchemaType<'integer'> {}


/**
 * Function type for generating integer-based JSON schemas.
 * 
 * @param options - Configuration options for the integer schema.
 * @returns A JSON schema object tailored for integers.
 */
export type IntegerTypeFunction = (options?: IntegerTypeOptions) => {
    type: 'integer';
    multipleOf?: 1;
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
};


/**
 * Generates an integer-based JSON schema based on provided options.
 * 
 * @param options - Configuration options for the integer schema.
 * 
 * @returns A JSON schema object tailored for integers.
 */
export const integerType: IntegerTypeFunction = (options: IntegerTypeOptions = {}) => {
    return {
        type: 'integer',
        ...options
    };
};


