export type NullTypeFunction = () => {
    type: 'null';
};

export const booleanType: NullTypeFunction = () => {
    return {
        type: 'null'
    };
};