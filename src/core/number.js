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
exports.numberType = void 0;
var errors_1 = require("./errors");
;
var numberType = function (options) {
    if (options === void 0) { options = {}; }
    if (options.multipleOf !== undefined && options.multipleOf <= 0) {
        throw new errors_1.StrictlyPositiveNumberError("'multipleOf' must be a strictly positive number.");
    }
    return __assign({ type: 'number' }, options);
};
exports.numberType = numberType;
