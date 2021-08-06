import { WinsAnalysis } from './classes/Analyzers';
import { FootballMatches } from './classes/FootballMatches';
import { ConsoleReport } from './classes/Reporters';
import { Summary } from './classes/Sumarry';

const matches = new FootballMatches('football.csv');
matches.read();

const manUnitedSummary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

manUnitedSummary.genrateAndPrintReport(matches.data);
