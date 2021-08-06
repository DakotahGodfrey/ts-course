import { Analyzer, OutputTarget } from './interfaces';

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  genrateAndPrintReport(matches: {}[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}

export { Summary };
