const arr = new Array(1,2,3,4)

console.log(arr)

arr.push(7)

console.log(arr)


// Створення об'єкта "прототипу"
const animalPrototype = {
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
};

// Створення об'єкта, який успадковує прототип
const dog = {
  name: "Dog",
  sound: "Woof"
};
const cat = {
  name: "Cat",
  sound: "Meow"
}
dog.__proto__ = animalPrototype;
cat.__proto__ = animalPrototype;

// Виклик методу від успадкованого прототипу
dog.speak(); // Dog says Woof
cat.speak()



class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name, "Woof");
    this.color = color
  }
}

class Cat extends Animal {
  constructor(name){
    super(name, 'Meow')
  }

  speak(){
    console.log(`${this.name} is ${this.sound}ing`);
  }
}

const dog1 = new Dog("Spike");
dog1.speak(); 

const cat1 = new Cat("Tom");
cat1.speak(); 