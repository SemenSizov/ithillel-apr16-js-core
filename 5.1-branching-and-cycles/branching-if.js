
const isTrue = true

if('asdf'){
  console.log('It`s true!')
} else {
  console.log('It`s false!')
}

// FALSY VALUES
// undefined
// null
// 0
// ''
// Nan

const monthNumber = 4

if (monthNumber === 1) {
  console.log('It`s January')
} else if (monthNumber === 2){
  console.log('It`s February')
} else if (monthNumber === 3) {
  console.log('It`s March')
} else {
  console.log('It`s April or later')
}


if (monthNumber % 2) {
  console.log('It`s even number')
  if (monthNumber > 10){
    console.log('It`s even number')
  }
} else {
  console.log('It`s odd number')
}


let x = 10;
let y = 5;
let z = 6;

if(x>5){
  if(y < 30){
    if (z == 50){
      console.log('Ideal condition')
    }
  }
}

if (x >5 && y < 30 && z ==50){
  console.log('Ideal condition')
}


const num = 25314

const oddOrEven = num % 2 ? 'odd' : 'even'

console.log(oddOrEven)


const needToRound = true
const inputNumber = 6234.134
const value = needToRound ? Math.round(inputNumber) : inputNumber
console.log(value)

const inputStr = 'asdundefined'
const strValue = inputStr ? inputStr : 'Default value'
console.log(strValue);