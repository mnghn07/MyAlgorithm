class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.insertAt(data,0);
    }

    size(){
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = null;
        let node = this.head;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
        return;
    }

    insertLast_2(data) {
        if (!this.head) {
            this.head = new Node(data);
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data);
    }
    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }

            count++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let count = 0;
        let prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;
    }

    forEach(callback) {
        let node = this.head;
        let count = 0;
        while (node) {
            callback(node, count);
            node = node.next;
            count++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    midpoint() {
        if (!this.head) {
            return;
        }
        let slow = this.head;
        let fast = this.head;
        while (this.head) {
            if (!fast.next || !fast.next.next) {
                return slow;
            }
            slow = this.head.next;
            fast = this.head.next.next;
            this.head = this.head.next;
        }
    }

    circular() {
        if (!this.head) {
            return false;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    fromLast(n) {
        let slow = this.head;
        let fast = this.head;
        while (n > 0) {
            fast = fast.next;
            n--;
        }
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}

module.exports = {Node, LinkedList};