const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
const numbersClone = [...numbers]
console.log(newNumbers)

const person = { name: "John", age: 30 };
const newPerson = { ...person, gender: "male" };

const personClone  = {...person}
console.log(newPerson);

const marry = { name: "Marry", age: 18 };
const marry2 = { name: "Marry", age: 18 };
console.log(marry===marry2)
const marryClone = {...marry}

console.log(marry === marryClone)
console.log(marry)
marryClone.age = 1000
console.log(marry)
console.log(marryClone)


const arr = [1,2,3]
const arr2 = [1,2,3]
const arr3 = arr2
console.log(arr === arr2)
arr3.push('fail')
console.log(arr2)
