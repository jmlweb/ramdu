import assert from 'assert';
import strPathNotEq from '../strPathNotEq';

describe('strPathNotEq', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strPathNotEq('a.b.c', 'bar', obj), true);
  });
  it('returns false', () => {
    assert.equal(strPathNotEq('a.b.c', 'foo', obj), false);
    assert.equal(strPathNotEq('a.b.c', 'foo')(obj), false);
  });
});
