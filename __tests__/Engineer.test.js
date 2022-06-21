const Engineer = require('../lib/Engineer');

test('initiate an engineer', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
});

test('tests engineer name', () => {
    const engineer = new Engineer("Wesley");

    expect(engineer.name).toBe(name);
});

test('tests engineer id', () => {
    const engineer = new Engineer("Wesley");

    expect(engineer.id).toBe(id);

});

test('tests engineer email', () => {
    const engineer = new Engineer("Wesley");

    expect(employe.email).toBe(email);
});

test('tests engineer role', () => {
    const engineer = new Engineer("Wesley");

    expect(engineer.role).toBe(role);
});