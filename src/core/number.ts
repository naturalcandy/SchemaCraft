import { StrictlyPositiveNumberError } from './errors';
import { SchemaType } from "./schema";


export interface NumberTypeOptions extends SchemaType  {
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: number;
};

export type StrictlyPositiveNumber = number;

export type NumberTypeFunction = (options?: NumberTypeOptions) => {
    type: 'number';
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: number;
};
  
export const numberType: NumberTypeFunction = (options: NumberTypeOptions = {}) => {

    return {
        type: 'number',
        ...options
    };
};
  

