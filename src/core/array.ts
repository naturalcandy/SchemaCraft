import { PositiveIntegerError } from "./errors";
import { SchemaType } from "./schema";
import { numberType } from "./number";
import { stringType } from "./string";

// prefixItems was a newly added field present in Draft 2020-12 onward. 



export interface ArrayTypeOptions extends SchemaType<'array'> {
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    contains?: SchemaType;
    minContains?: number;
    maxContains?: number;
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

