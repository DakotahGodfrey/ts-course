"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSorter = void 0;
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter() {
    }
    BubbleSorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                this.swap(j, j + 1);
            }
        }
    };
    return BubbleSorter;
}());
exports.BubbleSorter = BubbleSorter;
