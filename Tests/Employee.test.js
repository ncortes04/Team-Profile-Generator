const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Create email", () => {
        const testEmail = "nickypoo@gmail";
        var create = new Employee(1291212, "billy", testEmail);
        expect(create.email).toBe(testEmail);
    });

    it("Set id", () => {
        const idTest = 61738;
        var create = new Employee(idTest, "bob");
        expect(create.id).toBe(idTest);
    });


    it("set name", () => {
        const test = "Bob";
        var create = new Employee(test);
        expect(create.name).toBe(name);
    });

    describe("getName", () => {
        it("Get name val from getName()", () => {
            const testName = "joey";
            var tester = new Employee(122, testName);
            expect(tester.getName()).toBe(testName);
        });
    });
        
    describe("getId", () => {
        it("Get id val from geId()", () => {
            const testId = "joey";
            var tester = new Employee(testId);
            expect(tester.getId()).toBe(testId);
        });
    });
        
    describe("getId", () => {
        it("Get id val from getEmail()", () => {
            const testEmail = "joey@gmail.com";
            var tester = new Employee(21212, "dadsa", testEmail);
            expect(tester.getEmail()).toBe(testEmail);
        });
    });
        
    describe("getRole", () => {
        it("Get role val from getRole()", () => {
            const testRole = "Intern";
            var tester = new Employee(testRole);
            expect(tester.getRole()).toBe(testRole);
        });
    });
    
});