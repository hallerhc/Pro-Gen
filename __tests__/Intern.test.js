const Intern = require("../lib/Intern");

describe("Testing the Intern Class", () => {
    describe("Can instantiate an Intern object", () => {
        
        test("Can instantiate an Intern object with no parameters", () => {
            const newIntern = new Intern();
            expect(typeof(newIntern)).toBe("object")
        })

        test("Can set name via constructor", () => {
            const name = "Holly";
            const newIntern = new Intern(name);
            expect(newIntern.name).toBe(name);
        })

        test("Can set ID via constructor",() => {
            const id = 1;
            const newIntern = new Intern("Holly", 1);
            expect(newIntern.id).toBe(id)
        })

        test("Can set email via constructor", () => {
            const email = "holly@gmail.com";
            const newIntern = new Intern("Holly", 1, email);
            expect(newIntern.email).toBe(email)
        })

        test("Can set school via constructor", () => {
            const school = "schoolName";
            const newIntern = new Intern("Holly", 1, "holly@gmail.com", school);
            expect(newIntern.school).toBe(school)
        })

    })

    describe("Can test the instantiated Intern's object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Holly";
            const newIntern = new Intern(name);
            expect(newIntern.getName()).toBe(name)
        })
    })
})