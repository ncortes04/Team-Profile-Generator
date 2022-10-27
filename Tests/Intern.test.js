const Engineer = require("../Lib/Intern");

test("Can use subq function to get School name", () => {
  const testSubq = "Harvard";
  var create = new Engineer("joey", 8192834, "joey@gmail.com", testSubq);
  expect(create.subq()).toBe(testSubq);
});

test("getRole should return intern", () => {
  const intern = "Intern";
  var create = new Engineer("joey", 8192834, "joey@gmail.com", "ncortes");
  expect(create.getRole()).toBe(intern);
});

