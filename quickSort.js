// const array = [-6, 20, 8, -2, 4];
// const array = [
//   5705, 27853, 5707, 38927, 5709, 27855, 5711, 49827, 5713, 27857, 5715, 38929,
//   5717, 27859, 5719, 44465, 5721, 27861, 5723, 38931, 5725, 27863, 5727, 47233,
//   5729, 27865, 5731, 38933, 5733, 27867, 5735, 44467, 5737, 27869, 5739, 38935,
//   5741, 27871, 5743, 48617, 5745, 27873, 5747, 38937, 5749, 27875, 5751, 44469,
//   5753, 27877, 5755, 38939, 5757, 27879, 5759, 47235, 5761, 27881, 5763, 38941,
//   5765, 27883, 5767, 44471, 5769, 27885, 5771, 38943, 5773, 27887, 5775, 49309,
//   5777, 27889, 5779, 38945, 5781, 27891, 5783, 44473, 5785, 27893, 5787, 38947,
//   5789, 27895, 5791, 47237, 5793, 27897, 5795, 38949, 5797, 27899, 5799, 44475,
//   5801, 27901, 5803, 38951, 5805, 27903, 5807, 48619, 5809, 27905, 5811, 38953,
//   5813, 27907, 5815, 44477, 5817, 27909, 5819, 38955, 5821, 27911, 5823, 47239,
//   5825, 27913, 5827, 38957, 5829, 27915, 5831, 44479, 5833, 27917, 5835, 38959,
//   5837, 27919, 5839, 49655, 5841, 27921, 5843, 38961, 5845, 27923, 5847, 44481,
//   5849, 27925, 5851, 38963, 5853, 27927, 5855, 47241, 5857, 27929, 5859, 38965,
//   5861, 27931, 5863, 44483, 5865, 27933, 5867, 38967, 5869, 27935, 5871, 48621,
//   5873, 27937, 5875, 38969, 5877, 27939, 5879, 44485, 5881, 27941, 5883, 38971,
//   5885, 27943, 5887, 47243, 5889, 27945, 5891, 38973, 5893, 27947, 5895, 44487,
//   5897, 27949, 5899, 38975, 5901, 27951, 5903, 49311, 5905, 27953, 5907, 38977,
//   5909, 27955, 5911, 44489, 5913, 27957, 5915, 38979, 5917, 27959, 5919, 47245,
//   5921, 27961, 5923, 38981, 5925, 27963, 5927, 44491, 5929, 27965, 5931, 38983,
//   5933, 27967, 5935, 48623, 5937, 27969, 5939, 38985, 5941, 27971, 5943, 44493,
//   5945, 27973, 5947, 38987, 5949, 27975, 5951, 47247, 5953, 27977, 5955,
// ];
const array = [5, 1, 1, 2, 0, 0];
const array2 = [-100, -99, -97, 40, 32, 3, 3, 3, 3, 3, 32, 1903, 32, -54];
// const quickSort = (arr) => {
//     if (arr.length < 2) return arr;
//     let pivot = arr.pop();
//     let leftArr = [];
//     let rightArr = [];
//     while (arr.length) {
//         let curr = arr.pop();
//         if (curr < pivot) leftArr.push(curr);
//         else rightArr.push(curr);
//     }
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// const quickSort = (arr) => {
//   if (arr.length < 2) return arr;
//   let pivot = Math.floor((arr.length - 1) / 2);
//   let leftArr = [];
//   let rightArr = [];
//   arr.forEach((item, ind) => {
//     if (ind !== pivot) {
//       if (item < arr[pivot]) {
//         leftArr.push(item);
//       } else {
//         rightArr.push(item);
//       }
//     }
//   });

//   return [...quickSort(leftArr), arr[pivot], ...quickSort(rightArr)];
// };


const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let left = [];
  let right = [];
  let pivot = arr.shift();
  while (arr.length > 0) {
    if (arr[0] < pivot) {
      left.push(arr.shift());
    } else {
      right.push(arr.shift());
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));
console.log(quickSort(array2));

