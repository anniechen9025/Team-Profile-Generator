const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Question/Question-manager");
const engineer = require("./lib/Question/Question-engineer");
const intern = require("./lib/Question/Question-intern");

// TODO: Create an array of questions for user input
let dataArray = [];
let managerArray = [];
let engineerArray = [];
let internArray = [];
let htmlcards = "";


// TODO: Create a function to write README file
function writeToFile(context) {
    console.log(context);
    fs.writeFile(__dirname + '/dist/index.html', context, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("Sucess")
        };
    });
};

// TODO: Create a function to initialize app
function prtManager() {
    inquirer.prompt(manager).then(data => {
        dataArray.push(data);

        switch (data.choice) {
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                console.log(dataArray);
                filterHtmlMaking();
                break;
            default:
                return;
        }

    });
};

function prtEngineer() {
    inquirer.prompt(engineer).then(data => {
        dataArray.push(data);

        switch (data.choice) {
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                console.log(dataArray);
                filterHtmlMaking();
                break;
            default:
                return;
        }
    });
};

function prtIntern() {
    inquirer.prompt(intern).then(data => {
        dataArray.push(data);

        switch (data.choice) {
            case "Engineer":
                prtEngineer();
                break;
            case "Intern":
                prtIntern();
                break;
            case "done":
                console.log(dataArray);
                filterHtmlMaking();
                break;
            default:
                return;
        }
    });
};

// Function call to initialize app
prtManager();

// TODO: Create a function to change array into HTML format
function filterHtmlMaking() {
    //Filter Array
    managerArray = dataArray.filter(function (item) {
        return item.position === "Manager";
    });
    engineerArray = dataArray.filter(function (item) {
        return item.position === "Engineer";
    });
    internArray = dataArray.filter(function (item) {
        return item.position === "Intern";
    });

    //Map Array
    let mangerhtml = managerArray.map(function (item) {
        return generateMhtml(item);
    });
    let engineerhtml = engineerArray.map(function (item) {
        return generateEhtml(item);
    })
    let internhtml = internArray.map(function (item) {
        return generateIhtml(item);
    })

    const htmlArray = mangerhtml.concat(engineerhtml, internhtml);

    htmlcards = htmlArray.join("");
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel = "stylesheet" href = "style.css">
</head>
<body>
    <div class = "container">
        <div class = "row">
            <div class = "col-12 mb-3">
                <h1 class = "text-center">My Project Team</h1>
            </div>
        </div>
    </div>
    <div class = "container">
        <div class = "row">
            <div class = "col-12 d-flex justify-content-center">
                ${htmlcards}
            </div>
        </div>
    </div>
</body>
</html>`;
    writeToFile(html);
};


let generateMhtml = (managerArray) => {
    return `   
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card title">${managerArray.name}</h2>
        <h3 class="card-title">${managerArray.position}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${managerArray.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerArray.email}"> ${managerArray.email}</a></li>
            <li class="list-group-item">Office Number: ${managerArray.office}</li>
        </ul>
    </div>
</div>`
};
let generateEhtml = (engineerArray) => {
    return `   
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card title">${engineerArray.name}</h2>
        <h3 class="card-title">${engineerArray.position}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineerArray.id}</li>
            <li class="list-group-item">Email: ${engineerArray.email}</li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineerArray.github}">${engineerArray.github}</a></li>
        </ul>
    </div>
</div>`
};
let generateIhtml = (internArray) => {
    return `   
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card title">${internArray.name}</h2>
        <h3 class="card-title">${internArray.position}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${internArray.id}</li>
            <li class="list-group-item">Email: ${internArray.email}</li>
            <li class="list-group-item">School: ${internArray.school}</li>
        </ul>
    </div>
</div>`
};


