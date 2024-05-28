const sleep = (timeout) =>  new Promise((resolve, reject)=>{
  if (timeout >= 5_000){
    reject('Timout is too long!')
  } else {
    setTimeout(()=> resolve(timeout), timeout)
  }
})

console.log(1)
let value = await sleep(1000) 
console.log(value)
console.log(2)
value = await sleep(2000) 
console.log(value)
console.log(3)
value = await sleep(3000) 
console.log(value)
console.log(4)
try {
value = await sleep(5000) 
} catch (err){
  console.log(err)
}
console.log(value)
console.log(5)
