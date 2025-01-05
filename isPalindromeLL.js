const createListNode = require("./utils/listFromArray");

// const head1 = createListNode([1, 2, 2, 1]);
const head2 = createListNode([1, 2, 5, 5, 2, 1]);


const isPalindrome = function (head) {
    if (!head) return false;
    let fast = head;
    let slow = head;
    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let slow2 = slow.next;
    slow.next = null;
    while (slow2?.next) {
      let temp = slow2;
      slow2 = slow2.next;
      slow2.next = temp;
    }
    let fast2 = head;
    while (slow2 && fast2) {
        console.log(fast2.val, slow2.val)
      if (slow2.val != fast2.val) return false;
      slow2 = slow2.next;
      fast2 = fast2.next;
    }
    return true;
};

console.log(isPalindrome(head2))