// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/704/linked-lists/4598/
const listFromArray = require('./utils/listFromArray');
const head = listFromArray([1, 2, 3, 4, 5])

const reverseBetween = (head, left, right) => {
    let count = 1;
    let prev = null;
    let curr = head;
    while (count < left && curr && curr.next) {
        prev = curr;
        curr = curr.next;
        count++;
    }
    let leftLink = prev;
    let rightLink = curr;
    while (count <= right && curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        
        count++;
    }
    if (leftLink) {
        leftLink.next = prev;
    } else {
        head = prev;
    }
        
    rightLink.next = curr;

    return head

}

let curr = reverseBetween(head, 2, 5);
while (curr) {
    console.log(curr.val)
    curr = curr.next;
}