const Engineer = require("../Lib/Manager");

test("Can use subq function to get office number", () => {
  const testSubq = "2812084";
  var create = new Engineer("joey", 8192834, "joey@gmail.com", testSubq);
  expect(create.subq()).toBe(testSubq);
});

test("getRole should return manager", () => {
  const manager = "Manager";
  var create = new Engineer("joey", 8192834, "joey@gmail.com", "ncortes");
  expect(create.getRole()).toBe(manager);
});

