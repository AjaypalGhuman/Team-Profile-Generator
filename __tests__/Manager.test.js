const { Manager } = require('../lib/Manager');

test('create manager', () => {
    const employee = new Manager('Jack', 'jackH21@gmail.com', '123456', '125678');

    expect(employee.name).toBe('Jack');
    expect(employee.email).toBe('jackH21@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('retrieves managers role', () => {
    const employee = new Manager('Jack');

    expect(employee.getRole()).toBe('Manager');
})