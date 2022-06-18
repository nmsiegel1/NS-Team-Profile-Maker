const Employee = require('../lib/Employee');

test('initiate an employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");

});

test('tests player name', () => {
    const employee = new Employee("Dave");

    expect(employee.name).toBe(name)
})

// test('tests employee id'), () => {
//     const employee = new Employee("Dave");

//     expect(employee.id).toBe(id)

// }

// test('tests employee email'), () => {
//     const employee = new Employee("Dave");

//     expect(employe.email).toBe(email);
// }
