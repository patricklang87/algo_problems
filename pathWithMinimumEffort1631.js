// binary search set in graph

const heights = [[1,2,2],[3,8,2],[5,3,5]]

const minimumEffortPath = (heights) => {
    let valid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n; 
    }

    const check = effort => {
        let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let seen = [];
        for (let i =0; i < m; i++) {
            seen.push(new Array(n).fill(false));
        }

        seen[0][0] = true;
        let stack = [[0, 0]];

        while (stack.length) {
            const [row, col] = stack.pop();
            if (row == m - 1 && col == n - 1) {
                return true;
            }

            for (const [dRow, dCol] of directions) {
                let nextRow = row + dRow;
                let nextCol = col + dCol;
                if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    if (Math.abs(heights[nextRow][nextCol] - heights[row][col]) <= effort) {
                        seen[nextRow][nextCol] = true;
                        stack.push([nextRow, nextCol]);
                    }
                }
            }
        }
        return false;
    }

    const m = heights.length;
    const n = heights[0].length;
    let left = 0;
    let right = 0;
    for (const arr of heights) {
        right = Math.max(right, Math.max(...arr))
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return left;
}

console.log(minimumEffortPath(heights))