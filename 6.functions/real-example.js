function click(element){
  console.log(`Click on ${element}`)
}

function navigate(url){
  console.log('Navigating to', url)
}

function openBrowser(){
  console.log('Browser opened')
}

function type(element, text){
  console.log(`${text} typed into the ${element}`)
}

function getText(element){
  return `Text of the ${element}`
  // return 26
}


function searchUser(userName){
  const input = 'UserNameInput'
  const button = 'SearchButon'
  type(input, userName)
  click(button)
}

function checkUserAge(userName, age){
  searchUser(userName)
  const userAge = getText('userAgeField')
  if (userAge === age){
    console.log('PASSED')
  } else {
    console.log('FAILED')
  }
}

function test(){
  openBrowser()
  navigate('http://awesome.app')
  checkUserAge('TestUser', 26)
}

function test1(){
  openBrowser()
  navigate('http://awesome.app')
  checkUserAge('TestUser24', 'Text of the userAgeField')
}

function test2(){
  openBrowser()
  navigate('http://awesome.app')
  checkUserAge('TestUserFailed', undefined)
}


test()
test1()

const obj = {
  age: 24,
  name: 'John',
  email: 'abc@email.com'
}
