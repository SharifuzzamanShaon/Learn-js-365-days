const bankAcc = class {
  constructor(name, balance) {
    this.accName = name;
    this.accNo = Date.now();
    this.balance = balance;
  }
  deposit(anount) {
    this.balance += anount;
  }
};
class savingAcc extends bankAcc {
  constructor(name, balance, tranactionlimit) {
    super(name, balance); // calling parent constructor
    this.tranactionlimit = tranactionlimit;
  }
  tranaction(anount) {
    this.tranactionlimit -= anount;
  }
  addFunds(amount) {
    super.deposit(amount); // calls the deposit method of bankAcc
  }
}

const royAcc = new savingAcc("Karmi bexzama", 10000, 200);
// royAcc.addFunds(55)
royAcc.deposit(45)
console.log(royAcc);
