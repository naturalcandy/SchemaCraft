import { SchemaType } from './schema';



/**
 * @module BooleanSchema
 * This module provides functionalities to create boolean type JSON schemas.
 */


/**
 * Represents a boolean schema type.
 */
export interface BooleanTypeOptions extends SchemaType<'boolean'> {}


/**
 * Function type for generating a boolean schema.
 * 
 * @returns A JSON schema object for boolean.
 */
export type BooleanTypeFunction = () => {
    type: 'boolean';
};


/**
 * Generates a boolean schema.
 * 
 * @returns A JSON schema object for boolean.
 */  
export const booleanType: BooleanTypeFunction = () => {
    return {
        type: 'boolean'
    };
};