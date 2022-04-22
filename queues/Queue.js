const LinkedList = require('../linked-list/LinkedList');

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    // 
    enqueue(newData) {
        this.list.add(newData);
    }

    // remove the front of queue
    dequeue() {
        this.list.deleteAt(0);
    }

    // peek is to see what's at the front
    peek() {
        return this.list.getAt(0);
    }
}

module.exports = Queue;