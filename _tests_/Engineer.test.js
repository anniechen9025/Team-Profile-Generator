const Engineer = require("../lib/Engineer");

describe ("Engineer", ()=>{
    describe ("Github",() => {
        it("should create an object with a name, an id and an email address + github if provided valid arguments", () => {
            const git = "anniechen"

            const employee = new Employee("Sarah", "01", "anniechen9025@gmail.com",git);
      
            expect(employee.github).toEqual(git)
        });
    });

    describe("getGithub", () => {
        it("should return the 'Engineer' object's github", () => {
            const git = "anniechen9025";

            const obj = new Employee("name", "id", "email", git);
            const result = obj.value();

            expect (result).toEqual(git);
        });
    });

    // describe("getRole", () => {
    //     it("");
    // });
});