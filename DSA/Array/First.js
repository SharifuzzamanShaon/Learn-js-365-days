class myArray {
  constructor(lenght, data) {
    this.lenght = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    console.log(this.data);
    return this.lenght;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastIten = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastIten;
  }
}

const arr = new myArray();
console.log(arr.push("joy"));
console.log(arr.push("karim"));
console.log(arr.push("tonmoy"));
console.log(arr.push("robin"));
console.log(arr.pop());
console.log(arr);
