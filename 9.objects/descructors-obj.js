// const person = {
//   name: "John",
//   age: 30,
//   gender: "male"
// };

// const {name: personName, age, gender} = person

// console.log(age);
// console.log(age);
// console.log(personName);
// console.log(gender);

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 }
];

for (let {name: pName} of people){ 
  console.log(pName);
}


const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

const { name, address: { city, country } } = person;

console.log(name); // "John"
console.log(city); // "New York"
console.log(country); // "USA"