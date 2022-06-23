const Engineer = require("../lib/Engineer");

// tests for Engineer class
test("initiate an engineer", () => {
  const engineer = new Engineer();

  expect(typeof engineer).toBe("object");
});

test("tests engineer name", () => {
  const engineer = new Engineer("Wesley");

  expect(engineer.getName()).toHaveProperty("name");
});

test("tests engineer id", () => {
  const engineer = new Engineer("Wesley");

  expect(engineer.getId()).toHaveProperty("id");
});

test("tests engineer email", () => {
  const engineer = new Engineer("Wesley");

  expect(engineer.getEmail()).toHaveProperty("email");
});

test("tests engineer role", () => {
  const engineer = new Engineer("Wesley");

  expect(engineer.getRole()).toEqual(expect.any(String));
});
