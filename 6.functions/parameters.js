const printAllParameters = (a,b,c=30)=>{
  console.log(a)
  console.log(b)
  console.log(c)
}

// printAllParameters(1,2)
// printAllParameters(1,2,5)

const printAllParametersRest = (...params)=>{
  console.log(params)
}


const restParam = (a, b, ...rest)=>{
  console.log(a)
  console.log(b)
  console.log(rest)
}
// restParam('asd',123, true, 'fdgsfg')

function funcArguments(){
  console.log(arguments['1'])
}

funcArguments(2,'asd')