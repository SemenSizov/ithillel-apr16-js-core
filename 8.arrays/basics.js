const fruits = ['banana', 'apple', 'pineaple', 'cherry']
const nums = new Array(1,2,3,4,5)

// console.log(fruits);
// console.log(nums);

const el = ['word', 3.14, true, null, undefined]
// console.log(el)

// console.log(fruits[3])
fruits[3] = 'orange'
// console.log(fruits);

console.log(fruits.length)
for (let i = 0; i< fruits.length; i++){
  console.log(fruits[i])
}

for (const fruit of fruits){
  console.log(fruit)
}


// const arrayOfArrays =[[1,2,3], [4,5,6]]
// const tmp = arrayOfArrays[0]
// tmp[0]
// console.log(arrayOfArrays[0][0], arrayOfArrays[1][2])
