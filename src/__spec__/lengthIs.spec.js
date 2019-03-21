import assert from 'assert';
import lengthIs from '../lengthIs';

describe('lengthIs', () => {
  it('returns true', () => {
    assert.equal(lengthIs(3, 'foo'), true);
    assert.equal(lengthIs(3, ['a', 'b', 'c']), true);
    assert.equal(lengthIs(3)('foo'), true);
  });
  it('returns false', () => {
    assert.equal(lengthIs(4, 'foo'), false);
    assert.equal(lengthIs(4, ['a', 'b', 'c']), false);
  });
});
