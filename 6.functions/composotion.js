const add = (a, b) => a + b;

const add1 = (a)=> {
  return (b)=>{
    return a+ b
  }
}

console.log(add(5,5))

console.log(add1(5)(7))