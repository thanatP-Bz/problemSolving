/* let myLinkList = {
  head: {
    value: 10,
    next: {
      value: 5,
    },
    next: {
      value: 6,
      next: null,
    },
  },
}; */

/* class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(4);
myLinkedList.printList();
console.log(myLinkedList);
 */

/* function Player(name, maker) {
  (this.name = name), (this.maker = maker);

  this.sayName = function () {
    console.log(this.name);
  };

  this.fullName = function (lastName) {
    console.log(this.name, lastName);
  };

  this.sayMaker = function () {
    console.log(this.maker);
  };
}

const playerOne = new Player("Mike", "red");
console.log(playerOne.name, playerOne.maker);

playerOne.sayName();
playerOne.sayMaker();
playerOne.fullName("Teston"); */

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    });
}

const theHobbit = new Book("The Hobbit", "JRR Token", "295", "not read yet");

console.log(theHobbit.info());
