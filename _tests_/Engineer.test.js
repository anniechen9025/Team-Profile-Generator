const Engineer = require("../lib/Engineer");

describe ("Engineer", ()=>{
    describe ("Github",() => {
        it("should create an object with a name, an id and an email address + github if provided valid arguments", () => {
            const git = "anniechen"

            const employee = new Engineer("Sarah", "01", "anniechen9025@gmail.com",git);
      
            expect(employee.github).toEqual(git)
        });
    });

    describe("getGithub", () => {
        it("should return the 'Engineer' object's github", () => {
            const git = "anniechen9025";

            const obj = new Engineer("name", "id", "email", git);
            const result = obj.getGithub();

            expect (result).toEqual(git);
        });
    });

    describe("getRole", () => {
        it("should return the 'Engineer' string", () => {
            const obj = new Engineer();
            const result = obj.getRole();

            expect(result).toEqual("Engineer")
        });
    });
});