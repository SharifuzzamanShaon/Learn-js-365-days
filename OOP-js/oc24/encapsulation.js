class bankAcc {
  name;
  #balance;
  constructor(name, balance = 0) {
    this.name = name;
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  set Balance(amount) {
    this.#balance += amount;
  }
}

const royAcc = new bankAcc("Mr Roy", 300);
//   royAcc.#balance ="has"
royAcc.deposit(200);
royAcc.Balance =444
console.log(royAcc);
