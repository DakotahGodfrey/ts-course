"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFile = void 0;
var fs_1 = __importDefault(require("fs"));
var CSVFile = /** @class */ (function () {
    function CSVFile(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVFile.prototype.read = function () {
        this.data = this.mapRow(fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); }));
    };
    return CSVFile;
}());
exports.CSVFile = CSVFile;
