import { SchemaType } from "./schema";


/**
 * @module StringType
 * This module provides the foundational type and functions for creating string-based JSON schemas.
 */

/**
 * Represents the possible content encodings for a string.
 * 
 * @type ContentEncoding
 * 
 * @value 'binary' - Represents binary encoding.
 * @value 'base64' - Represents base64 encoding.
 * @value 'quoted-printable' - Represents quoted-printable encoding.
 */
export type ContentEncoding = 'binary' | 'base64' | 'quoted-printable';


/**
 * Represents the options for a string-based JSON schema.
 * 
 * @extends SchemaType<'string'>
 * 
 * @property pattern - A regular expression pattern that the string should match.
 * @property minLength - Minimum length of the string.
 * @property maxLength - Maximum length of the string.
 * @property contentEncoding - Specifies the content encoding of the string.
 */
export interface StringTypeOptions extends SchemaType<'string'> {
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  contentEncoding?: ContentEncoding;
};

/**
 * Function type for creating a string-based JSON schema.
 * 
 * @param options - Options for the string schema.
 * 
 * @returns A JSON schema for a string.
 */
export type StringTypeFunction = (options?: StringTypeOptions) => {
  type: 'string';
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  contentEncoding?: ContentEncoding;
};


/**
 * Creates a string-based JSON schema.
 * 
 * @param options - Options for the string schema.
 * @returns A JSON schema for a string.
 */
export const stringType: StringTypeFunction = (options: StringTypeOptions = {}) => ({
  type: 'string',
  ...options
});

