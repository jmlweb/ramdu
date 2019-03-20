import assert from 'assert';
import strPathOr from '../strPathOr';

describe('strPathOr', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns default value', () => {
    assert.equal(strPathOr('bar', 'a.b.d', obj), 'bar');
  });
  it('returns prop value', () => {
    assert.equal(strPathOr('bar', 'a.b.c', obj), 'foo');
  });
});
