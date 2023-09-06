import { PositiveIntegerError } from "./errors";
import { SchemaType } from "./schema";
import { numberType } from "./number";
import { stringType } from "./string";

// prefixItems was a newly added field present in Draft 2020-12 onward. 

type integer = number;
type PositiveInteger = number;

export interface ArrayTypeOptions extends SchemaType {
    minItems?: integer;
    maxItems?: integer;
    uniqueItems?: boolean;
    contains?: SchemaType;
    minContains?: PositiveInteger;
    maxContains?: PositiveInteger;
    items?: SchemaType | SchemaType[];
    additionalItems?: SchemaType;
    prefixItems?: SchemaType[];
    unevaluatedItems?: boolean;
};

export type ArrayTypeFunction = (
    items?: SchemaType | SchemaType[],
    options?: Omit<ArrayTypeOptions, 'items'>
  ) => {
    type: 'array';
    items?: SchemaType | SchemaType[];
    additionalItems?: SchemaType;
    prefixItems?: SchemaType[];   // Draft 2020-12
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    contains?: SchemaType;
    minContains?: number;
    maxContains?: number;
    unevaluatedItems?: boolean;
};

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
