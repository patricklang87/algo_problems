// binary search for solution space 875
// const piles = [3,6,7,11], h = 8
// const piles = [1], h = 1
const piles = [1, 1, 1, 999999999], h = 10;


const minEatingSpeed = (piles, h) => {
    piles.sort((a, b) => a - b);

    const calculateEatingTime = (piles, k) => {
        let time = 0;
        piles.forEach(pileSize => {
            let hours = Math.ceil(pileSize / k);
            time += hours
        })
        return time;
    }

    let left = 1;
    let right = piles[piles.length - 1];

    while (left <= right) {
        let k = Math.floor((left + right) / 2);
        let eatingTime = calculateEatingTime(piles, k);
        if (eatingTime <= h) {
            right = k -1
        } else {
            left = k + 1;
        }
    }
    return left;
}

console.log(minEatingSpeed(piles, h));