const monthNumber = 54

switch(monthNumber) {
  case 1:
    console.log('Jan')
    break;
  case 2:
    console.log('Feb')
    break;
  case 3:
    console.log('Mar')
    break;
  case 4:
    console.log('Apr')
    break;
  case 5:
    console.log('May')
    break;
  case 6:
    console.log('Jun')
    break;
  case 7:
    console.log('Jul')
    break;
  case 8:
    console.log('Aug')
    break;
  case 9:
    console.log('Sep')
    break;
  case 10:
    console.log('Oct')
    break;
  default: 
    console.log('Unknown month')
}

const weekDay = 'sun'

switch (weekDay){
  case 'mon':
  case "tue":
  case "wed":
  case "thu":
  case "fri":
    console.log('It`s working day')
    break;
  case 'sat':
  case 'sun':
    console.log('It`s weekend')
    break;
}