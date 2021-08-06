"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Analyzers_1 = require("./Analyzers");
var Reporters_1 = require("./Reporters");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget, teamName) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this.teamName = teamName;
    }
    Summary.prototype.genrateAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report, this.teamName);
    };
    Summary.winsAnalysisWithHtmlReport = function (teamName, matches) {
        return new Summary(new Analyzers_1.WinsAnalysis(teamName), new Reporters_1.HTMLReport(), teamName).genrateAndPrintReport(matches);
    };
    return Summary;
}());
exports.Summary = Summary;
