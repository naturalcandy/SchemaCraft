# SchemaCraft

SchemaCraft is a light-weight TypeScript library for simplifying the creation and management of JSON schemas. It's designed with large and nested schemas in mind, offering a programmatic approach for defining complex, dynamic, and highly reusable schemas all the while being very intuitive to read and understand at a glance.

## Core Ideas

Schema-Craft focuses on a couple of core ideas to ensure that the development of JSON Schema's are simple and easy to understand, reagrdless of one's programming experience. Here are a couple of its core ideas:

* **Mirrored Syntax**: Schema-Craft's design closely follows the standard JSON schema structure, ensuring familiarity and ease of adoption.
* **Enhanced Readability**: By encapsulating metadata and reducing verbosity, Schema-Craft makes complex schemas more readable and maintainable.
* **Conditional Logic Integration**: Easily introduce dynamic constructs directly into your schema creation using built-in operations.
* **TypeScript-Driven**: Benefit from TypeScript's strong type-checking to ensure robust and error-free schemas.
* **Functional Approach Under the Hood**: Predictable behavior, easier debugging, and a clean, modular codebase.
* **Modularization and Templates**: Schema-Craft promotes a modular approach, allowing you to break down complex schemas into reusable components. This not only enhances maintainability but also provides a template-driven methodology, ensuring consistency across different parts of your application.

## Example Basic Usage

Here's an example JSON Schema, `universitySchema`, that describes a university system:

```json
{
    "type": "object",
    "properties": {
        "universityNames": { 
            "type": "array", 
            "items": { 
                "type": "string" 
            } 
        },
        "departments": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "departmentNames": { 
                        "type": "array", 
                        "items": { 
                            "type": "string" 
                        } 
                    },
                    "courses": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "courseNames": { 
                                    "type": "array", 
                                    "items": { 
                                        "type": "string" 
                                    } 
                                },
                                "courseCodes": { 
                                    "type": "array", 
                                    "items": { 
                                        "type": "string" 
                                    } 
                                },
                                "professors": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "professorNames": { 
                                                "type": "array", 
                                                "items": { 
                                                    "type": "string" 
                                                } 
                                            },
                                            "tenured": { 
                                                "type": "array", 
                                                "items": { 
                                                    "type": "boolean" 
                                                } 
                                            }
                                        },
                                        "required": ["professorNames", "tenured"]
                                    }
                                },
                                "students": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "studentNames": { 
                                                "type": "array", 
                                                "items": { 
                                                    "type": "string" 
                                                } 
                                            },
                                            "years": { 
                                                "type": "array", 
                                                "items": { 
                                                    "type": "integer", 
                                                    "minimum": 1, 
                                                    "maximum": 4 
                                                } 
                                            }
                                        },
                                        "required": ["studentNames", "years"]
                                    }
                                }
                            },
                            "required": ["courseNames", "courseCodes"]
                        }
                    }
                },
                "required": ["departmentNames"]
            }
        }
    },
    "required": ["universityNames"]
}
```

Now using `schema-craft`, we can define a programmatic way to write this Schema. During runtime our schema object `universitySchema` is evaluated to the actual JSON Schema we defined above.

```typescript
const professorSchema = objectType({
    professorName: stringType(),
    tenured: booleanType()
}, { required: ['professorName', 'tenured'] });

const studentSchema = objectType({
    studentName: stringType(),
    year: numberType({ minimum: 1, maximum: 4 })
}, { required: ['studentName', 'year'] });

const courseSchema = objectType({
    courseName: stringType(),
    courseCode: stringType(),
    professors: arrayType(professorSchema),
    students: arrayType(studentSchema)
}, { required: ['courseName', 'courseCode'] });

const departmentSchema = objectType({
    departmentName: stringType(),
    courses: arrayType(courseSchema)
}, { required: ['departmentName'] });

const universitySchema = objectType({
    universityName: stringType(),
    departments: arrayType(departmentSchema)
}, { required: ['universityName'] });
```

## Example Dynamic Schema Generation

Consider the task of defining a schema for a product. The product can be of two types: `digital` or `physical`. Depending on its type, the schema should adapt to have distinct properties. Here's one way Schema-Craft facilitates this:

```typescript
const digitalProductSchema = objectType({
    fileType: stringType()
});

const physicalProductSchema = objectType({
    weight: numberType({ minimum: 0 })
});

const productSchema = objectType({
    type: stringType(),
    details: (productType: string) => productType === 'digital' ? digitalProductSchema : physicalProductSchema
}, { required: ['type', 'details'] });
```

With Schema-Craft's dynamic schema generation, we achieve a balance between modularity and clarity. For comparison, the equivalent JSON schema is:

```json
{
    "type": "object",
    "properties": {
        "type": { "type": "string" }
    },
    "required": ["type"],
    "if": {
        "properties": {
            "type": { "const": "digital" }
        }
    },
    "then": {
        "properties": {
            "details": {
                "type": "object",
                "properties": {
                    "fileType": { "type": "string" }
                },
                "required": ["fileType"]
            }
        }
    },
    "else": {
        "properties": {
            "details": {
                "type": "object",
                "properties": {
                    "weight": { "type": "number", "minimum": 0 }
                },
                "required": ["weight"]
            }
        }
    }
}
```

Schema-Craft supports all conditional keyword properties inherent to JSON Schema. This additional capability just ensures that developers can articulate intricate logic to write generic Schemas without succumbing to excessive verbosity.
