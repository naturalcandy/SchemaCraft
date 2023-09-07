import { StrictlyPositiveNumberError } from './errors';
import { SchemaType } from "./schema";

/**
 * @module NumberSchema
 * This module provides functionalities to create number type JSON schemas.
 */


/**
 * Defines the options for a number schema.
 * 
 * @property minimum - Specifies the minimum value for the number.
 * @property exclusiveMinimum - Specifies that the number should be greater than the minimum value.
 * @property maximum - Specifies the maximum value for the number.
 * @property exclusiveMaximum - Specifies that the number should be less than the maximum value.
 * @property multipleOf - Specifies that the number should be a multiple of a given number.
 */
export interface NumberTypeOptions extends SchemaType<'number'> {
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: number;
  }

/**
 * Represents a strictly positive number.
 */
export type StrictlyPositiveNumber = number;


/**
 * Function type for generating a number schema.
 * 
 * @param options - Options for the number schema.
 * @returns A JSON schema object for a number.
 */
export type NumberTypeFunction = (options?: NumberTypeOptions) => {
    type: 'number';
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: number;
};

/**
 * Generates a number schema.
 * 
 * @param options - Options for the number schema.
 * @returns A JSON schema object for a number.
 */  
export const numberType: NumberTypeFunction = (options: NumberTypeOptions = {}) => {

    return {
        type: 'number',
        ...options
    };
};