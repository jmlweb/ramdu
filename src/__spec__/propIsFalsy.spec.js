import assert from 'assert';
import propIsFalsy from '../propIsFalsy';

describe('propIsFalsy', () => {
  it('returns true', () => {
    assert.equal(propIsFalsy('a', { b: 1 }), true);
    assert.equal(propIsFalsy('a', { a: null, b: 1 }), true);
  });
  it('returns false', () => {
    assert.equal(propIsFalsy('a', { a: 2, b: 1 }), false);
  });
});
