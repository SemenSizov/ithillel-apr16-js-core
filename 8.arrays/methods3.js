// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);


// const numbers = [1, 3, 2, 5, 4, 6];
// numbers.sort()
// console.log(numbers);
// numbers.sort((a,b)=> a > b ? -1 : 1) 
// console.log(numbers);

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

// console.log(fruits.reverse());
// console.log(fruits.some(fruit=> fruit.startsWith('a')))
// console.log(fruits.every(fruit=> fruit.startsWith('a')))

// const hasEvenNumber = numbers.some((number) => number % 2 === 0); 
// const allEvenNumbers = numbers.every((number) => number % 2 === 0); 

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 'a');

const doubledArray = numbers.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue*2)
  return accumulator
}, []);

console.log(doubledArray)
console.log(sum)
//0
// acc = 0, acc = acc + 1, acc === 1
// acc = 'a', acc = 'a' + 1, acc === 'a1'

//1
// acc ='a1', acc = 1 + 2, acc === 'a12'
 
//2 
// acc=3, acc = 3 + 3, acc === 6

// 3
// acc=6, acc = 6+4, acc === 10
 
// 4
// acc 10, acc = 10 + 5 

const zrr =new Array(1,2)
const arr2 = Array.from(numbers)


const set = new Set(); // Порожній об'єкт Set
const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(Array.from(setFromArray))

