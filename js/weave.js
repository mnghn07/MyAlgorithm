const Queue = require('./queue');

function weave(queueOne,queueTwo) {
    const q = new Queue();

    while(queueOne.peek() || queueTwo.peek()) {
        if(queueOne.peek()){
            q.add(queueOne.remove());
        }
        if(queueTwo.peek()){
            q.add(queueTwo.remove());
        }
    }

    return q;
}