import { BubbleSorter } from '.';
import { SortableCollection } from './interfaces';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

class LinkedList extends BubbleSorter implements SortableCollection {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error(
        `Can not access node at ${index}: Linked list is empty. `
      );
    }
    let pointer = 0;
    let node: Node | null = this.head;
    while (node) {
      if (pointer === index) {
        return node;
      }
      pointer++;
      node = node.next;
    }
    throw new Error('index out of bounds.');
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('Empty list.');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (this.compare(leftIndex, rightIndex)) {
      const leftNode = this.at(leftIndex).data;
      this.at(leftIndex).data = this.at(rightIndex).data;
      this.at(rightIndex).data = leftNode;
    }
  }
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

export { LinkedList };
