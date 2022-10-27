const Engineer = require("../Lib/Engineer");

test("Can use subq function to get github name", () => {
  const testSubq = "ncortes";
  const create = new Engineer("joey", 8192834, "joey@gmail.com", testSubq);
  expect(create.subq()).toBe(testSubq);
});

test("getRole should return engineer", () => {
  const engineer = "Engineer";
  const create = new Engineer("joey", 8192834, "joey@gmail.com", "ncortes");
  expect(create.getRole()).toBe(engineer);
});

