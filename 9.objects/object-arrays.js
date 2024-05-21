const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 }
];


console.log(people[0].name);

for(const person of people){
  console.log(`Name - ${person.name}, age - ${person.age}`);
}

const names = people.map((p)=> p.name)
console.log(names); 
