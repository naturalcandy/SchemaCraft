import { arrayType } from "../src/core/array";
import { stringType } from "../src/core/string";
import { objectType } from "../src/core/object";
import { SchemaType } from "../src/core/schema";
import { numberType } from "../src/core/number";

const Ajv = require("ajv");
const ajv = new Ajv();

const digitalProductSchema  = objectType({
    fileType: stringType()
});

const physicalProductSchema = objectType({
    weight: numberType({ minimum: 0 })
});

const productSchema = objectType({
    type: stringType(),
    details: (productType : string) => productType === 'digital' ? digitalProductSchema : physicalProductSchema
}, { required: ['type', 'details'] });

const validate = ajv.compile(productSchema);

describe("Schema-Craft Validation", () => {
    test("should validate digital product", () => {
        const digitalProduct = {
            type: "digital",
            details: {
                fileType: "pdf"
            }
        };

        const isValid = validate(digitalProduct);
        expect(isValid).toBe(true);
        if (!isValid) {
            console.error(validate.errors);
        }
    });

    test("should validate physical product", () => {
        const physicalProduct = {
            type: "physical",
            details: {
                weight: 5
            }
        };

        const isValid = validate(physicalProduct);
        expect(isValid).toBe(true);
        if (!isValid) {
            console.error(validate.errors);
        }
    });

    test("should not validate invalid product", () => {
        const invalidProduct = {
            type: "digital",
            details: {}  // missing fileType
        };

        const isValid = validate(invalidProduct);
        expect(isValid).toBe(false);
    });
});
