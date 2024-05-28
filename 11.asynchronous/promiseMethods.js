const planetNames = []

console.time('await')
for (let i =1; i < 11; i++){
  const res = await fetch(`https://swapi.dev/api/planets/${i}`)
  const body = await res.json()
  console.log(body.name)
  planetNames.push(body.name)
}
console.timeEnd('await')
console.log(planetNames)

const promisesArr = [] 
console.time('promiseAll')
for (let i =1; i < 11; i++){
  promisesArr.push(
    fetch(`https://swapi.dev/api/planes/${i}`)
    .then(res => res.json())
    .then(j=> j.name)
    .catch(err=> console.log(err))
  )
}

const results = await Promise.all(promisesArr)
// const results2 = await Promise.allSettled(promisesArr)
console.timeEnd('promiseAll')
console.log(results)
