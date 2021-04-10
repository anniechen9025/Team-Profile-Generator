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
    name: "github",
    message: "What is your github",
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

const intern = [{
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
    name: "school",
    message: "What is your school",
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

module.exports = Manager;