const person = {
  'full name': 'Sam',
  age: 14,
  job: {
    workingPosition: 'SDET'
  },
  skills: ['js', 'ts']
}

function Person(name, age){
  this.name = name;
  this.age = age;
}

const pers = new Person('Sam', 14)

console.log(person)

console.log(person.age)
console.log(person.job.workingPosition)
console.log(person['full name'])