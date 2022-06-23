const Manager = require("../lib/Manager");

// tests for Manager class
test("initiate an manager", () => {
  const manager = new Manager();

  expect(typeof manager).toBe("object");
});

test("tests manager name", () => {
  const manager = new Manager("Wesley");

  expect(manager.getName()).toHaveProperty("name");
});

test("tests manager id", () => {
  const manager = new Manager("Wesley");

  expect(manager.getId()).toHaveProperty("id");
});

test("tests manager email", () => {
  const manager = new Manager("Wesley");

  expect(manager.getEmail()).toHaveProperty("email");
});

test("tests manager role", () => {
  const manager = new Manager("Wesley");

  expect(manager.getRole()).toEqual(expect.any(String));
});
