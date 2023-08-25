import { StrictlyPositiveNumberError } from './errors';

export type NumberTypeOptions = {
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: StrictlyPositiveNumber;
};

export type StrictlyPositiveNumber = number;

export type NumberTypeFunction = (options?: NumberTypeOptions) => {
    type: 'number';
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
    multipleOf?: StrictlyPositiveNumber;
};
  
export const numberType: NumberTypeFunction = (options: NumberTypeOptions = {}) => {
    if (options.multipleOf !== undefined && options.multipleOf <= 0) {
        console.error('Error: multipleOf must be a strictly positive number.');
        throw new StrictlyPositiveNumberError("'multipleOf' must be a strictly positive number."); 
    }
    return {
        type: 'number',
        ...options
    };
};
  
const correct = numberType()
const incorrect = numberType({ minimum: 0, multipleOf: -2})

console.log(correct)
console.log(incorrect)
