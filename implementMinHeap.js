// left child: i * 2
// right child: i * 2 + 1
// parent: Math.floor(i / 2)

const minHeap = function () {
  let heap = [null];

  this.getHeap = () => heap;

  this.insert = (num) => {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = () => {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  this.insertMultiple = (arr) => {
    arr.forEach(num => this.insert(num))
  }

  this.sort = () => {
    let result = new Array();
    while (heap.length > 1) {
        result.push(this.remove())
    }
    return result;
  }
};

const newHeap = new minHeap();
newHeap.insert(1);
newHeap.insert(101);
newHeap.insert(57);
newHeap.insert(43);

const arr = [32, 54, 322, 56, 90, 45, 30, 78, 125]

console.log(newHeap.getHeap());
console.log(newHeap.remove())
newHeap.insertMultiple(arr)
console.log(newHeap.getHeap())
newHeap.remove()
console.log(newHeap.getHeap())
console.log(newHeap.sort())
console.log(newHeap.getHeap())