const Engineer = require("../lib/Engineer");

describe("Testing the Engineer Class", () => {
    describe("Can instantiate an Engineer object", () => {
        
        test("Can instantiate an Engineer object with no parameters", () => {
            const newEngineer = new Engineer();
            expect(typeof(newEngineer)).toBe("object")
        })

        test("Can set name via constructor", () => {
            const name = "Holly";
            const newEngineer = new Engineer(name);
            expect(newEngineer.name).toBe(name);
        })

        test("Can set ID via constructor",() => {
            const id = 1;
            const newEngineer = new Engineer("Holly", 1);
            expect(newEngineer.id).toBe(id)
        })

        test("Can set email via constructor", () => {
            const email = "holly@gmail.com";
            const newEngineer = new Engineer("Holly", 1, email);
            expect(newEngineer.email).toBe(email)
        })

        test("Can set github account via constructor", () => {
            const github = "githubuser";
            const newEngineer = new Engineer("Holly", 1, "holly@gmail.com", github);
            expect(newEngineer.github).toBe(github)
        })

    })

    describe("Can test the instantiated Engineer's object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Holly";
            const newEngineer = new Engineer(name);
            expect(newEngineer.getName()).toBe(name)
        })
    })
})