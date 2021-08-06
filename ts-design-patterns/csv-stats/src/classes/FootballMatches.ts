import { CSVFile } from '.';
import { Match } from './interfaces';

class FootballMatches extends CSVFile {
  constructor(filename: string) {
    super(filename);
  }
  mapRow(row: string[][]): Match[] {
    return row.map((match: string[]) => ({
      date: match[0],
      homeTeam: match[1],
      awayTeam: match[2],
      homeScore: parseFloat(match[3]),
      awayScore: parseFloat(match[4]),
      winner: match[5],
      referee: match[6],
    }));
  }
}

export { FootballMatches };
