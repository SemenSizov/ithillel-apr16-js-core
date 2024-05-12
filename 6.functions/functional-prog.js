const pi = Math.PI

function sum(a, b){
  return a + b
}

function printInColor(value){
  
}

function sumAndPrintInColor(a, b){
  printInColor(sum(a,b))
}


function factorial(n){
  if (n === 0 || n === 1){
    return 1
  } else {
    return factorial(n-1)*n
  }
}
console.log(factorial(5))
