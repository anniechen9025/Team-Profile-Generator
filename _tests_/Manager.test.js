const Manager = require("../lib/Manager");

describe ("Manager", ()=>{
    describe ("officeNumber",() => {
        it("should create an object with a name, an id and an email address + officebumber if provided valid arguments", () => {
            const officeNum = 4256230900

            const employee = new Employee("Sarah", "01", "anniechen9025@gmail.com",officeNum);
      
            expect(employee.officeNumber).toEqual(officeNum)
        });
    });

    // describe("getRole", () => {
    //     it("");
    // });
});