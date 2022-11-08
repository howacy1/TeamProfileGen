const Manager = require('../lib/Manager');

test('creates a new manager object, and gets office number', () => {
    const manager = new Manager('John');

    expect(manager.getOffice()).toEqual(expect.stringContaining(manager.office));
});

test("gets the role of the employee", () => {
    const employee = new Manager('John');

    expect(employee.getRole()).toBe('Manager');
});