import assert from 'assert';
import camelCase from './camelCase';

describe('camelCase', () => {
  it('works', () => {
    assert.equal(camelCase('My name is Earl'), 'myNameIsEarl');
    assert.equal(camelCase('my-name-is-earl'), 'myNameIsEarl');
  });
});
