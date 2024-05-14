const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

console.log(numbers)

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers)

const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber)

const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(firstEvenNumberIndex)


const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers)


const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]
console.log(flatArray)


const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]);
console.log(doubledAndFlattened)