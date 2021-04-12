const manager = [{
    type: "list",
    name: "position",
    message: "Please confirm your position",
    choices:[ "Engineer", "Intern", "Manager"]
},
{
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
{
    type: "rawlist",
    name: "choice",
    message: "Please pick action below:",
    choices:[ "Engineer", "Intern", "done"]
}];

module.exports = manager;
