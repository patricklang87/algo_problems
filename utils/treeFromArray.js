const arr = [3,5,1,6,2,0,8,null,null,7,4];

class TreeNode {
    constructor (val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const treeFromArray = (arr, i) => {
    if (typeof arr[i] !== "number") return null; 
    const left = treeFromArray(arr, 2 * i + 1);
    const right = treeFromArray(arr, 2 * i + 2); 
    const node = new TreeNode(arr[i], left, right);
    return node;
}

const root = treeFromArray(arr, 0);

const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    dfs(root.right);
}

dfs(root);

module.exports = treeFromArray;
