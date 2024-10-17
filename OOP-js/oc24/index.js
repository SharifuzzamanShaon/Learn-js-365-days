// functions can be used as constructors to create objects
function Bankaccount(name, balance = 0) { //constructor
  this.customerName = name;
  this.accountNo = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
    this.balance;
  };
}

const robinAcc = new Bankaccount("robin", 520);
const joneAcc = new Bankaccount("jone");
robinAcc.deposit(30);
console.log(robinAcc.balance);
// console.log(robinAcc);

//   ============================
const accountForm = document.querySelector("#accountForm");
const userName = document.querySelector("#customerName");
const balance = document.querySelector("#customerBalance");
const allAccount = [];
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newAcc = new Bankaccount(userName.value, +balance.value);
  allAccount.push(newAcc);
  console.log(allAccount);
});

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const depositBalance = document.querySelector("#depositBalance");

depositForm.addEventListener("submit", (e) => {
    e.preventDefault()
  const account = allAccount.find(
    (item) => item.accountNo === +accountNumber.value
  );
  account.deposit(+depositBalance.value);
  console.log(allAccount);
});
