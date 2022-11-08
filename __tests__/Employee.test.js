const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 'johndoe@asdf.com', '0');

    expect(employee.name).toBe('John');
    expect(employee.email).toBe('johndoe@asdf.com');
    expect(employee.id).toBe('0'); 
});

test("asks for employees' id name", () => {
    const employee = new Employee('John');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("asks for employees' email", () => {
    const employee = new Employee('John');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("asks for employees' id number", () => {
    const employee = new Employee('John');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets the role of the employee", () => {
    const employee = new Employee('John');

    expect(employee.getRole()).toBe('employee');
});