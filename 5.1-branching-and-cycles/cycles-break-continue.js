for(let i=0; i<5;i++){
  console.log(i, 'start')
  if(i % 2){
    console.log(i, 'continue')
    continue
  }
  console.log(i,'end')
}

let count = 0
while (true){
  count++
  console.log(count)
  if (count > 10){
    break
  }
}