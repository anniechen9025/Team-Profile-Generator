const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return to an object containinga 'number' property whe called with the 'new' keyword", () => {
            const obj = new Employee();

            // expect("string" in obj).toEqual(true);
            expect(typeof (obj)).toBe("object");
        });

        it("should set 'string' when created", () => {
            const str = "jouan";

            const obj = new Employee(str);

            expect(obj.name).toEqual(str);
        });

        it("should create an object with a name, an id and an email address if provided valid arguments", () => {
            const employee = new Employee("Sarah", "01", "anniechen9025@gmail.com");

            expect(employee.name).toEqual("Sarah");
            expect(employee.id).toEqual("01");
            expect(employee.email).toEqual("anniechen9025@gmail.com");
        });

        // it("should throw an error if provided no arguments", () => {

        //     const em = () => new Employee();

        //     const err = new Error("need to input something");

        //     expect(em).toThrow(err);
        // });

        // it("should throw an error if not provided a name, id and email", () => {
        //     const em1 = () => new Employee("Sarah", "", "anniechen9025@gmail.com");
        //     const em2 = () => new Employee("", "012", "anniechen9025@gmail.com");
        //     const em3 = () => new Employee("Sarah", "012", "")

        //     const err1 = new Error("Expected parameter 'name' to be input");
        //     const err2 = new Error("Expected parameter 'id' to be input");
        //     const err3 = new Error("Expected parameter 'email' to be input");

        //     expect(em1).toThrowError(err1);
        //     expect(em2).toThrowError(err2);
        //     expect(em3).toThrowError(err3);
        // });
    });

    describe("getName", () => {
        it("should return the 'Employee' object's name", () => {
            const name = "jouan";

            const obj = new Employee(name, "id", "email");
            const result = obj.getName();

            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the 'Employee' object's ID", () => {
            const id = "1";

            const obj = new Employee("name", id, "email");
            const result = obj.getId();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the 'Employee' object's email", () => {
            const email = "anniechen9025@gmail.com";

            const obj = new Employee("name", "id", email);
            const result = obj.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the 'Employee' dtring", () => {
            const obj = new Employee();
            const result = obj.getRole();

            expect(result).toEqual("Employee")
        });
    });
});