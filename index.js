// required files
const Employee = require("../team-profile-maker/lib/Employee");
const Manager = require("../team-profile-maker/lib/Manager.js");
const Intern = require("../team-profile-maker/lib/Intern.js");
const Engineer = require("../team-profile-maker/lib/Engineer.js");
const generatePage = require("../team-profile-maker/src/page-template");

// required modules
const inquirer = require("inquirer");
const fs = require("fs");

// Arrays of questions for inquirer
const managerQuestions = [
  {
    type: "text",
    name: "name",
    message: "What is your team manager's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the team manager's name!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "id",
    message: "What is your team manager's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the team manager's id number!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "email",
    message: "What is your team manager's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email address!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "office",
    message: "What is the team manager's office number?",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter the team manager's email office number!");
        return false;
      }
    },
  },
];

const engineerQuestions = [
  {
    type: "text",
    name: "name",
    message: "What is your engineer's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the engineer's name!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "id",
    message: "What is your engineers's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the engineers's id number!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "email",
    message: "What is your enginners's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the engineer's email address!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "github",
    message: "What is your enginner's GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the engineer's github username!");
        return false;
      }
    },
  },
];

const internQuestions = [
  {
    type: "text",
    name: "name",
    message: "What is your intern's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the intern's name!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "id",
    message: "What is your intern's id?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the intern's id number!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "email",
    message: "What is your intern's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the intern's email address!");
        return false;
      }
    },
  },
  {
    type: "text",
    name: "school",
    message: "What is your intern's school?",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the inter's school!");
        return false;
      }
    },
  },
];

// The function that creates the employeeData array through inquirer prompts
function getEmployeeInfo() {
  employeeData = [];
  this.manager;
  this.engineer;
  this.intern;
}

// function that prompts the user for manager questions and then pushes the data to the array and calls the nextTeamMember()
getEmployeeInfo.prototype.getManager = function () {
  console.log("Please build your team");
  inquirer.prompt(managerQuestions).then(({ name, id, email, office }) => {
    this.manager = new Manager(name, id, email, office);
    employeeData.push(this.manager);
    this.nextTeamMember();
  });
};

// function that prompts the user for information on the next employee
// also give the option to not add any further employees which calls the writeProfile() function
getEmployeeInfo.prototype.nextTeamMember = function () {
  inquirer
    .prompt({
      type: "list",
      name: "next",
      message: "Which type of team member would you like to add next?",
      choices: [
        "engineer",
        "intern",
        "I dont want to add any more team members.",
      ],
    })
    .then(({ next }) => {
      if (next === "intern") {
        this.getIntern();
      } else if (next === "engineer") {
        this.getEngineer();
      } else {
        console.log(employeeData);
        writeProfile(employeeData);
      }
    });
};

// function that prompts the user for engineer questions and then pushes the data to the array and calls the nextTeamMember()
getEmployeeInfo.prototype.getEngineer = function () {
  inquirer.prompt(engineerQuestions).then(({ name, id, email, github }) => {
    this.engineer = new Engineer(name, id, email, github);
    employeeData.push(this.engineer);
    this.nextTeamMember();
  });
};

// function that prompts the user for intern questions and then pushes the data to the array and calls the nextTeamMember()
getEmployeeInfo.prototype.getIntern = function () {
  inquirer.prompt(internQuestions).then(({ name, id, email, school }) => {
    this.intern = new Intern(name, id, email, school);
    employeeData.push(this.intern);
    this.nextTeamMember();
  });
};

// function that writes the index.html file by sending the data to the template in the generatePage function with the output going to the dist folder
// also copies style.css to the dist folder
function writeProfile() {
  const pageHTML = generatePage(employeeData);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw err;
    console.log("Portfolio complete! Check out index.html to see the output!");
  });

  fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Style sheet copied successfully!");
  });
}

new getEmployeeInfo().getManager();
