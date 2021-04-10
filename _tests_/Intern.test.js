const Intern = require("../lib/Intern");

describe ("Intern", ()=>{
    describe ("School",() => {
        it("should create an object with a name, an id and an email address + school if provided valid arguments", () => {
            const schoolName = "BHS"

            const employee = new Intern("Sarah", "01", "anniechen9025@gmail.com",schoolName);
      
            expect(employee.school).toEqual(schoolName)
        });
    });

    describe("getSchool", () => {
        it("should return the 'Intern' object's school", () => {
            const schoolName = "BHS";

            const obj = new Intern("name", "id", "email", schoolName);
            const result = obj.getSchool();

            expect (result).toEqual(schoolName);
        });
    });

    describe("getRole", () => {
        it("should return the 'Intern' string", () => {
            const obj = new Intern();
            const result = obj.getRole();

            expect(result).toEqual("Intern")
        });
    });
});