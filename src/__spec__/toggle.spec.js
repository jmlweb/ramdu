import assert from 'assert';

import toggle from '../toggle';

describe('toggle', () => {
  it('returns first argument', () => {
    assert.equal(toggle('a', 'b', 'b'), 'a');
    assert.equal(toggle('a', 'b')('b'), 'a');
  });
  it('returns second argument', () => {
    assert.equal(toggle('a', 'b', 'a'), 'b');
    assert.equal(toggle('a', 'b')('a'), 'b');
  });
});
