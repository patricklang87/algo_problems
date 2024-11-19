const treeFromArray = require("./utils/treeFromArray");

const array = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = treeFromArray(array, 0);



const distanceK = (root, target, k) => {
  let targetNode = null;
  const addParentPointer = (node, parent = null) => {
    if (!node) return;
    if (node.val === target) {
      targetNode = node;
    }

    node.parent = parent;
    addParentPointer(node.left, node);
    addParentPointer(node.right, node);
  };

  addParentPointer(root);

  let ans = [];
  let counter = 0;
  let queue = [targetNode];
  const seen = new Set();

  while (counter < k) {
    let nextQueue = [];
    while (queue.length) {
        const curr = queue.pop();
        seen.add(curr.val);
        if (curr.left && !seen.has(curr.left.val)) nextQueue.push(curr.left);
        if (curr.right && !seen.has(curr.right.val)) nextQueue.push(curr.right);
        if (curr.parent && !seen.has(curr.parent.val)) nextQueue.push(curr.parent);
    }
    queue = nextQueue;
    counter++;
  }
  console.log(queue)
  queue.forEach(item => ans.push(item.val));
  return ans;
};


console.log(distanceK(root, 5 ,2))
