import assert from 'assert';
import isPlainObject from '../isPlainObject';

describe('isNotNil', () => {
  const a = {
    foo: 'bar',
  };

  class B {
    constructor(str) {
      this.foo = str;
    }
  }

  const c = new B('bar');

  it('returns true', () => {
    assert.equal(isPlainObject(a), true);
  });
  it('returns false', () => {
    assert.equal(isPlainObject(B), false);
    assert.equal(isPlainObject(c), false);
  });
});
