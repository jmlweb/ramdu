import assert from 'assert';

import xIfElse from '../xIfElse';

describe('xIfElse', () => {
  it('returns first argument', () => {
    assert.equal(xIfElse(true, 'a', 'b'), 'a');
  });
  it('returns second argument', () => {
    assert.equal(xIfElse(false, 'a', 'b'), 'b');
  });
});
