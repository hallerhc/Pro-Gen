const Employee = require("../lib/Employee");

describe("Testing the Employee Class", () => {
    describe("Can instantiate an Employee object", () => {
        
        test("Can instantiate an Employee object with no parameters", () => {
            const newEmployee = new Employee();
            expect(typeof(newEmployee)).toBe("object")
        })

        test("Can set name via constructor", () => {
            const name = "Holly";
            const newEmployee = new Employee(name);
            expect(newEmployee.name).toBe(name);
        })

        test("Can set ID via constructor",() => {
            const id = 1;
            const newEmployee = new Employee("Holly", 1);
            expect(newEmployee.id).toBe(id)
        })

        test("Can set email via constructor", () => {
            const email = "holly@gmail.com";
            const newEmployee = new Employee("Holly", 1, email);
            expect(newEmployee.email).toBe(email)
        })

    })

    describe("Can test the instantiated Employee object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Holly";
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toBe(name)
        })
    })
})