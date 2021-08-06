"use strict";
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
exports.FootballMatches = void 0;
var _1 = require(".");
var FootballMatches = /** @class */ (function (_super) {
    __extends(FootballMatches, _super);
    function FootballMatches(filename) {
        return _super.call(this, filename) || this;
    }
    FootballMatches.prototype.mapRow = function (row) {
        return row.map(function (match) { return ({
            date: match[0],
            homeTeam: match[1],
            awayTeam: match[2],
            homeScore: parseFloat(match[3]),
            awayScore: parseFloat(match[4]),
            winner: match[5],
            referee: match[6],
        }); });
    };
    return FootballMatches;
}(_1.CSVFile));
exports.FootballMatches = FootballMatches;
