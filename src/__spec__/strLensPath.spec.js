import assert from 'assert';
import { view } from 'ramda';

import strLensPath from '../strLensPath';

describe('strLensPath', () => {
  const obj = {
    a: {
      b: {
        c: 'foo',
      },
    },
  };
  it('works', () => {
    const fooLens = strLensPath('a.b.c');
    assert.equal(view(fooLens, obj), 'foo');
  });
});
