const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {});
};
// Function call to initialize app
init();
