// function Person(name, age){
//   this.name = name,
//   this.age = age
//   this.sayHi = function(){
//     console.log('Hi!')
//   }
// }

class Person{
  country = 'Ukraine'

  constructor(name, age){
    this.name = name, 
    this.age = age
  }

  sayHi(){
    console.log('Hi, my name is '+ this.name)
  }
}

const person = new Person('Alice', 20)
const person2 = new Person('Bob', 21)

console.log(person)
console.log(person.name)
person.sayHi()
person2.sayHi()