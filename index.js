const inquirer = require("inquirer");
const fs = require("fs");
const proGen = require('./src/generateHTML');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let allStaff = [];

const questions = [
    {
    type: "list",
    name: "position",
    message: "What is the postition?",
    choices: ["Engineer", "Intern", "Manager", "Generate HTML"],
   },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, proGen(data), (err) =>
    err ? console.error(err) : console.log("Success", fileName)
    );
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        
        if (response.position === "Engineer") {
            engineerQuestions();
        } else if (response.position === "Intern") {
            internQuestions();
        }
        else if (response.position === "Manager") {
            managerQuestions();
        } else {
            console.log("All Staff", allStaff);
            writeToFile("Pro-Gen.html", allStaff)
        }
    })

    .catch((error) => console.log(error));
}

init();

function engineerQuestions() {
    console.log("Engineer Questions");
    inquirer
    .prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name of Engineer?",
        },
        {
            type: "input",
            name: "id",
            message: "What is Engineer's ID number",
        },
        {
            type: "input",
            name: "email",
            message: "What is Engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is Engineer's github username?",
        },
    ])
    .then((response)=> {
        console.log(response);

        const newEngineer = new Engineer(
           response.name,
           response.id,
           response.email,
           response.github
        );
        console.log("Engineer", newEngineer);
        allStaff.push(newEngineer);
        init();
    });

}

function internQuestions() {
    console.log("Intern Questions");
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is Intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is Intern's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is Intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: " What is Intern's School name?",
        },
    ])
    .then((response)=> {
        console.log(response);

        const newIntern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        );
        console.log("Intern", newIntern);
        allStaff.push(newIntern);
        init();
    });
}

function managerQuestions() {
    console.log("Manager questions");
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is Manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is Manager's ID number",
        },
        {
            type: "input",
            name: "email",
            message: "What is Manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is Manager's office number?",
        },
    ])
    .then((response)=>{
        console.log(response);
        const newManager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
        );
        console.log("Manager", newManager);
        allStaff.push(newManager);

        init();
    });
}


