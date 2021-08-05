import { SortableCollection } from './interfaces';

abstract class BubbleSorter {
  abstract length: number;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        this.swap(j, j + 1);
      }
    }
  }
}

export { BubbleSorter };
