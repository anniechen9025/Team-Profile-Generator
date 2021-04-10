const Intern = require("../lib/Intern");

describe ("Intern", ()=>{
    describe ("School",() => {
        it("should create an object with a name, an id and an email address + school if provided valid arguments", () => {
            const schoolName = "BHS"

            const employee = new Employee("Sarah", "01", "anniechen9025@gmail.com",schoolName);
      
            expect(employee.school).toEqual(schoolName)
        });
    });

    describe("getSchool", () => {
        it("should return the 'Intern' object's school", () => {
            const schoolName = "BHS";

            const obj = new Employee("name", "id", "email", schoolName);
            const result = obj.value();

            expect (result).toEqual(schoolName);
        });
    });

    // describe("getRole", () => {
    //     it("");
    // });
});