// https://leetcode.com/problems/odd-even-linked-list/
const listFromArray = require("./utils/listFromArray");
const head = listFromArray([1, 2, 3, 4, 5]);

// var oddEvenList = function (head) {
//   if (!head || !head.next || !head.next.next) return head;
//   let currOdd = head;
//   let evenHead = head.next;
//   let currEven = head.next;
//   let curr = head.next.next;
//   let count = 1;
//   while (curr) {
//     if (count % 2 != 0) {
//       currOdd.next = curr;
//       currOdd = currOdd.next;
//     } else {
//       currEven.next = curr;
//       currEven = currEven.next;
//     }
//     count++;
//     curr = curr.next;
//   }
//   currEven.next = null;
//   currOdd.next = evenHead;
//   return head;
// };

const oddEvenList = (head) => {
    if (!head || !head.next || !head.next.next) return head;
    let currOdd = head;
    let currEven = head.next;
    let evenHead = head.next;
    while (currOdd && currOdd.next) {
        currOdd.next = currOdd.next.next;
        currOdd = currOdd.next;
    }
    while (currEven && currEven.next) {
        currEven.next = currEven.next.next
        currEven = currEven.next;
    }
    currOdd.next = evenHead;
    currEven.next = null;
    return head;
}

let curr = oddEvenList(head);
let count = 0;
while (curr && count < 10) {
  console.log(curr.val);
  curr = curr.next;
  count++;
}
