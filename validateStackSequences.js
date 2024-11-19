const pushed = [1, 2, 3, 4, 5];
const popped = [4, 5, 3, 2, 1];
const pushed2 = [1, 2, 3, 4, 5];
const popped2 = [4, 3, 5, 1, 2];
const pushed3 = [0, 2, 1];
const popped3 = [0, 1, 2];

const validateStackSequences = (pushed, popped) => {
  let idx = 0;
  let stack = [];

  for (let num of pushed) {
    stack.push(num);

    while (stack.length && stack[stack.length - 1] === popped[idx]) {
      stack.pop();
      idx++;
    }
  }

  return !stack.length;
};

console.log(validateStackSequences(pushed, popped));
console.log(validateStackSequences(pushed2, popped2));
console.log(validateStackSequences(pushed3, popped3));
