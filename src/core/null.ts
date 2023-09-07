
import { SchemaType } from "./schema";

/**
 * @module NullSchema
 * This module provides functionalities to create null type JSON schemas.
 */


/**
 * Represents a null schema type.
 */
export interface NullTypeOptions extends SchemaType<'null'> {}

/**
 * Function type for generating a null schema.
 * 
 * @returns A JSON schema object for null.
 */
export type NullTypeFunction = () => {
    type: 'null';
};


/**
 * Generates a null schema.
 * 
 * @returns A JSON schema object for null.
 */  
export const nullType: NullTypeFunction = () => {
    return {
        type: 'null'
    };
};