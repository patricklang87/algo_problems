const s1 = "ab"
const s2 = "eidibaooooor";

const checkInclusion = (s1, s2) => {
    let mapOne = new Map();
    let mapTwo = new Map();
    let i = 0;
    let j = 0;

    const addToMap = (key, map) => {
        if (!map.has(key)) {
            map.set(key, 1)
        } else {
            map.set(key, map.get(key) + 1)
        }
    }

    const check = (mapOne, mapTwo) => {
        let res = true
        for (let [key, mapOneValue] of mapOne) {
            if (!mapTwo.has(key) || mapOneValue !== mapTwo.get(key)) {
                
                res = false;
                break;
            }
        }
        return res
    }

    for (let val of s1) {
        addToMap(val, mapOne)
    }

    while (j < s1.length) {
        addToMap(s2[j], mapTwo);
        j++
    }

    console.log("mapTwo")
    for (let [key, val] of mapTwo) {
        console.log(key, val)
    }

    if (check(mapOne, mapTwo)) return true;

    while (j < s2.length) {


        mapTwo.set(s2[i], mapTwo.get(s2[i]) - 1);
 
        addToMap(s2[j], mapTwo)

        i++;
        j++;

        console.log("mapOne")
            for (let [key, val] of mapOne) {
                console.log(key, val)
            }
            console.log("mapTwo")
            for (let [key, val] of mapTwo) {
                console.log(key, val)
            }

 


        if (check(mapOne, mapTwo)) return true;
    }

    return false;
}

console.log(checkInclusion("ab", "eidboaoo"))