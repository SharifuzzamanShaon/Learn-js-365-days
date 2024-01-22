let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  console.log(person1.getFullName());