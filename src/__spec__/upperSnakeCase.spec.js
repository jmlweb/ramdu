import assert from 'assert';
import upperSnakeCase from '../upperSnakeCase';

describe('upperSnakeCase', () => {
  it('works', () => {
    assert.equal(upperSnakeCase('My name is Earl'), 'MY_NAME_IS_EARL');
    assert.equal(upperSnakeCase('José Manuel Lucas Muñoz'), 'JOSE_MANUEL_LUCAS_MUNOZ');
  });
});
