"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballMatches_1 = require("./classes/FootballMatches");
var Sumarry_1 = require("./classes/Sumarry");
var matches = new FootballMatches_1.FootballMatches('football.csv');
matches.read();
Sumarry_1.Summary.winsAnalysisWithHtmlReport('Man United', matches.data);
Sumarry_1.Summary.winsAnalysisWithHtmlReport('Man City', matches.data);
Sumarry_1.Summary.winsAnalysisWithHtmlReport('PSG', matches.data);
Sumarry_1.Summary.winsAnalysisWithHtmlReport('Crystal Palace', matches.data);
