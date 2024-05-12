function iterator (array) {
  let nextIndex = 0
  return {
    next: function () {
      if (nextIndex < array.length) {
        return {
          value: array[nextIndex++],
          done: false
        }
      }
      return {
        value: undefined,
        done: true
      }
    }
  }
}

const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
const arrayIterator = iterator(array)

console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())

for(const el of array){
  console.log(el)
}

