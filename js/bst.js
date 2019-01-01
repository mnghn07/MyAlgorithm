class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }
        if (this.data < data && this.right) {
            return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }

    //remove a node in bst, replace a node with values on the left or right
    remove(data) {
        let node = this.contains(data);
        if (node) {
            if (!node.left && !node.right) {
                node.data = null;
            } else if (!node.right) {
                node.data = node.left.data;
            } else if (!node.left) {
                node.data = node.right.data;
            } else {
                node.data = node.left.data;
            }
        } else {
            return null;
        }
    }
}

module.exports = Node;