const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Jack', 'jackh21@gmail.com', '123456', 'jack-johnson');

    expect(employee.name).toBe('Jack');
    expect(employee.email).toBe('jackH21@gmail.com');
    expect(employee.id).toBe('123456');
    expect(employee.github).toBe('jack-johnson');

});

test('get engineer role data and github', () => {
    const engineer = new Engineer('Jack');

    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toBe(employee.github);
});
