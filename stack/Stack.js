const LinkedList = require('../linked-list/LinkedList')

class Stack {


    constructor() {
        this.list = new LinkedList();
    }

    // push is to add new data to the top of the stack
    push(newData) {
        this.list.insertAt(newData, 0);
    }

    // pop is to remove the data from the TOP of the stack
    pop() {
        this.list.deleteAt(0);
    }

    peek() {
        return this.list.getAt(0);
    }
}

module.exports = Stack;