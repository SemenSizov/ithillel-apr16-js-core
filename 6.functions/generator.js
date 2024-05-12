function* gen(){
  let counter = 0
  yield ()=>++counter;
}
const myGen = gen()

console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next())