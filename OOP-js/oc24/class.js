class bankAcc {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}

const royAcc = new bankAcc("Mr Roy", 300);
royAcc.deposit(200);
console.log(royAcc);
const joyAcc = new bankAcc("Mr joy", 200);
joyAcc.deposit(500);
console.log(joyAcc);
