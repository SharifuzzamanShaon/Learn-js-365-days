/**
 *
 * In JavaScript, prototype is a core concept that enables inheritance and the sharing of properties and methods between objects.
 * Each function in JavaScript, including constructor functions, has a special prototype property that is used to build the prototype chain
 */

function Bankaccount(name, balance = 0) {
  //constructor
  this.customerName = name;
  this.accountNo = Date.now();
  this.balance = balance;
  //   this.a = function (amount) {
  //     this.balance += amount;
  //     this.balance;
  //   };
}

Bankaccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.balance;
};
const robinAcc = new Bankaccount("Robin", 40);
newAcc.deposit(40);
console.log(robinAcc);
const newAcc2 = new Bankaccount("as sja", 50);
newAcc2.deposit(45);
console.log(newAcc2);

// =========================

function nameFun(a) {}
nameFun.prototype.nameWWWW = function (name) {
  console.log(`Hi, my name is ${name}`);
};
const fun1 = new nameFun();
fun1.nameWWWW("Robin");
console.log(fun1);
// =========================

function createPlayer(name, score) {
  this.name = name;
  console.log(this);
  console.log(this.name);
}

createPlayer("Mr, Robin");
createPlayer("Shaon 3432");
// =========================
function abc() {
  console.log("console value");
  return "returining value";
}

const res = new abc();
res.kk = function (value) {
  console.log("value is ", value);
};
console.log(res.kk(989));
console.log(typeof res);

// ============

const myobj = { name: "Shoan", age: 23 };
Object.prototype.isAdult = function (age) {
  if (age < 18) {
    return false;
  } else return true;
};
console.log(myobj.isAdult(45))
const otherobj = [{}]
console.log(otherobj.isAdult(12));
