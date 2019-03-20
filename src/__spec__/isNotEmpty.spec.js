import assert from 'assert';
import isNotEmpty from '../isNotEmpty';

describe('isNotEmpty', () => {
  it('returns true', () => {
    assert.equal(isNotEmpty('a'), true);
    assert.equal(isNotEmpty({ a: 'a' }), true);
  });
  it('returns false', () => {
    assert.equal(isNotEmpty(''), false);
    assert.equal(isNotEmpty({}), false);
  });
});
