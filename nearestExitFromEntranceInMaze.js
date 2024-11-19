const maze = [["."], ["."], ["."], ["."]];

const entrance = [2, 0];

var nearestExit = function (maze, entrance) {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const yMax = maze.length;
  const xMax = maze[0].length;
  const isValid = (y, x) =>
    x >= 0 && y >= 0 && x < xMax && y < yMax && maze[y] && maze[y][x] === ".";
  console.log("e", entrance);
  const isExit = (y, x) => {
    return (
      (x === 0 || y === 0 || y === yMax - 1 || x === xMax - 1) &&
      !(entrance[1] === x && entrance[0] === y)
    );
  };
  const seen = new Set();
  let queue = [entrance];
  let steps = 0;
  while (queue.length) {
    let newQueue = [];
    while (queue.length) {
      const [currY, currX] = queue.pop();
      if (!seen.has([currY, currX].toString())) {
        if (isExit(currY, currX)) return steps;
        seen.add([currY, currX].toString());
        for (let [dY, dX] of directions) {
          if (isValid(currY + dY, currX + dX)) {
            newQueue.push([currY + dY, currX + dX]);
          }
        }
      }
    }
    steps++;
    queue = newQueue;
  }
  return -1;
};

console.log(nearestExit(maze, entrance));
