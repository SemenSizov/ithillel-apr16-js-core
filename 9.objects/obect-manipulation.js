const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(person.age)

person.age = 25

console.log(person.age)

person.hobby = 'art'
// person['hobby'] = 'art'

console.log(person);

delete person.hobby

console.log(person);
console.log(person.hobby);


const color = 'yellow'
const width = 25

// const banana = {
//   color: color,
//   width: width
// }

const banana = { color, width}
console.log(banana)

const propName = 'activity'

const robot = {
  [propName]: 'bend'
}

console.log(robot);

const arr = ['white','red','red','red','red','red','red', 'green', 'green', 'green', 'blue']

const colors = {}

for (const el of arr){
  if (!colors[el]){
    colors[el] = 1
  } else {
    colors[el] = colors[el] + 1
  }
}

console.log(colors);


const car = {
  model: 'Porsche',
  color: 'Blue',
  gearNumber: 1,
  switchGear: function(isUp){
    isUp ? this.gearNumber++ : this.gearNumber--
    console.log(this.gearNumber)
  },
  // motor: {
  //   isWorking: false,
  //   rpm: 1000
  // }
}
car.switchGear(true)
car.switchGear(true)
car.switchGear(false)

console.log(car.motor?.rpm)