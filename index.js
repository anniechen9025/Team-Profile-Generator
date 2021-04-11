const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Question/Question-manager");
const engineer = require("./lib/Question/Question-engineer");
const intern = require("./lib/Question/Question-intern");

// TODO: Create an array of questions for user input
const dataArray = [];

// TODO: Create a function to write README file
function writeToFile(context) {
    console.log(context);
    fs.writeFile("index.html", context, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("Sucess")
        };
    });
};

// TODO: Create a function to change array into HTML format

// TODO: Create a function to initialize app
function prtManager() {
    inquirer.prompt(manager).then(data => {
        console.log(data);
        dataArray.push(data);

        switch(data.choice){
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                // writeToFile();
                console.log(dataArray);
                break;
            default:
                return;
        }

    });
};

function prtEngineer() {
    inquirer.prompt(engineer).then(data => {
        console.log(data);
        dataArray.push(data);

        switch(data.choice){
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                // writeToFile();
                console.log(dataArray);
                break;
            default:
                return;
        }
    });
};

function prtIntern() {
    inquirer.prompt(intern).then(data => {
        console.log(data);
        dataArray.push(data);

        switch(data.choice){
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                // writeToFile();
                console.log(dataArray);
                break;
            default:
                return;
        }
    });
};

// Function call to initialize app
prtManager();
