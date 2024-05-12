function withdraw(amount, balance) {
  if (amount < 0) {
    console.log("Невірне значення");
    return
  }
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
    return
  } 
  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return
  } 
  console.log("Операція зняття коштів проведена успішно");
}

withdraw(150, 100)