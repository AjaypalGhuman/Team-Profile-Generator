const Engineer = require('../lib/Engineer');

test('creation of engineer', () => {
    const engineer = new Engineer('Jack Paul', 3456, 'jack@paul.com', 'jack-paul');
  
    expect(engineer.name).toBe('Jack Paul');

    expect(engineer.id).toEqual(expect.any(Number));

    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toEqual(expect.any(String));
});
  
  test('retrieves all info for engineer', () => {
    const engineer = new Engineer('Jack', 3456, 'jack@paul.com', 'jack-paul');
  
    expect(engineer.getName()).toBe(engineer.name);

    expect(engineer.getId()).toBe(engineer.id);

    expect(engineer.getEmail()).toBe(engineer.email);

    expect(engineer.getGithub()).toBe(engineer.github);

    expect(engineer.getRole()).toBe('Engineer');
  
});