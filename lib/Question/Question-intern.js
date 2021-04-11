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
{
    type: "rawlist",
    name: "choice",
    message: "Please pick action below:",
    choices:[ "Engineer", "Intern", "done"]
}];

module.exports = intern;