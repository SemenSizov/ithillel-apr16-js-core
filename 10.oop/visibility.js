// class Counter {
//   #count = 0; // Приватна властивість

//   // Приватний метод
//   #increment() {
//     this.#count++;
//   }

//   addOne(){
//     this.#increment()
//   } 

//   getCount() {
//     return this.#count;
//   }
// }

// const counter = new Counter();
// console.log(counter.getCount()); // 0
// counter.addOne();
// counter.addOne();
// counter.addOne();
// console.log(counter.getCount()); // 0

// counter.#count = 5; // Помилка! Приватна властивість не доступна ззовні
// counter.#increment(); // Помилка! Приватний метод не доступний ззовні


class Wallet {
  constructor(money){
    this._money = money
  }

  getMoney(amount){
    if(this._money < amount) throw new Error('Not enough money!')
    this._money = this._money - amount
  }

  putMoney(amount){
    this._money = this._money + amount
  }

  checkBalance(){
    return this._money
  }
}

const wallet = new Wallet(200)
wallet.getMoney(100)
console.log(wallet.checkBalance());
wallet.getMoney(100)
console.log(wallet.checkBalance());
