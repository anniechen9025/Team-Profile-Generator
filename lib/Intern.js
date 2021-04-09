// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school){
        this.school = school;
    }

    getSchool();

    getRole();
}