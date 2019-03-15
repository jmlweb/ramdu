import assert from 'assert';
import isNot from './isNot';

describe('isNot', () => {
  it('returns true', () => {
    assert.equal(isNot(String, 1), true);
    assert.equal(isNot(String, undefined), true);
  });
  it('returns false', () => {
    assert.equal(isNot(String, '1'), false);
  });
});
