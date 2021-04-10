const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return to an object containinga 'number' property whe called with the 'new' keyword", () => {
            const obj = new Employee();

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