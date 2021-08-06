import { WinsAnalysis } from './classes/Analyzers';
import { FootballMatches } from './classes/FootballMatches';
import { ConsoleReport, HTMLReport } from './classes/Reporters';
import { Summary } from './classes/Sumarry';

const matches = new FootballMatches('football.csv');
matches.read();

Summary.winsAnalysisWithHtmlReport('Man United', matches.data);
Summary.winsAnalysisWithHtmlReport('Man City', matches.data);
Summary.winsAnalysisWithHtmlReport('PSG', matches.data);
Summary.winsAnalysisWithHtmlReport('Crystal Palace', matches.data);
