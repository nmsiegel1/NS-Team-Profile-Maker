const Employee = require("./Employee");

// the class creates the Engineer object using the super class Employee and then cycles through each function to return information

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return { github: this.github };
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
