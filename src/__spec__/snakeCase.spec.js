import assert from 'assert';
import snakeCase from '../snakeCase';

describe('snakeCase', () => {
  it('works', () => {
    assert.equal(snakeCase('My name is Earl'), 'my_name_is_earl');
    assert.equal(snakeCase('José Manuel Lucas Muñoz'), 'jose_manuel_lucas_munoz');
  });
});
