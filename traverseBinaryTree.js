// depth first search
const dfs = (node) => {
    if (!node) return;

    // generally code goes here
    console.log(node.val);

    dfs(node.left);
    dfs(node.right);
}


// breadth first search
const bfs = (node) => {
    if (!node) return;
    let queue = [node];

    while (queue.length) {
        const nextQueue = [];
        queue.forEach((node) => {
            // generally code goes here
            console.log(node.value)
            if (node.left) {
                nextQueue.push(node.left)
            }
            if (node.right) {
                nextQueue.push(node.right)
            }
        });
        queue = nextQueue;
    }
}

// Binary Search Tree
// operations can be done in O(log n)
// an inorder DFS traversal prioritizing left before right on a BST will handle the nodes in sorted order.
const bstInorderTraversal = (node) => {
    if (!node) return;

    console.log(node.value)
    bstInorderTraversal(node.left);
    bstInorderTraversal(node.right);
}


// Leetcode 701 insert into Binary Search Tree
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const insertIntoBST = (root, value) => {
    const newNode = new TreeNode(value);
    if (!root) return newNode;

    let curr = root;
    let prev = null;
    
    while (curr) {
        if (val > curr.val) {
            prev = curr;
            curr = curr.right
        } else {
            prev = curr;
            curr = curr.left
        }
    }

    if (val < prev.val) prev.left = newNode;
    else prev.right = newNode;

return root;
}