const inquirer = require('./src/node_modules/inquirer');

// const Employee = require('./lib/employeeClass')
// const Manager = require('./lib/managerClass')
// const Engineer = require('./lib/engineerClass')
// const Intern = require('./lib/internClass')



const questions = [
    {
        name: "managerName",
        type: "input",
        message: "Please enter the name of your team manager:"
    },
    {
        name: "managerId",
        type: "input",
        message: "Please enter the employee ID of your team manager:"
    },
    {
        name: "managerEmail",
        type: "input",
        message: "Please enter your team manager's email address:"
    },
    {
        name: "managerOfficeNumber",
        type: "input",
        message: "Please enter the office number for your team manager:"
    },
    {
        name: "teamOptions",
        type: "list",
        message: "Are there any other members that you would like to add to your team profile?",
        choices: ["Engineer","Intern", "No, I'm finished!"]
    },   

    // how to loop through different prompts based on these menu answers?

    {
        name: "engineerName",
        type: "input",
        message: "Please enter the name of your engineer:",
        when: (answers) => answers.teamOptions === "Engineer"
    },
    {
        name: "engineerId",
        type: "input",
        message: "Please enter the employee ID of your engineer:",
        when: (answers) => answers.teamOptions === "Engineer"
    },
    {
        name: "engineerEmail",
        type: "input",
        message: "Please enter your engineer's email address:",
        when: (answers) => answers.teamOptions === "Engineer"
    },
    {
        name: "engineerGithub",
        type: "input",
        message: "Please enter the URL link to your engineer's GitHub account:",
        when: (answers) => answers.teamOptions === "Engineer"
    },

    
    {
        name: "internName",
        type: "input",
        message: "Please enter the name of your intern:",
        when: (answers) => answers.teamOptions === "Intern"
    },
    {
        name: "internID",
        type: "input",
        message: "Please enter the employee ID of your intern:",
        when: (answers) => answers.teamOptions === "Intern"
    },
    {
        name: "internEmail",
        type: "input",
        message:"Please enter your intern's email address:",
        when: (answers) => answers.teamOptions === "Intern"
    },
    {
        name: "internSchool",
        type: "input",
        message:"Please enter where your intern went to school:",
        when: (answers) => answers.teamOptions === "Intern"
    }
];

function writeProfile() {
    inquirer.prompt(questions)
       .then(response => {
           console.log(response)
       })
}

writeProfile();