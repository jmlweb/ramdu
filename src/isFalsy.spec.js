import assert from 'assert';
import isFalsy from './isFalsy';

describe('isFalsy', () => {
  it('returns true', () => {
    assert.equal(isFalsy(undefined), true);
    assert.equal(isFalsy(null), true);
    assert.equal(isFalsy(0), true);
    assert.equal(isFalsy(''), true);
  });
  it('returns false', () => {
    assert.equal(isFalsy(1), false);
    assert.equal(isFalsy('1'), false);
  });
});
