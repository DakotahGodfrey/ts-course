"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var teamWinsAtHome = matches.filter(function (match) { return match.homeTeam === _this.team && match.winner === 'H'; });
        var teamWinsAway = matches.filter(function (match) { return match.awayTeam === _this.team && match.winner === 'A'; });
        var totalWins = teamWinsAtHome.length + teamWinsAway.length;
        return "Team: " + this.team + " won " + totalWins + " matches.";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
