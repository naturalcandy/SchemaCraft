"use strict";
//errors to capture broken schema invariants at compile time
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositiveIntegerError = exports.StrictlyPositiveNumberError = void 0;
//number must be a number strictly greater than zero
var StrictlyPositiveNumberError = /** @class */ (function (_super) {
    __extends(StrictlyPositiveNumberError, _super);
    function StrictlyPositiveNumberError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "StrictlyPositiveNumberError";
        return _this;
    }
    return StrictlyPositiveNumberError;
}(Error));
exports.StrictlyPositiveNumberError = StrictlyPositiveNumberError;
//must be a positive integer (zero inclusive)
var PositiveIntegerError = /** @class */ (function (_super) {
    __extends(PositiveIntegerError, _super);
    function PositiveIntegerError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "minItemsError";
        return _this;
    }
    return PositiveIntegerError;
}(Error));
exports.PositiveIntegerError = PositiveIntegerError;
