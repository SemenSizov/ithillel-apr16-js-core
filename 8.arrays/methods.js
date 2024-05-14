// const sentence = "Це речення має кілька слів";
// const words = sentence.split(" ");
// console.log(words);

// const str = words.join('-')
// console.log(str)

// // add element as last
// const stack = [1, 2];
// stack.push(3);
// stack.push(4);
// console.log(stack); // [1, 2, 3, 4]

// // return last el from array
// const el = stack.pop()
// console.log(el); 
// console.log(stack); // [1, 2, 3]


// const numbers = [10, 20, 30, 40, 50, 30];
// const index = numbers.indexOf(30);
// console.log(index); // 2


// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen); // true

// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(0); // [3, 4, 5]
// console.log(slicedArray)
// console.log(numbers)
// const copy = [...numbers]

// const splicesArrray = numbers.splice(2)
// console.log(splicesArrray)
// console.log(numbers)


// const colors = ["червоний", "зелений", "синій"];
// const splicedColors = colors.splice(0,0,  "жовтий");
// console.log(splicedColors);
// console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]


const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // [1, 2, 3, 4]