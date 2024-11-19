const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];

const numIslands = (grid) => {
  let ans = 0;
  const hashMap = createHashMap(grid);
  let seen = new Set();

  for (let [key, value] of hashMap) {
    if (!seen.has(key)) {
        console.log("doesnt have this key", key)
        ans++;
        seen.add(key);
        let queue = [...value];
        console.log("q", queue)
        while (queue.length) {
            let curr = queue.pop();
            console.log(curr);
            if (!seen.has(curr)) {
                console.log("has it")
                seen.add(curr)
                let nextKeys = hashMap.get(curr);
                nextKeys.forEach(item => {
                    if (!seen.has(item)) {
                        queue.push(item)
                    }
                })
            }
        }
    }
  }

  return ans;
};

const createHashMap = (arr) => {
    const hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++ ) {
            if (arr[i][j] === "1") {
                let key = [i, j].toString();
                hashMap.set(key, []);
                if (i > 0 && arr[i - 1][j] === "1") {
                    hashMap.get(key).push([i - 1, j].toString())
                }
                if (i < arr.length - 1 && arr[i + 1][j] === "1") {
                    hashMap.get(key).push([i + 1, j].toString())
                }
                if (j > 0 && arr[i][j - 1] === "1") {
                    hashMap.get(key).push([i, j - 1].toString());
                }
                if (j < arr[i].length - 1 && arr[i][j + 1] === "1") {
                    hashMap.get(key).push([i, j + 1].toString())
                }
            }
        }
    }

    return hashMap;
}

// console.log(createHashMap(grid));
// console.log(numIslands(grid));


const numIslandsRecursive = (grid) => {
    let ans = 0;
    let iLength = grid.length;
    let jLength = grid[0].length;
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i === iLength || j === jLength || grid[i][j] != "1") return;
        grid[i][j] = 0;
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i,j+1);
        dfs(i,j-1);
    }

    for (let i =0 ; i < iLength; i++) {
        for (let j = 0; j <jLength; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                ans++
            }
        }
    }
    return ans;
}

console.log(numIslandsRecursive(grid));
console.log(numIslandsRecursive(grid2));