const Employee = require("./Employee");

// the class creates the Intern object using the super class Employee and then cycles through each function to return information
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return { school: this.school };
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
