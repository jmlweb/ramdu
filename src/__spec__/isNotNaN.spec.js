import assert from 'assert';
import isNotNaN from '../isNotNaN';

describe('isNaN', () => {
  it('returns true', () => {
    assert.equal(isNotNaN(undefined), true);
    assert.equal(isNotNaN(null), true);
    assert.equal(isNotNaN(1), true);
    assert.equal(isNotNaN(Number('')), true);
    assert.equal(isNotNaN('1'), true);
    assert.equal(isNotNaN(true), true);
    assert.equal(isNotNaN(false), true);
    assert.equal(isNotNaN(0), true);
  });
  it('returns false', () => {
    assert.equal(isNotNaN(Number('a')), false);
    assert.equal(isNotNaN(Number('*')), false);
  });
});
