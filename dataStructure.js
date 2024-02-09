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

function makeAdding(firstNumber) {
  // "first" is scoped within the makeAdding function
  /*   const first = firstNumber; */
  return function resulting(secondNumber) {
    // "second" is scoped within the resulting function
    /*  const second = secondNumber; */
    return firstNumber + secondNumber;
  };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?

const add5 = makeAdding(5);
const add6 = makeAdding(6);
console.log(add6(4)); // logs 7
