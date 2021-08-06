import { Analyzer, Match } from '../interfaces';

class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: Match[]): string {
    const teamWinsAtHome = matches.filter(
      (match) => match.homeTeam === this.team && match.winner === 'H'
    );
    const teamWinsAway = matches.filter(
      (match) => match.awayTeam === this.team && match.winner === 'A'
    );
    const totalWins = teamWinsAtHome.length + teamWinsAway.length;
    return `Team: ${this.team} won ${totalWins} matches.`;
  }
}

export { WinsAnalysis };
