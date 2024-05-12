const a = 4
const b = 0


function divide(a, b){
  if (b ===0 ){
    throw new Error('Can`t divide by zero')
  }
  console.log(a/b)
}


try {
  divide(4,4)
} catch (e){
  console.log(e.message)
} finally {
  console.log('always be executed')
}