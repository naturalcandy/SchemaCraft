"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayType = void 0;
var errors_1 = require("./errors");
;
var arrayType = function (items, options) {
    if (options === void 0) { options = {}; }
    if (options.minItems !== undefined && options.minItems <= 0) {
        throw new errors_1.PositiveIntegerError("minItems must be a non-negative integer.");
    }
    if (options.maxItems !== undefined && options.maxItems <= 0) {
        throw new errors_1.PositiveIntegerError("maxItems must be a non-negative integer.");
    }
    if (options.minContains !== undefined && options.minContains <= 0) {
        throw new errors_1.PositiveIntegerError("minContains must be a non-negative integer.");
    }
    if (options.maxContains !== undefined && options.maxContains <= 0) {
        throw new errors_1.PositiveIntegerError("maxContains must be a non-negative integer.");
    }
    if (items === undefined) {
        return __assign({ type: 'array' }, options);
    }
    return __assign({ type: 'array', items: items }, options);
};
exports.arrayType = arrayType;
var test1 = (0, exports.arrayType)();
console.log(test1);
