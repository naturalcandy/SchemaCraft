export type BooleanTypeFunction = () => {
    type: 'boolean';
};

export const booleanType: BooleanTypeFunction = () => {
    return {
        type: 'boolean'
    };
};