// Присвоєння за значенням (примітивні типи)
let x = 10;
let y = x; // Значення копіюється
x = 20; 
console.log(x); // 20
console.log(y); // 10

// Присвоєння за посиланням (складні типи)
const arrA = [1, 2, 3];
const arrB = arrA; // Посилання на той самий масив

// ...arrA => 1, 2, 3
// console.log(arrA)
// console.log(...arrA)
// const arrC = [...arrA]
// console.log(arrC)
// const arrD = [arrA]
// console.log(arrD)
// arrA.push(4);
// console.log(arrA); // [1, 2, 3, 4]
// console.log(arrB); // [1, 2, 3, 4]
// console.log(arrC); 
// arrB[0] = null
// console.log(arrA); // [1, 2, 3, 4]
// console.log(arrB); // [1, 2, 3, 4]
// console.log(arrC); 
