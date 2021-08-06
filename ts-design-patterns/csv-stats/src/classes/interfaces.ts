interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: string;
  referee: string;
}

interface Analyzer {
  run(matches: {}[]): string;
}

interface OutputTarget {
  print(report: string, team: string): void;
}

export { Match, Analyzer, OutputTarget };
