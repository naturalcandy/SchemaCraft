import { NumberTypeFunction } from "./number";
import { StringTypeFunction } from "./string";
import { BooleanTypeFunction } from "./boolean";
import { ArrayTypeFunction } from "./array";
//import { ObjectTypeFunction } from "./object";

export interface SchemaType<T = 'array' | 'number' | 'object' | 'string'> {
    type?: T;
    not?: SchemaType;
    if?: SchemaType;
    then?: SchemaType;
    else?: SchemaType;
    anyOf?: SchemaType[];
    oneOf?: SchemaType[];
    allOf?: SchemaType[];
}
