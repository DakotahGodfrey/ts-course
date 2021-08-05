import { BubbleSorter } from '.';
import { SortableCollection } from './interfaces';

class NumbersCollection extends BubbleSorter implements SortableCollection {
  constructor(public data: number[]) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const leftElement = this.data[leftIndex];
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = leftElement;
    }
  }
}

export { NumbersCollection };
