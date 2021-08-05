import { BubbleSorter } from '.';
import { SortableCollection } from './interfaces';

class CharactersCollection extends BubbleSorter implements SortableCollection {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const charactersArray = this.data.split('');
      const leftElement = charactersArray[leftIndex];
      charactersArray[leftIndex] = charactersArray[rightIndex];
      charactersArray[rightIndex] = leftElement;
      this.data = charactersArray.join('');
    }
  }
}

export { CharactersCollection };
