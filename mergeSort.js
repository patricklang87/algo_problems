// merge sort is a "divide and conquer algorithm"
// pass an array to the function
// recursive function
// time complexity: O (n log n)

const arr = [8, 32, 1, 9, 57, - 22, 3, 15, 0, 26, 11];

// const merge = (leftArr, rightArr) => {
//     const sortedArr = [];
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const mergeSort = (arr) => {
//     if (arr.length < 2) {
//         return arr
//     }

//     const mid = Math.floor(arr.length / 2);
//     const leftArr = arr.slice(0, mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// console.log(mergeSort(arr))


//implementing mergeSort again

const merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}





console.log(mergeSort(arr))
