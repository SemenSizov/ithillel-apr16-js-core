const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const k in person){
  console.log(`${k} : ${person[k]}`);
}

for (const k of Object.keys(person)){
  console.log(`${k} : ${person[k]}`);
}

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('dog'));
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person))