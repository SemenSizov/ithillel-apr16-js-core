function printUserInfo1(name, age, gender, occupation, hobby){
  console.log(`User name: ${name}`);
  console.log(`User age: ${age}`);
  console.log(`User gender: ${gender}`);
  console.log(`User occupation: ${occupation}`);
  console.log(`User hobby: ${hobby}`);
}

function printUserInfo(user){
  const {name, age, gender, occupation, hobby} = user
  console.log(`User name: ${name}`);
  console.log(`User age: ${age}`);
  console.log(`User gender: ${gender}`);
  console.log(`User occupation: ${occupation}`);
  console.log(`User hobby: ${hobby}`);
}

const user = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "developer",
  hobby: 'art'
};

printUserInfo1(user.name, user.age, user.gender, user.occupation, person.hobby)
printUserInfo(user)