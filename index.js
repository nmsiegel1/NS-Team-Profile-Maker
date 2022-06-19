const Employee = require('../team-profile-maker/lib/Employee');
const Manager = require('../team-profile-maker/lib/Manager.js');
const Intern = require('../team-profile-maker/lib/Intern.js');
const Engineer = require('../team-profile-maker/lib/Engineer.js')

const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

const generatePage = require('../team-profile-maker/src/page-template');
// const { resolvePtr } = require('dns');

const managerQuestions = [
{
    type: 'text',
    name: 'name',
    message: "What is your team manager's name?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
    }
},
{
    type: 'text',
    name: 'id',
    message: "What is your team manager's id?",
    validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the team manager's id number!");
          return false;
        }
  }
},
{
    type: 'text',
    name: 'email',
    message: "What is your team manager's email?",
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the team manager's email address!");
          return false;
        }
  }
},
{
    type: 'text',
    name: 'office',
    message: "What is the team manager's office number?",
    validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter the team manager's email office number!");
          return false;
        }
  }
}]

const engineerQuestions = [
    {
        type: 'text',
        name: 'name',
        message: "What is your engineer's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the engineer's name!");
              return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What is your engineers's id?",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the engineers's id number!");
              return false;
            }
      }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is your enginners's email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter the engineer's email address!");
              return false;
            }
      }
    },
    {
        type: 'text',
        name: 'github',
        message: "What is your enginner's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log("Please enter the engineer's github username!");
              return false;
            }
      }
    }
]

const internQuestions = [
    {
        type: 'text',
        name: 'name',
        message: "What is your intern's name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the intern's name!");
              return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What is your intern's id?",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the intern's id number!");
              return false;
            }
      }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is your intern's email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter the intern's email address!");
              return false;
            }
      }
    },
    {
        type: 'text',
        name: 'school',
        message: "What is your intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter the inter's school!");
              return false;
            }
      }
    }
    ]

// path.resolve for directory
// path.join to bring in path of directory and name what the file is
// declare empty arrays
// declare and require page template
// inquirer in one big umbrella function start with manager 
// first function createManager()
// what team member is next 
// if conditional 
// switch method to get 

function getEmployeeInfo() {

    employeeData = [];
    this.manager;
    this.engineer;
    this.intern;

}
    // const employeeArray = [];

    getEmployeeInfo.prototype.getManager = function () {
        console.log("Please build your team");
        inquirer.prompt(managerQuestions)
        .then(({name, id, email, office}) => {
            this.manager = new Manager(name, id, email, office);
            employeeData.push(this.manager);
            this.nextTeamMember()
        })

    }

    getEmployeeInfo.prototype.nextTeamMember = function () {
        inquirer.prompt(
            {
                type: 'list',
                name: 'next',
                message: 'Which type of team member would you like to add next?',
                choices: ["engineer", "intern", "I dont want to add any more team members."]
            }).then(({next}) => {
                if (next === 'intern') {
                    this.getIntern();
                } else if (next === 'engineer') {
                    this.getEngineer();
                } else {
                    console.log(employeeData)
                    writeProfile(employeeData)
                }
            })

    }

    getEmployeeInfo.prototype.getEngineer = function () {
        inquirer.prompt(engineerQuestions)
        .then(({name, id, email, github}) => {
            this.engineer = new Engineer(name, id, email, github);
            employeeData.push(this.engineer);
            this.nextTeamMember();
        })

    }

    getEmployeeInfo.prototype.getIntern = function () {
        inquirer.prompt(internQuestions)
        .then(({name, id, email, school}) => {
            this.intern = new Intern(name, id, email, school);
            employeeData.push(this.intern);
            this.nextTeamMember();
        })

    }



function writeProfile() {
    const pageHTML = generatePage(employeeData)
    fs.writeFile("./dist/index.html", pageHTML, err => {
        if (err) throw err;
        console.log("Portfolio complete! Check out index.html to see the output!");
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
                return;
            }
        console.log("style sheet copied successfully");
    });
}



new getEmployeeInfo().getManager();
