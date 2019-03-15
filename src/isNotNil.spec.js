import assert from 'assert';
import isNotNil from './isNotNil';

describe('isNotNil', () => {
  it('returns true', () => {
    assert.equal(isNotNil('a'), true);
  });
  it('returns false', () => {
    assert.equal(isNotNil(undefined), false);
  });
});
