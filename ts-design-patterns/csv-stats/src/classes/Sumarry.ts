import { WinsAnalysis } from './Analyzers';
import { Analyzer, OutputTarget } from './interfaces';
import { HTMLReport } from './Reporters';

class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
    public teamName: string
  ) {}
  genrateAndPrintReport(matches: {}[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report, this.teamName);
  }
  static winsAnalysisWithHtmlReport(teamName: string, matches: {}[]) {
    return new Summary(
      new WinsAnalysis(teamName),
      new HTMLReport(),
      teamName
    ).genrateAndPrintReport(matches);
  }
}

export { Summary };
