const engineer = [{
    type: "input",
    name: "name",
    message: "Please insert the name of Engineer",
},
{
    type: "list",
    name: "position",
    message: "Please confirm your position",
    choices: ["Manager","Engineer", "Intern"]
},
{
    type: "input",
    name: "id",
    message: "Please insert your ID"
},
{
    type: "input",
    name: "email",
    message: "Please input your email",
},
{
    type: "input",
    name: "github",
    message: "Please insert your Github username",
},
{
    type: "rawlist",
    name: "choice",
    message: "Please pick the next role you wnat to input or select Done to exit application below:",
    choices: ["Engineer", "Intern", "Done"]
}];

module.exports = engineer;