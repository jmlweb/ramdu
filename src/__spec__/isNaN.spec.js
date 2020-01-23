import assert from 'assert';
import isNaN from '../isNaN';

describe('isNaN', () => {
  it('returns true', () => {
    assert.equal(isNaN(Number('a')), true);
    assert.equal(isNaN(Number('*')), true);
  });
  it('returns false', () => {
    assert.equal(isNaN(undefined), false);
    assert.equal(isNaN(null), false);
    assert.equal(isNaN(1), false);
    assert.equal(isNaN(Number('')), false);
    assert.equal(isNaN('1'), false);
    assert.equal(isNaN(true), false);
    assert.equal(isNaN(false), false);
    assert.equal(isNaN(0), false);
  });
});
