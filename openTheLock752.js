const deadends = ["0201","0101","0102","1212","2002"];
const target = "0202";

const openTheLock = (deadends, target) => {
    let steps = 0;
    let seen = new Set(deadends);
    if (seen.has("0000")) return -1;

    const getNextNums = (curr) => {
        let nextNums = [];
        for (let i = 0; i < 4; i++) {
            let num = Number(curr[i]);
            for (const change of [1, -1]) {
                const newNum = (num + change + 10) % 10;
                const newCombo = curr.slice(0, i) + newNum + curr.slice(i + 1);
                if (!seen.has(newCombo)) nextNums.push(newCombo)
            }
        }
        console.log(nextNums)
        return nextNums;
    }

    let queue = ["0000"];

    while (queue.length) {
        let newQueue = [];
        for (let curr of queue) {
            console.log(curr)
            if (curr === target) return steps;
            seen.add(curr);
            newQueue = [...newQueue, ...getNextNums(curr)]
        }
        steps++;
        queue = newQueue;
    }
    return -1;

}

console.log(openTheLock(deadends, target));