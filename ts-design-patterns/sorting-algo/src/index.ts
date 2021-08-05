import { BubbleSorter } from './classes';
import { CharactersCollection } from './classes/CharactersCollection';
import { LinkedList } from './classes/LinkedList';
import { NumbersCollection } from './classes/NumbersCollection';

const myNums = new NumbersCollection([-1, 0, 3, 5, 10, 9, -3]);
const myString = new CharactersCollection('Supercalifragilisticexpialidocious');
const linkedList = new LinkedList();
for (let i = 0; i < myNums.data.length; i++) {
  linkedList.add(myNums.data[i]);
}

linkedList.print();
myString.sort();
myNums.sort();
linkedList.print();
