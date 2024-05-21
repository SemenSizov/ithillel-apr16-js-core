function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]



const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

function add(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(add(...newNumbers)); // 6