// const nums = [1,3,5,6];
// const target = 5;
const nums = [1,3,5,6]
const target = 2

const binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    // if target not found, return point at which it would be inserted
    return left;

    // if target not found, return -1
    // return -1;
};

console.log(binarySearch(nums, target));