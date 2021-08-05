import fs from 'fs';
interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  gameWinner: string;
  referee: string;
}
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string) => row.split(','))
  .map((game: string[]) => ({
    date: game[0],
    homeTeam: game[1],
    awayTeam: game[2],
    homeScore: parseFloat(game[3]),
    awayScore: parseFloat(game[4]),
    gameWinner: game[5],
    referee: game[6],
  }));

const findTeamWinsAtHome = (matches: Match[], team: string): Match[] =>
  matches.filter(
    (match) => match.homeTeam === team && match.gameWinner === 'H'
  );
const findTeamWinsAway = (matches: Match[], team: string): Match[] =>
  matches.filter(
    (match) => match.homeTeam === team && match.gameWinner === 'A'
  );

const manUnitedWinsAtHome = findTeamWinsAtHome(matches, 'Man United');
const manUnitedWinsAway = findTeamWinsAway(matches, 'Man United');

console.log();
