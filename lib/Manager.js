const Employee = require("./Employee");

// the class creates the Manager object using the super class Employee and then cycles through each function to return information

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
