const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jack', 'jackH21@gmail.com', '123456');

    expect(employee.name).toBe('Jack');
    expect(employee.email).toBe('jackH21@gmail.com');
    expect(employee.id).toBe('123456');
});

test('retrieves employees role data', () => {
    const employee = new Employee('Jack');

    expect(employee.getRole()).toBe('Employee');
});