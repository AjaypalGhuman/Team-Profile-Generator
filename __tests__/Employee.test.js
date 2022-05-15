const Employee = require('../lib/Employee');

test('creates employee', () => {
    const employee = new Employee('Jack Paul', 3456, 'jack@paul.com');

    expect(employee.name).toBe('Jack Paul');

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));
});

test('retrieves all info for eomployee', () => {
    const employee = new Employee('Jack Paul', 3456, 'jack@paul.com');

    expect(employee.getName()).toBe(employee.name);

    expect(employee.getId()).toBe(employee.id);

    expect(employee.getEmail()).toBe(employee.email);

    expect(employee.getRole()).toBe('Employee');
});