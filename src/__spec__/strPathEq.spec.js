import assert from 'assert';
import strPathEq from '../strPathEq';

describe('strPathEq', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strPathEq('a.b.c', 'foo', obj), true);
    assert.equal(strPathEq('a.b.c', 'foo')(obj), true);
  });
  it('returns false', () => {
    assert.equal(strPathEq('a.b.c', 'bar', obj), false);
  });
});
