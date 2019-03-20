import assert from 'assert';
import isBetween from '../isBetween';

describe('isBetween', () => {
  it('returns true', () => {
    assert.equal(isBetween(1, 5, 4), true);
    assert.equal(isBetween(1, 5)(1), true);
    assert.equal(isBetween(1)(5)(5), true);
  });
  it('returns false', () => {
    assert.equal(isBetween(1, 3, 4), false);
  });
});
