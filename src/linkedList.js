import node from "./node";

function linkedList() {
    let head = null;

    function append(value) {
        if (head === null) {
            head = node(value);
        }
        else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node(value);
        }
    }

    function prepend(value) {
        if (head === null) {
            head = node(value);
        }
        else {
            let temp = head;
            head = node(value);
            head.next = temp;
        }
    }

    function size() {
        let counter = 0;

        let current = head;

        while (current !== null) {
            current = current.next;
            counter++;
        }

        return counter;
    }


    function getHead() { return head; }

    function getTail() {
        let current = head;

        while (current && current.next !== null) {
            current = current.next;

        }
        return current;

    }

    function at(index) {
        let counter = 0;
        let current = head;
        if (index < 0 || typeof index !== 'number') return null;

        while (counter !== index && current !== null) {
            current = current.next;
            counter++;
        }

        return current;
    }

    function pop() {
        let current = head;

        if (head === null) return null;
        if (head.next === null) {
            let poppedNode = head;
            head = null;
            return poppedNode;
        }
        while (current.next.next !== null) {
            current = current.next
        }

        let poppedNode = current.next;
        current.next = null;
        return poppedNode;
    }

    function contains(value) {
        let current = head;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    function find(value) {
        let current = head;
        let counter = 0;
        while (current !== null) {
            if (current.value === value) return counter;
            current = current.next;
            counter++;
        }
        return null;
    }

    function toString() {
        let str = '';
        let current = head;
        while (current !== null) {
            str += `( ${current.value} ) ->`;
            current = current.next;
        }
        str += 'null';
        return str;
    }

    function insertAt(value, index) {
        let current = head;
        let counter = 0;
        let newNode = node(value);

        if (index === 0) {
            newNode.next = head;
            head = newNode;
            return;
        }

        while (current !== null && counter < index - 1) {
            current = current.next;
            counter++;
        }

        if (current === null) {
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    function removeAt(index) {
        let counter = 0;
        let current = head;
        if (index === 0) {
            head = head.next;
            return;
        }

        while (current !== null && counter < index - 1) {
            current = current.next;
            counter++;
        }

        if (current === null || current.next === null) {
            return;
        }

        current.next = current.next.next;

    }

    return { append, prepend, size, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt };

}

export default linkedList;