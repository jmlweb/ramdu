import assert from 'assert';
import toFixedNumber from './toFixedNumber';

describe('toFixed', () => {
  it('works', () => {
    assert.equal(toFixedNumber(2, 23.56786), 23.57);
    assert.equal(toFixedNumber(2)(23.56212), 23.56);
  });
});
