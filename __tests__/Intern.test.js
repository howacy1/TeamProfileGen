const Intern = require('../lib/Intern');

test('creates a new intern object, and gets the school', () => {
    const intern = new Intern('John');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets the role of the employee", () => {
    const employee = new Intern('John');

    expect(employee.getRole()).toBe('Intern');
});