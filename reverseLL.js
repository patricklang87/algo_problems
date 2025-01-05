const listFromArray = require("./utils/listFromArray")

const head = listFromArray([1, 2, 3, 4, 5, 6]);

const reverseLinkedList = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

let curr = reverseLinkedList(head);
while (curr) {
    console.log(curr);
    curr = curr.next;
}
