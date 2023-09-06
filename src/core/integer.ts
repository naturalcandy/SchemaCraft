import { NumberTypeOptions } from "./number";

export type IntegerTypeOptions = Omit<NumberTypeOptions, 'multipleOf'>;

/*Captures internal type of 'multipleOf' while omitting it from the returned result.
  Integer is just a number type with multipleOf set to the explicit type of 1*/
export type IntegerTypeFunction = (options?: IntegerTypeOptions) => {
    type: 'integer';
    multipleOf?: 1;
    minimum?: number;
    exclusiveMinimum?: number | boolean;
    maximum?: number;
    exclusiveMaximum?: number | boolean;
};

export const integerType: IntegerTypeFunction = (options: IntegerTypeOptions = {}) => {
    return {
        type: 'integer',
        ...options
    };
};


