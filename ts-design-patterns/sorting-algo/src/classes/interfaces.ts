interface SortableCollection {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
}

export { SortableCollection };
