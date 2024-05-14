type StringOrNumber = string | number
type Season = 'winter' | 'spring' | 'summer' | 'autumn'



type Value = StringOrNumber | {
  name:string
}

type Printable = {
  print: Function
}

function printValue(value: Value){
  console.log(value)
}

printValue({name: 'Alice'})

type Person = {
  name: string,
  age: number,
  isAdult?: boolean,
  gender: 'male'| 'female'
}

const alice: Person = {
  name: 'Alice',
  age: 19,
  gender: 'female'
}

function printSeason(season: any){
  console.log(`It's ${season} now!`)
}
 
printSeason('summer')

function isNight(daytime: 'day' | 'night'){
  return daytime === 'night'
}

// interfaces

interface HasName {
  name: string
} 

interface HasAge {
  age: number
}

interface HasAgeAndName extends HasAge, HasName {
}

const marry:HasAgeAndName = {
  name:'Marry',
  age: 12
}