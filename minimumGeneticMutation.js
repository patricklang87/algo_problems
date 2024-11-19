const startGene = "AACCGGTT"
const endGene = "AACCGGTA"
const bank = ["AACCGGTA"]

var minMutation = function(startGene, endGene, bank) {
    const letters = ["A", "C", "G", "T"];
    const viewed = new Set([startGene]);
    const valid = new Set(bank);
    let count = 0;
    let queue = [startGene];
    while (queue.length) {
        let newQueue = [];
        while (queue.length) {
            let curr = queue.pop();
            if (curr === endGene) return count;
            for (let i = 0; i < curr.length; i++) {
                for (let letter of letters) {
                    let variation = curr.slice(0, i) + letter + curr.slice(i+1)
                    console.log(variation)
                    if (!viewed.has(variation) && valid.has(variation)) {
                        viewed.add(variation);
                        newQueue.push(variation)
                    }
                }
            }
        }
        count++;
        queue = newQueue;
    }
    return -1;
};

console.log(minMutation(startGene, endGene, bank));