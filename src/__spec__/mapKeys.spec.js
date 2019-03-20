import assert from 'assert';
import { toUpper } from 'ramda';

import mapKeys from '../mapKeys';

describe('evolveKeys', () => {
  it('works', () => {
    const obj = {
      a: 'a',
      b: 'b',
      c: 'c',
    };
    assert.deepEqual(mapKeys(toUpper, obj), {
      A: 'a',
      B: 'b',
      C: 'c',
    });
  });
});
