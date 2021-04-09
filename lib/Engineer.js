// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github){
        this.github = github;
    }

    getGithub();

    getRole();
}