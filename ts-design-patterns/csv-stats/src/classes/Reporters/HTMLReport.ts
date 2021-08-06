import { OutputTarget } from '../interfaces';
import fs from 'fs';
class HTMLReport implements OutputTarget {
  print(report: string, team: string): void {
    const html = `<div><h1>Analysis Report</h1> <p>${report}</p></div>`;
    fs.writeFileSync(`reports/${team.replace(' ', '_')}.html`, html);
  }
}

export { HTMLReport };
