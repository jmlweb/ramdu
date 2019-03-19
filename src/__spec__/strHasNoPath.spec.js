import assert from 'assert';

import strHasNoPath from '../strHasNoPath';

describe('strHasNoPath', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strHasNoPath('a.b.d')(obj), true);
  });
  it('returns false', () => {
    assert.equal(strHasNoPath('a.b.c', obj), false);
  });
});
