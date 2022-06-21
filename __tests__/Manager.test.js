const Manager = require("../lib/Manager");

test('initiate an manager', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
});

test('tests manager name', () => {
    const manager = new Manager("Wesley");

    expect(manager.name).toBe(name);
});

test('tests manager id', () => {
    const manager = new Manager("Wesley");

    expect(manager.id).toBe(id);

});

test('tests manager email', () => {
    const manager = new Manager("Wesley");

    expect(employe.email).toBe(email);
});

test('tests manager role', () => {
    const manager = new Manager("Wesley");

    expect(manager.role).toBe(role);
});