const Manager = [{
    type: "input",
    name: "name",
    message: "what is your name",
},
{
    type: "input",
    name: "id",
    message: "what is yourid"
},
{
    type: "input",
    name: "email",
    message: "what is your email",
},
{
    type: "input",
    name: "office",
    message: "what is your number",
},
// {
//     type: "confirm",
//     name: "table",
//     message: "Do you want a table of contents? (only need it when your readme is long)",
// },
{
    type: "choice",
    message: "Please pick action below:",
    choices:[ "Engineer", "Intern", "done"]
}];

const engineer = [{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: ""
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "confirm",
    name: "table",
    message: "Do you want a table of contents? (only need it when your readme is long)",
},
{
    type: "rawlist",
    name: "lincense",
    message: "License: Please pick license below:",
    choices:[ "MIT", "Apache License 2.0"]
}];

const intern = [{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: ""
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "input",
    name: "",
    message: "",
},
{
    type: "confirm",
    name: "table",
    message: "Do you want a table of contents? (only need it when your readme is long)",
},
{
    type: "rawlist",
    name: "lincense",
    message: "License: Please pick license below:",
    choices:[ "MIT", "Apache License 2.0"]
}];

module.exports = Manager;