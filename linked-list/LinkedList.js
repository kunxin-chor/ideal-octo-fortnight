
const Node = require('./Node');
class LinkedList {
    head = null; // if this.head is null, then the list is empty
    add(newData) {
        let newNode = new Node(newData);

        // if the linked list is empty, this new node
        // becomes the head
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            // stop at the last node
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertAt(newData, index) {
        let newNode = new Node(newData);
        if (index != 0) {
            let current = this.head;
            for (let i =0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        } else {
            // if we are inserting at the head
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    display() {
        let current = this.head;
        // stop at the null
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    deleteAt(index) {
       
        if (index != 0) {
            let current = this.head;
            for (let i =0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
            
           

        } else {
            // deleting the first node
            let oldHead = this.head;
            this.head = oldHead.next;
            oldHead = null;
        }
    }

    getAt(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }
 
    length() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

module.exports = LinkedList;