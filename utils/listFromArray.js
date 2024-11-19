let array = [1, 2, 3, 4, 5];

class ListNode {
    constructor (val, next) {
        this.val = val;
        this.next = next;
    }
}

const createListNode = (arr, i = 0) => {
    if (i >= arr.length) return null;
    return new ListNode(arr[i], createListNode(arr, i + 1))
}

let head = createListNode(array, 0);

while (head) {
    console.log(head.val);
    head = head.next
}

module.exports = createListNode;