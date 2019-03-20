import assert from 'assert';

import strNotHasPath from '../strNotHasPath';

describe('strNotHasPath', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('returns true', () => {
    assert.equal(strNotHasPath('a.b.d')(obj), true);
  });
  it('returns false', () => {
    assert.equal(strNotHasPath('a.b.c', obj), false);
  });
});
