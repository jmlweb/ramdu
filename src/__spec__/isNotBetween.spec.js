import assert from 'assert';
import isNotBetween from '../isNotBetween';

describe('isNotBetween', () => {
  it('returns true', () => {
    assert.equal(isNotBetween(1, 3, 4), true);
  });
  it('returns false', () => {
    assert.equal(isNotBetween(1, 5, 4), false);
    assert.equal(isNotBetween(1, 5)(1), false);
    assert.equal(isNotBetween(1)(5)(5), false);
  });
});
