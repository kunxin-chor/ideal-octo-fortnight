class Node {
    data = null;
    next = null;  // refer to the next neighbour in the list
    constructor(data) {
        this.data = data
    }
    getNext() {
        return this.next;
    }
    setNext(nextNode) {
        this.next = nextNode;
    }
    getData() {
        return this.data;
    }
}

module.exports = Node;