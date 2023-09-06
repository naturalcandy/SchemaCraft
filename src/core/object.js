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
exports.objectType = void 0;
var errors_1 = require("./errors");
;
var objectType = function (properties, options) {
    if (options === void 0) { options = {}; }
    if (options.minProperties !== undefined && options.minProperties <= 0) {
        throw new errors_1.PositiveIntegerError("minProperties must be a non-negative integer.");
    }
    if (options.maxProperties !== undefined && options.maxProperties <= 0) {
        throw new errors_1.PositiveIntegerError("maxProperties must be a non-negative integer.");
    }
    if (properties === undefined) {
        return __assign({ type: 'object' }, options);
    }
    return __assign({ type: 'object', properties: properties }, options);
};
exports.objectType = objectType;
var test1 = (0, exports.objectType)();
console.log(test1);
