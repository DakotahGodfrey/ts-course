"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report, team) {
        var html = "<div><h1>Analysis Report</h1> <p>" + report + "</p></div>";
        fs_1.default.writeFileSync("reports/" + team.replace(' ', '_') + ".html", html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
