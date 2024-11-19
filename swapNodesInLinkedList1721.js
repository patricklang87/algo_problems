const arrayToList = require("./utils/listFromArray.js");

const array = [1, 2, 3, 4, 5];
let head = arrayToList(array);
console.log(head);

const k = 2;

const swapNodes = (head, k) => {
  let nodeKFromEnd = head;
  let nodeKFromStart = head;


  let count = 1;
  while (count < k) {
    kFromStartPrev = nodeKFromStart;
    nodeKFromStart = nodeKFromStart.next;
    count++;
  }

  let fast = nodeKFromStart;
  
  while (fast.next) {
    kFromEndPrev = nodeKFromEnd;
    nodeKFromEnd = nodeKFromEnd.next;
    fast = fast.next;
  }

  [nodeKFromStart.val, nodeKFromEnd.val] = [nodeKFromEnd.val, nodeKFromStart.val]

  return head;
};

// head = swapNodes(head, k);

head = swapNodes(arrayToList([7,9,6,6,7,8,3,0,9,5]), 5)

let max = 10;
let count = 0;

while (head && count < max) {
  console.log(head.val);
  head = head.next;
  count++;
}
