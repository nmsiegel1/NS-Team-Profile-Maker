const Employee = require("../lib/Employee");

test('initiate an employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('tests employee name', () => {
    const employee = new Employee("Wesley");

    expect(employee.name).toBe(name);
});

test('tests employee id', () => {
    const employee = new Employee("Wesley");

    expect(employee.id).toBe(id);

});

test('tests employee email', () => {
    const employee = new Employee("Wesley");

    expect(employe.email).toBe(email);
});

test('tests employee role', () => {
    const employee = new Employee("Wesley");

    expect(employee.role).toBe(role);
});