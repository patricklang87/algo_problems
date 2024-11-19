const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

const grid1 = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 1, 0],
];

const grid2 = [[0]];

const grid3 = [[1]];

const grid4 = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 0],
];

const grid5 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 1],
];

const shortestPathBinaryMatrix = (grid) => {
  if (grid[0][0] === 1) return -1;
  let side = grid.length;
  let directions = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  let isValid = (x, y) => {
    return x >= 0 && y >= 0 && x < side && y < side;
  };
  let steps = 0;
  let queue = [[0, 0]];
  while (queue.length) {
    let newQueue = [];
    steps++;
    while (queue.length) {
      let [currX, currY] = queue.pop();
      if (currX === side - 1 && currY === side - 1) return steps;
      grid[currY][currX] = 1;
      for (let [dX, dY] of directions) {
        if (isValid(currX + dX, currY + dY)) {
          if (grid[currY + dY][currX + dX] === 0) {
            newQueue.push([currX + dX, currY + dY]);
          }
        }
      }
    }
    queue = newQueue;
  }
  return -1;
};

console.log(shortestPathBinaryMatrix(grid));
console.log(shortestPathBinaryMatrix(grid1));
console.log(shortestPathBinaryMatrix(grid2));
console.log(shortestPathBinaryMatrix(grid3));
console.log(shortestPathBinaryMatrix(grid4));
console.log(shortestPathBinaryMatrix(grid5));
