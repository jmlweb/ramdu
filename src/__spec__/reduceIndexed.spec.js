import assert from 'assert';
import reduceIndexed from '../reduceIndexed';

describe('reduceIndexed', () => {
  it('works', () => {
    assert.equal(
      reduceIndexed((acc, curr, idx) => `${acc}${curr}.${idx},`, '', ['a', 'b', 'c']),
      'a.0,b.1,c.2,',
    );
  });
});
