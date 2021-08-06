import { OutputTarget } from '../interfaces';

class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export { ConsoleReport };
