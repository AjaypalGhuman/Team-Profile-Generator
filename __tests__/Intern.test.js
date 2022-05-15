const Intern = require('../lib/Intern');

test('creates Intern', () => {
    const intern = new Intern('Jack Paul', 3456, 'jack@paul.com', 'FIU');

    expect(intern.name).toBe('Jack Paul');

    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.email).toEqual(expect.any(String));

    expect(intern.school).toEqual(expect.any(String));
});

test('retrieves all info on intern', () => {
    const intern = new Intern('Jack Paul', 3456, 'jack@paul.com', 'FIU');

    expect(intern.getName()).toBe(intern.name);

    expect(intern.getId()).toBe(intern.id);

    expect(intern.getEmail()).toBe(intern.email);

    expect(intern.getSchool()).toBe(intern.school);

    expect(intern.getRole()).toBe('Intern');
});