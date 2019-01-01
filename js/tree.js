class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    //Breadth-first traversal: start at root, from left to right
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }
    //Depth-first traversal: start at root, down to bottom node
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }

    validate(node, min = null, max = null) {
        if (node.data > max && max !== null) {
            return false;
        }
        if (node.data < min && min !== null) {
            return false;
        }
        if (node.left && !validate(node.left, min, node.data)) {
            return false;
        }
        if (node.right && !validate(node.right, node.data, max)) {
            return false;
        }
        return true;
    }
    levelWidth() {
        const arr = [this.root, 's'];
        let counter = [0];
        while (arr.length > 1) {
            const node = arr.shift();
            if (node === 's') {
                counter.push(0);
                arr.push('s');
            } else {
                arr.push(...node.children);
                counter[counter.length - 1]++;
            }
        }
        return counter;
    }
}

module.exports = { Tree, Node };
