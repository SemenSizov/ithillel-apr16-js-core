const resArr = []


// fetch(`https://swapi.dev/api/planets/1`)
  // .then((res)=> res.json())
//   .then((json)=> console.log(json))
//   .catch((err)=> console.error(err))

// await
const res = await fetch(`https://swapi.dev/api/planets/1`)
try {
const body = await res.json()
} catch(err){
  console.log('ERROR!', err)
}
console.log(body)


