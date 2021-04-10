// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return "Employee"
    };
};

module.exports = Employee;


// getName(){
//     const getName = prompt("enter your first name");
//     return getName;
// };

// getId(){
//     const getId = prompt("enter your Id");
//     return getId;
// };

// getEmail(){
//     const getEmail= prompt("enter your email);
//     return getEmail;
// };

// getRole(name, id, email){
//     getName: name;
//     getId: id;
//     getEmail: email;
// };