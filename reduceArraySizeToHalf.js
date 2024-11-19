const arr = [9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19];

var minSetSize = function(arr) {
    let toDelete = Math.ceil(arr.length / 2);
    let newMap = new Map();
    for (let int of arr) {
        if (!newMap.has(int)) {
            newMap.set(int, 1)
        } else {
            newMap.set(int, newMap.get(int) + 1)
        }
    }
    let freqs = [];
    let count = 0;
    let deleted = 0;
    for (let [key, value] of newMap) {
        freqs.push(value)
    }
    freqs.sort((a, b) => b - a);
    for (let freq of freqs) {
        count++;
        deleted += freq;
        if (deleted >= toDelete) break;
    }
    return count;
};

console.log(minSetSize(arr));