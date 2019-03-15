import assert from 'assert';
import isTruthy from './isTruthy';

describe('isTruthy', () => {
  it('returns true', () => {
    assert.equal(isTruthy(1), true);
    assert.equal(isTruthy('1'), true);
  });
  it('returns false', () => {
    assert.equal(isTruthy(undefined), false);
    assert.equal(isTruthy(null), false);
    assert.equal(isTruthy(0), false);
    assert.equal(isTruthy(''), false);
  });
});
