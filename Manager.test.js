const Manager = require("../lib/Manager");

describe("Testing the Manager Class", () => {
    describe("Can instantiate a Manager object", () => {
        
        test("Can instantiate an Manager object with no parameters", () => {
            const newManager = new Manager();
            expect(typeof(newManager)).toBe("object")
        })

        test("Can set name via constructor", () => {
            const name = "Holly";
            const newManager = new Manager(name);
            expect(newManager.name).toBe(name);
        })

        test("Can set ID via constructor",() => {
            const id = 1;
            const newManager = new Manager("Holly", 1);
            expect(newManager.id).toBe(id)
        })

        test("Can set email via constructor", () => {
            const email = "holly@gmail.com";
            const newManager = new Manager("Holly", 1, email);
            expect(newManager.email).toBe(email)
        })

        test("Can set office number via constructor", () => {
            const officeNumber = "1234";
            const newManager = new Manager("Holly", 1, "holly@gmail.com", officeNumber);
            expect(newManager.officeNumber).toBe(officeNumber)
        })

    })

    describe("Can test the instantiated Manager's object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Holly";
            const newManager = new Manager(name);
            expect(newManager.getName()).toBe(name)
        })
    })
})