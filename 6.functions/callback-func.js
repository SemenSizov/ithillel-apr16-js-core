import chalk from 'chalk'

function myFunc(){
   console.log('func')
}

const var1 = myFunc

var1()

function withCallBack(cb){
  console.log('before')
  cb()
  console.log('after')
}

withCallBack(myFunc)


function getFuction(){
  const f = function(str){
    console.log(str)
  }
  f.desc = 'Awesome function'
  return f
}

const var2 = getFuction()
var2('Hello!')

console.log(var2.desc)


function print(str){
  console.log(str)
}

function colorPrintRed(str){
  console.log(chalk.redBright(str))
}

function colorPrintYellow(str){
  console.log(chalk.yellowBright(str))
}


function greet(name, cb){
  cb(`Hello ${name}!`)
}


greet('Sam', print)
greet('Sam', colorPrintRed)
greet('Sam', colorPrintYellow)

greet('Sam', (str)=>{console.log(str)})
