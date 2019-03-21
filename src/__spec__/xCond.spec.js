import assert from 'assert';
import xCond from '../xCond';

describe('xCond', () => {
  const a = 3;
  it('works', () => {
    assert.equal(xCond([[a < 2, '1'], [a < 1, '2'], [a === 3, '3'], [a > 2, '4']]), '3');
    assert.equal(xCond([[a > 4, 'a']]), undefined);
  });
});
