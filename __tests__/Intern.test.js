const Intern = require('../lib/Intern');

test('create a new intern', () => {
    const employee = new Intern('Jack', '123456', 'jackh21@gmail.com', 'FIU');

    expect(employee.name).toBe('Jack');
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.school).toEqual(expect.any(String));
});

test('gets all required data for Interns', () => {
    const employee = new Intern('Jack', 123456, 'jackh21@gmail.com', 'FIU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    
    expect(employee.getRole()).toBe('Intern');
});