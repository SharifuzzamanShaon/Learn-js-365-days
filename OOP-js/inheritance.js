// class person {
//     constructor(name, age) {
//         this.name = name,
//             this.name = age
//     }
//     getName() {
//         let name = this.name
//         this.username = `Name is ${name}`
//         return this.username
//     }
//     getAge() {
//         let age = this.age
//         this.ageIs = `Age is ${age}`
//         return this.ageIs
//     }
// }
// class API extends person {
//     constructor(name, post) {
//         super(name);
//         this.post = post;
//     }
//     post() {
//         let post = this.post
//         this.postIs = `The post is ${post}`
//         return this.postIs
//     }
// }

// const apiInstance = new API("Robin", 89, "DEV")
// const role = apiInstance.post()
// console.log(role);
// Base class









// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method to add a surname
//     addSurname() {
//         let name = this.name;
//         name = name + " " + "Kennedy";
//         this.fullName = name;
//         return this.fullName;
//     }
// }

// // Derived class
// class API extends Person {
//     constructor(name, age, role) {
//         super(name, age); // Call the constructor of the base class
//         this.role = role;
//     }

//     // Additional method specific to API class
//     getRole() {
//         return this.role;
//     }
// }

// // Example usage
// const personInstance = new Person("Sahon", 25);
// const fullName = personInstance.addSurname();
// console.log("Person's Full Name:", fullName);

// const apiInstance = new API("Sahon", 25, "Developer");
// const apiFullName = apiInstance.addSurname();
// const apiRole = apiInstance.getRole();
// console.log("API's Full Name:", apiFullName);
// console.log("API's Role:", apiRole);