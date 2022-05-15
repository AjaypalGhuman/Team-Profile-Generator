const Manager = require('../lib/Manager');

test('creates manager', () => {
    const manager = new Manager('Jack Paul', 3456, 'jack@paul.com', 3456);

    expect(manager.name).toBe('Jack Paul');

    expect(manager.id).toEqual(expect.any(Number));

    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('retrieves all info for manager', () => {
    const manager = new Manager('Jack Paul', 3456, 'jack@paul.com', 3456);

    expect(manager.getName()).toBe(manager.name);

    expect(manager.getId()).toBe(manager.id);

    expect(manager.getEmail()).toBe(manager.email);

    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);

    expect(manager.getRole()).toBe('Manager');
});