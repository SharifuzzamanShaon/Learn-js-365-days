class info {
    constructor(name, id, age) {
        this.name = name,
            this.id = id,
            this.age = age,
            this.displayInfo = function () {
                console.log(`Name: ${this.name}, ID: ${this.id}, Age: ${this.age}`);
            };
    }
}

const p1 = new info('saimon', 100293, 89);
p1.displayInfo(); // Output: Name: saimon, ID: 100293, Age: 89