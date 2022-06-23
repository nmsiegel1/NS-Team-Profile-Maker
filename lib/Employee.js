// the class creates the Employee object and then cycles through each function to return information
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return { name: this.name };
  }

  getId() {
    return { id: this.id };
  }

  getEmail() {
    return { email: this.email };
  }

  getRole() {
    return { role: "Employee" };
  }
}

module.exports = Employee;
