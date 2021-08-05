"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (row) { return row.split(','); })
    .map(function (game) { return ({
    date: game[0],
    homeTeam: game[1],
    awayTeam: game[2],
    homeScore: parseFloat(game[3]),
    awayScore: parseFloat(game[4]),
    gameWinner: game[5],
    referee: game[6],
}); });
var findTeamWinsAtHome = function (matches, team) {
    return matches.filter(function (match) { return match.homeTeam === team && match.gameWinner === 'H'; });
};
var findTeamWinsAway = function (matches, team) {
    return matches.filter(function (match) { return match.homeTeam === team && match.gameWinner === 'A'; });
};
var manUnitedWinsAtHome = findTeamWinsAtHome(matches, 'Man United');
var manUnitedWinsAway = findTeamWinsAway(matches, 'Man United');
console.log();
