import fs from 'fs';

abstract class CSVFile {
  constructor(public filename: string) {}
  abstract mapRow(row: string[][]): {}[];
  data: {}[] = [];

  read(): void {
    this.data = this.mapRow(
      fs
        .readFileSync(this.filename, { encoding: 'utf-8' })
        .split('\n')
        .map((row) => row.split(','))
    );
  }
}

export { CSVFile };
