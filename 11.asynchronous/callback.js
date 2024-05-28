import https from 'node:https'
console.log(1);
setTimeout(()=>{console.log('time is out 1')}, 5000)
console.log(2);
setTimeout(()=>{console.log('time is out 2')}, 5000)
console.log(3);
setTimeout(()=>{console.log('time is out 3')}, 5000)

// setTimeout(()=>{
//   console.log(1), 
//   setTimeout(()=>{
//     console.log(2), 
//     setTimeout(()=>{
//       console.log(3), 
//       setTimeout(()=>{
//         console.log(4)        
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// https.get('https://swapi.dev/api/planets/3', (response)=> {
//   console.log('1', response.statusCode)
// })
// console.log('between')
// https.get('https://swapi.dev/api/people/1', (response)=> {
//   console.log('2',response.statusCode)
//   const homeworldUrl = response.data.homeworld
//   https.get(homeworldUrl, (res)=>{
//     console.log('homeworld', response.data.name)
//   })
// })