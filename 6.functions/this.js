const person = {
  name: 'Alice',
  age: 18,
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet()
person.name = 'Vic'
person.greet()


function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
}

const alice = new Person('Alice');
alice.greet()

const obj = {
  name: 'Alice',
  sayHello: () => {
    console.log(`Hello, ${this}!`);
  }
};

// obj.sayHello();

function greet() {
  console.log(`Hello, ${this.name}!`);
}

greet.call({name:'John'})

function greet2(timesOfDay, weather) {
  console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
}
greet2.apply({name:'Marry'}, ['morning', 'sunny'])


const greetJoe = greet.bind({name: 'Joe'})
greetJoe()



console.log([1,2,4,6,2,6,2].filter(n=> n >3))
console.log([1,2,4,6,2,6,2].filter(function(n){
  return n>3
}))

