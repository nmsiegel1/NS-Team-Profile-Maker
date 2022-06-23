const Intern = require("../lib/Intern");

// tests for Intern class
test("initiate an intern", () => {
  const intern = new Intern();

  expect(typeof intern).toBe("object");
});

test("tests intern name", () => {
  const intern = new Intern("Wesley");

  expect(intern.getName()).toHaveProperty("name");
});

test("tests intern id", () => {
  const intern = new Intern("Wesley");

  expect(intern.getId()).toHaveProperty("id");
});

test("tests intern email", () => {
  const intern = new Intern("Wesley");

  expect(intern.getEmail()).toHaveProperty("email");
});

test("tests intern role", () => {
  const intern = new Intern("Wesley");

  expect(intern.getRole()).toEqual(expect.any(String));
});
