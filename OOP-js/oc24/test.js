// Functions in JavaScript can be used as constructors to create objects.
// 'Bankaccount' is a constructor function for creating new bank account objects.
function Bankaccount(name, balance = 0) {
  // 'this' refers to the newly created object instance.
  this.customerName = name;
  this.balance = balance; // Initial balance for the account, default is 0.
}

// Adding a method 'deposit' to the Bankaccount's prototype.
Bankaccount.prototype.deposit = function (amount) {
  this.balance += amount; // Adds the deposit amount to the balance.
};

const robinAcc = new Bankaccount("robin");
// Calling the 'deposit' method from the prototype to add 30 to robin's balance.
robinAcc.deposit(45);
console.log(robinAcc);
