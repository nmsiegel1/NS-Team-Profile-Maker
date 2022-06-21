const Intern = require("../lib/Intern")

test('initiate an intern', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");
});

test('tests intern name', () => {
    const intern = new Intern("Wesley");

    expect(intern.name).toBe(name);
});

test('tests intern id', () => {
    const intern = new Intern("Wesley");

    expect(intern.id).toBe(id);

});

test('tests intern email', () => {
    const intern = new Intern("Wesley");

    expect(employe.email).toBe(email);
});

test('tests intern role', () => {
    const intern = new Intern("Wesley");

    expect(intern.role).toBe(role);
});