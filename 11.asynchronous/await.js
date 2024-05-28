// (async()=>{
//   const res = await fetch('https://swapi.dev/api/people/1')
//   console.log(await res.json())
// })()


async function getLuke(){
  const res = await fetch('https://swapi.dev/api/people/1')
  const body = await res.json()
  return body
}

// console.log(await getLuke())

function getLukeAsync(cb){
  return fetch('https://swapi.dev/api/people/1')
    .then(res=> res.json())
    .then(cb)
}

getLukeAsync((l)=> console.log(l))
