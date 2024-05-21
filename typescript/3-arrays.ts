let isStrings:string

function arraySum(arr: number[]): number{
  return arr.reduce((acc, cur)=> acc+cur, 0)
}


function printArr(arr: any[]){
  for (const el of arr){
    console.log(el);
  }
}

type StringOrNumber2 = string| number

function isStringArray(arr: StringOrNumber2[]){
  return arr.every(el => typeof el === 'string')
}










