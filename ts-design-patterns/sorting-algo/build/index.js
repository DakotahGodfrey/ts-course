"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./classes/CharactersCollection");
var LinkedList_1 = require("./classes/LinkedList");
var NumbersCollection_1 = require("./classes/NumbersCollection");
var myNums = new NumbersCollection_1.NumbersCollection([-1, 0, 3, 5, 10, 9, -3]);
var myString = new CharactersCollection_1.CharactersCollection('Supercalifragilisticexpialidocious');
var linkedList = new LinkedList_1.LinkedList();
for (var i = 0; i < myNums.data.length; i++) {
    linkedList.add(myNums.data[i]);
}
linkedList.print();
myString.sort();
myNums.sort();
linkedList.print();
